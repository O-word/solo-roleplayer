const { contextBridge } = require("electron");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");

function readJsonIfPortableShard(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw);
    if (parsed && parsed.format === "shard" && parsed.state && typeof parsed.state === "object") {
      return parsed;
    }
  } catch (err) {}
  return null;
}

function readSqliteLegacyShard(filePath) {
  let tempDir = "";
  try {
    tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "solo-m-legacy-"));
    const tempDb = path.join(tempDir, path.basename(filePath));
    fs.copyFileSync(filePath, tempDb);
    const rawState = execFileSync("sqlite3", [tempDb, "select state_json from shard_runtime limit 1;"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"]
    }).trim();
    if (!rawState) return null;
    const state = JSON.parse(rawState);
    if (!state || typeof state !== "object") return null;
    return {
      format: "shard",
      version: "legacy-sqlite-bridge-001",
      exportedAt: new Date(fs.statSync(filePath).mtimeMs || Date.now()).toISOString(),
      worldName: state.worldName || state.worldSetup?.worldName || "Legacy World",
      slot: Number(state.selectedSlot || state.slot || 1),
      shardSlotHint: Number(state.selectedSlot || state.slot || 1),
      mode: state.mode || "construct",
      appVersion: "legacy-sqlite-import",
      currentRoom: state.currentRoom || "R000",
      mapLayout: state.mapLayout || "1",
      player: state.playerProfile || {},
      companion: state.companion || {},
      worldSetup: state.worldSetup || {},
      boundaries: Array.isArray(state.boundaries) ? state.boundaries : [],
      ai_runtime: state.aiRuntime || {},
      stasis_shadow: state.stasisShadow || null,
      sqlite_handoff: state.stasisShadow?.sqliteHandoff || null,
      persistence_model: {
        truth: "legacy sqlite shard",
        local_index: "rebuild from imported state",
        privacy_mode: "leave-no-trace capable",
        storage_hint: "sqlite shard bridge"
      },
      state,
      note: "Imported from legacy SQLite shard."
    };
  } catch (err) {
    return null;
  } finally {
    try {
      if (tempDir) fs.rmSync(tempDir, { recursive: true, force: true });
    } catch (err) {}
  }
}

function legacyShardFingerprint(payload) {
  const state = payload?.state || {};
  const companion = state.companion || payload?.companion || {};
  const worldSetup = state.worldSetup || payload?.worldSetup || {};
  const selectedTropes = Array.isArray(companion.selectedTropes) ? companion.selectedTropes.slice(0, 3) : [];
  return JSON.stringify({
    worldName: state.worldName || payload?.worldName || worldSetup.worldName || "",
    companionName: companion.name || companion.firstName || "",
    baselineTrope: companion.baselineTrope || "",
    selectedTropes
  });
}

function listShardFilesInDir(dirPath) {
  try {
    return fs.readdirSync(dirPath, { withFileTypes: true })
      .filter(entry => entry.isFile() && entry.name.toLowerCase().endsWith('.shard'))
      .map(entry => path.join(dirPath, entry.name));
  } catch (err) {
    return [];
  }
}

function collectLegacyShardPaths() {
  const home = os.homedir();
  const candidates = [
    ...listShardFilesInDir(path.join(home, 'Downloads')),
    ...listShardFilesInDir(path.join(home, 'Library', 'Application Support', 'com.soloroleplayer.free.sid671beta', 'shards')),
    ...listShardFilesInDir(path.join(home, 'Library', 'Application Support', 'com.soloroleplayer.free.sid672beta', 'shards')),
    ...listShardFilesInDir(path.join(home, 'Library', 'Application Support', 'com.soloroleplayer.free.sid672betatest', 'shards'))
  ];
  return [...new Set(candidates)];
}

function readLegacyShards() {
  const seen = new Set();
  const results = [];
  for (const filePath of collectLegacyShardPaths()) {
    const portable = readJsonIfPortableShard(filePath);
    const payload = portable || readSqliteLegacyShard(filePath);
    if (!payload || !payload.state || typeof payload.state !== 'object') continue;
    const fingerprint = legacyShardFingerprint(payload);
    if (seen.has(fingerprint)) continue;
    seen.add(fingerprint);
    let modifiedAt = '';
    try {
      modifiedAt = new Date(fs.statSync(filePath).mtimeMs || Date.now()).toISOString();
    } catch (err) {}
    results.push({
      sourcePath: filePath,
      sourceType: portable ? 'portable_shard' : 'legacy_sqlite_shard',
      modifiedAt,
      payload
    });
  }
  results.sort((a, b) => String(a.modifiedAt || '').localeCompare(String(b.modifiedAt || '')));
  return results;
}

contextBridge.exposeInMainWorld('soloDesktop', {
  platform: process.platform,
  runtime: 'electron',
  readLegacyShards
});
