# SoloRoleplayer M

An offline, privacy-first roleplay app for one player and an AI companion. It runs on your own computer and talks to a local AI model server you already run (LM Studio, Ollama, KoboldCPP or llama.cpp). It adds scene memory, relationship stages, worlds, companions you build yourself, and reply repair on top of the model.

Free for noncommercial use. Commercial use by license (`COMMERCIAL_LICENSE.md`).

## Get it (Windows, test build 6.7.5)
Download the installer or the portable file from the **Releases** page. The files are not signed with a paid Windows certificate yet, so Windows will say "Windows protected your PC". Click **More info**, then **Run anyway**. Checksums and VirusTotal scan links (0 flags on 2026-10-10) are on the release page. Full steps: `docs/0_WINDOWS_INSTALL.md`.

**Built on a Mac, verified under Wine.** The author has no Windows computer, so the Windows portable file was checked in Wine (a Windows compatibility layer) on a Mac on 2026-10-10: it starts, runs the full setup, creates a companion, loads a world and answers commands, and the `/exit` fix holds. It has not been run on a real Windows PC yet, and the installer file was not tested, so real machines may differ. Please report problems with your Windows version, what happened and a screenshot. Fixes can be made quickly.

## How it differs from SillyTavern
SillyTavern is the mature choice for **chat-style play**: free-flowing back and forth, swipes, many characters in group chats, deep lorebooks, expressions and voices, cloud or local models, and a huge extension community. SoloRoleplayer is for **structured, turn-based roleplay** in the style of the MUSH games: you write your pose, the companion writes only its own, inside a world with rooms, a map, scene memory and pictures and ambience for each room, one companion per world session.

| | SoloRoleplayer | SillyTavern |
|---|---|---|
| Free-flowing chat | ◐ plain talk in Construct mode | ✓ |
| Structured, turn-based play (you pose, it poses) | ✓ core design | ◐ group turn orders |
| MUSH-style commands (`say`, `:`, `@emit`, `+ooc`) | ✓ | — |
| App keeps the AI in its own lane and repairs replies | ✓ | — not documented as built in |
| Swipes (try another reply) | — not in this build | ✓ |
| Rooms, exits and a fixed map | ✓ | — not documented as built in |
| Pictures and ambience per room | ✓ | ◐ backgrounds built in; ambient audio by extension |
| Single-companion world sessions with save slots | ✓ three slots | — |
| App-tracked scene memory (place, clothes, who holds what) | ✓ | ◐ summaries, vector memory, Author's Note |
| Lorebook / world info | ◐ Library and world codex | ✓ deep |
| Relationship stages | ✓ `/arc` | — not documented |
| Many characters in one chat | — one companion per world; NPCs unfinished | ✓ group chats |
| Expressions, voices, generated images | — | ✓ via extensions |
| Cloud model APIs | — local only by design | ✓ |
| Platforms | ◐ Windows test build; Mac from source | ✓ Windows, Mac, Linux, Docker, Android (Termux) |
| Extensions and customization | — themes, backgrounds, style packets | ✓ |
| Runs on your machine, no tracking | ✓ | ✓ |
| Published benchmark and a model trained to stay in lane | ✓ | — not applicable |
| Maturity | early beta, one maker | established, 300+ contributors |
| Cost and license | free for noncommercial use; source available | free and open source (AGPL-3.0) |

✓ yes, built in. ◐ partly, or through add-ons. — no, or not documented. The SillyTavern column is based on its public documentation (docs.sillytavern.app) as of October 10, 2026; if we got something wrong, please open an issue. Full page with notes: solo.wordblocklabs.com/compare.

## Version history
See `CHANGELOG.md` for what changed in each version, the benchmark results and the known issues. Website: solo.wordblocklabs.com. The LoRA add-on (Anti-H 2.0) is on Hugging Face: huggingface.co/WordBlockLabs/solo-r-lane-lora.

## Guides
- `docs/0_WINDOWS_INSTALL.md`: install, the "install anyway" steps, checksums, minimum requirements
- `docs/1_GET_STARTED.md`: your first scene
- `docs/2_COMMANDS_OVERVIEW.md`: every command
- `docs/3_BUILD_A_WORLD.md`: building a world
- `docs/4_COMPANION_FIELDS_GUIDE.md`: what each companion field does and how it is weighted

## System requirements
Windows 10 or 11 (64-bit), a local AI server, and 16 GB of RAM minimum (32 GB comfortable). Full details in `docs/0_WINDOWS_INSTALL.md` and `docs/1_GET_STARTED.md`.

**16 GB of RAM note:** On 16 GB of RAM the model may run RAM hot and stop inside of SoloRoleplayer even if the LLM server keeps running. You do not have to exit your session, just restart the LLM server (Ollama, Cute LM, etc.) and continue from the error once it's live again. It's a known limitation of smaller RAM allotments but from my testing (On a Mac) has been safe to run in multi-hour sessions. On average 2 restarts for every few hours of play.

## Known limits
**Head-hopping:** If the model starts to head hop, it can be reset by stopping your LLM server, closing the SoloRoleplayer session and restarting both. The model is still being perfected and still hiccups now and again.

The NPC system is still being worked on. It will be fully tested and made more usable in later versions.
Importing very old Mac-era `.shard` save files in the SQLite format needs `sqlite3` installed and is built around Mac folders, so on Windows it may not find them. Normal saves and the current shard format are not affected.

## Run from source
`npm install`, then `npm start` (needs Node.js). The Windows installers are built with `npm run dist:win`.

## Privacy
No chat is saved to disk by design. No companions, packs or saves are included in this repository or the installers; yours stay yours.

## Related
- Solo R Benchmark Harness (a test tool for this app): see the author's repositories.
- Westwild, a free tabletop RPG, at wordblocklabs.com/westwild

By Anthony "Othello" Merriweather, WordBlock Labs. Website: wordblocklabs.com

**Support and bug reports:** use the form at **wordblocklabs.com/support** (choose "SoloRoleplayer support"; screenshots are welcome) or email support@wordblocklabs.com. For the Windows build, please include your Windows version.
