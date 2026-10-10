# SoloRoleplayer M for Windows, 6.7.5-beta (test build)

Two files, pick one:
- **SoloRoleplayer.M.Windows.Setup.6.7.5-beta.exe**: normal installer (64-bit Windows 10 or 11)
- **SoloRoleplayer.M.Windows.Portable.6.7.5-beta.exe**: no install, just run it

**New in 6.7.5-beta:** fixed the black screen when choosing New World after `/exit`.

**Not certified yet.** The files are not signed with a paid certificate, so Windows shows "Windows protected your PC". Click **More info**, then **Run anyway**.

**Built on a Mac, not tested on Windows.** The author has no Windows computer. You are the first testers. Please report problems with your Windows version, what happened and a screenshot.

Needs a local AI server (LM Studio, Ollama, KoboldCPP or llama.cpp) at http://127.0.0.1:1234. 16 GB RAM minimum. For a 12B to 14B model, an NVIDIA card with 8 GB video memory is the minimum and 12 GB or more is comfortable; no card works, slowly. About 15 GB free disk.

**16 GB of RAM note:** On 16 GB of RAM the model may run RAM hot and stop inside of SoloRoleplayer even if the LLM server keeps running. You do not have to exit your session, just restart the LLM server (Ollama, Cute LM, etc.) and continue from the error once it's live again. It's a known limitation of smaller RAM allotments but from my testing has been safe to run in multi-hour sessions. On average 2 restarts for every few hours of play.

Known limit: the NPC system is still being worked on. If the model starts to head hop, it can be reset by stopping your LLM server, closing the SoloRoleplayer session and restarting both. The model is still being perfected and still hiccups now and again. Importing very old Mac-era SQLite `.shard` files may not work on Windows.

SHA-256 checksums (GitHub shows the file names with dots instead of spaces; the checksums are the same):
```
6d44a7c7250cefe491b4b52981c839e6b26d945613d057de0be7fe32b3c4714c  SoloRoleplayer M Windows Portable 6.7.5-beta.exe
5096861d1cef82363ce778a6f8df8845c8779e83f0d3f3bf2a6d317501c0c6f5  SoloRoleplayer M Windows Setup 6.7.5-beta.exe
```
VirusTotal scan, 2026-10-10 (a snapshot, not a guarantee; unsigned installers can still trigger some antivirus tools on other days):
- Setup: 0 of 64 security vendors flagged it: https://www.virustotal.com/gui/file/5096861d1cef82363ce778a6f8df8845c8779e83f0d3f3bf2a6d317501c0c6f5
- Portable: 0 of 67 security vendors flagged it: https://www.virustotal.com/gui/file/6d44a7c7250cefe491b4b52981c839e6b26d945613d057de0be7fe32b3c4714c

Bugs and questions: wordblocklabs.com/support (choose "SoloRoleplayer support") or support@wordblocklabs.com. Free for noncommercial use. Commercial use by license: support@wordblocklabs.com
