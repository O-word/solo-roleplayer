# Installing SoloRoleplayer M on Windows (SID 6.7.4 test build)

## Read this first: the app is not certified yet
This is a solo-developer test build. It is **not code-signed with a paid Windows certificate**, so Windows does not recognize the publisher and shows a warning the first time you run it. That is expected. It does not mean the file is damaged or malicious; it means Microsoft has not been paid to vouch for it yet. The suggested way to run it is the **"install anyway" path** below. You are always free to check the file first.

## Built on a Mac, not tested on Windows yet
The author builds on a Mac and has no Windows computer to test on, so this Windows build was made by cross-building and has **not been run on a real Windows PC by us**. It is built from the same app code that runs on the Mac, and the packaged files were checked against the source. If anything goes wrong, **please tell us**: what Windows version, what happened, and a screenshot. The author can correct and rebuild quickly. Your report is how this gets fixed.

## Two files, pick one
- **SoloRoleplayer M Windows Setup 6.7.4-beta.exe:** a normal installer. Adds a Start menu entry and an uninstaller.
- **SoloRoleplayer M Windows Portable 6.7.4-beta.exe:** no install; double-click and it runs. Delete the file to remove it.

## The "install anyway" path
1. Double-click the file you downloaded.
2. If a blue box titled **"Windows protected your PC"** appears (Microsoft Defender SmartScreen), click **More info**.
3. A **Run anyway** button appears. Click it.
4. For the installer, follow the prompts (you can choose the folder). For the portable file, the app just starts.
5. If your browser or antivirus holds the download ("not commonly downloaded"), choose **Keep** (or **Keep anyway**) in the browser's download list, then continue from step 1.
If your security software quarantines the file, add an exception for it or restore it from quarantine, only if you trust where you downloaded it from (our GitHub release page).

## Check the file yourself (recommended)
Each release lists a **SHA-256 checksum**. In PowerShell, run `Get-FileHash "SoloRoleplayer M Windows Setup 6.7.4-beta.exe"` and compare the value with the one on the release page. If they match, you have the exact file we built. You can also upload it to a scanner such as VirusTotal; the release page links the scan.

## First launch
1. Start your local AI server first (LM Studio, Ollama, KoboldCPP or llama.cpp with the OpenAI-compatible server on). The app expects `http://127.0.0.1:1234`; use `/connect` if yours is elsewhere.
2. Open SoloRoleplayer M. The setup wizard begins. Read `1_GET_STARTED.md`.
3. Your saves live on your own computer. `/storage` shows where. Chat itself is not written to disk.

## System requirements (short version)
Windows 10 or 11, 64-bit. 16 GB of RAM minimum (32 GB comfortable). For a 12B to 14B model: an NVIDIA graphics card with 8 GB of video memory is the practical minimum and 12 GB or more is comfortable; with no graphics card it runs, slowly. 15 GB of free disk. A screen of at least 1366 x 768 (the window will not shrink below 1180 x 760). These are estimates not yet confirmed on a real Windows PC; see `1_GET_STARTED.md` for the full table.

## Why we do not just buy the certificate
A Windows code-signing certificate costs a few hundred dollars a year and requires business verification. This is a solo, self-funded project. When there is room in the budget, signing is on the list, and the warning will go away.
