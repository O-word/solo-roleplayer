# SoloRoleplayer M

An offline, privacy-first roleplay app for one player and an AI companion. It runs on your own computer and talks to a local AI model server you already run (LM Studio, Ollama, KoboldCPP or llama.cpp). It adds scene memory, relationship stages, worlds, companions you build yourself, and reply repair on top of the model.

Free for noncommercial use. Commercial use by license (`COMMERCIAL_LICENSE.md`).

## Get it (Windows, test build 6.7.4)
Download the installer or the portable file from the **Releases** page. The files are not signed with a paid Windows certificate yet, so Windows will say "Windows protected your PC". Click **More info**, then **Run anyway**. Checksums are on the release page. Full steps: `docs/0_WINDOWS_INSTALL.md`.

**Built on a Mac, not tested on Windows.** The author has no Windows computer. If something goes wrong, please open an issue with your Windows version, what happened and a screenshot. Fixes can be made quickly.

## Guides
- `docs/0_WINDOWS_INSTALL.md`: install, the "install anyway" steps, checksums, minimum requirements
- `docs/1_GET_STARTED.md`: your first scene
- `docs/2_COMMANDS_OVERVIEW.md`: every command
- `docs/3_BUILD_A_WORLD.md`: building a world
- `docs/4_COMPANION_FIELDS_GUIDE.md`: what each companion field does and how it is weighted

## Known limits
The NPC system is still being worked on. It will be fully tested and made more usable in later versions.

## Run from source
`npm install`, then `npm start` (needs Node.js). The Windows installers are built with `npm run dist:win`.

## Privacy
No chat is saved to disk by design. No companions, packs or saves are included in this repository or the installers; yours stay yours.

## Related
- Solo R Benchmark Harness (a test tool for this app): see the author's repositories.
- Westwild, a free tabletop RPG, at wordblocklabs.com/westwild

By Anthony "Othello" Merriweather, WordBlock Labs. Questions: support@wordblocklabs.com
