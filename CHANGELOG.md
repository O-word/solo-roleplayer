# Changelog

A plain-language history of SoloRoleplayer, newest first. Versions are called SID numbers. Dates are when the work was done. This log was reconstructed from the author's own notes, so early entries are less detailed than recent ones.

## 6.7.5-beta (October 10, 2026): fix release

- Fixed the black screen after `/exit`: choosing New World from the main menu now shows the setup screen, and starting a new world after `/exit` shows the game. The cause was a leftover inline `display:none` on the setup screen and game view that removing the "hidden" class could not undo. A regression test covers it. If you installed 6.7.4-beta, please update.
- Verified the Windows portable file under Wine on a Mac (2026-10-10): it starts, completes the 14-step setup, creates a companion, loads a world, answers `/help`, and the `/exit` fix holds. Not yet run on a real Windows PC, and the installer file was not tested.
- Rebuilt the Windows installer and portable file from the public source. The installer's file list was checked against an approved list, with no saves, companions, logs or private files.

## 6.7.4-beta (October 2026): Windows test build, first public source release

**Scene memory and prompt**
- Fixed a bug in scene memory (called STASIS): one helper replaced the whole scene-state object on every message, so most updates were written to a discarded copy. Companions now actually use scene memory.
- Rebuilt the wardrobe tracker: wide clothing vocabulary, knows whose clothes are whose, replaces on change, take-off removes, ignores quoted speech. Companions stopped "liking the jeans" after a change into swim trunks.
- The live prompt used to send only the companion's name. It now sends the personality, speech pattern, relationship script, beliefs and backstory. This fixed a "bully that acts friendly" problem at its root.
- New companion fields and commands: Important Notes (`/notes`), Hard Rules (`/rules`), a Behavior Emphasis step with `/quirks`, a larger Inner Script limit, and the Nickname field now becomes an absolute rule for how the companion addresses the player.
- Scene-memory scribe (`/stasis`): every third reply and on detected changes, the model decides what to keep, clear or update.
- Briefing now includes vehicle and space interiors, and the sliders are explained to the model as individual strengths.
- Freshness guard: the briefing lists openings, comparisons and phrasings used in the last five replies, with one do-no-harm rewrite when a reply repeats them.

**Commands and interface**
- `/menu` returns to the main menu with the app still open. `/commands` is a six-page command list that is tested against the real handlers.
- Relationship arcs (`/arc`): optional stages that change how a companion treats the player over time.
- Construct (out-of-character) voice rewritten so it keeps the companion's voice without the role's attitude.
- Bare prose (text without `@emit`, `say` or `:`) is now rejected in the MUSH style instead of being sent unseen (`/bareprose`).
- `/connect` and generic model detection, so you can use your own local server with no setup. Poetic loading text on arrival.
- Ambient and YouTube links: replaced an unsupported browser prompt with an in-app paste box, and fixed a YouTube embed error.

**Text quality**
- The text cleanup used to delete closing quotation marks and the whole-reply rewrite could add head-hopping. Both fixed. Paragraph splitting now closes and reopens quotes, with local quote repair before any model rewrite.

**Privacy**
- Verified the no-internet promise: the app references only YouTube (optional), has no telemetry or updater, and opened zero network connections in a 12-second test.
- Conversation text is working memory only and is not written to disk. `/purge` removes saved data.

**Evaluation (published separately in the benchmark harness repository)**
- Built a benchmark harness. In four paired runs (864 turns), head-hopping in the player-visible reply fell from 24% (base model) to 6% (with the Anti-H 2.0 LoRA, published on Hugging Face as solo-r-lane-lora). Costs: replies were shorter (119 to 47 words), and repeated phrases rose from 52 to 192 per 1,000 words.
- The benchmark caught the quotation-mark bug above. After the fix, unmatched quote marks in the final reply fell from 58% to 1% (base) and from 12% to 0% (LoRA).
- The freshness guard cut the LoRA's repeated phrases from 192 to 72 per 1,000 words, and openers reused from the last five replies from 44% to 26%.
- Added `lane_lint`, a checker that flags head-hopping in training data.

**Windows**
- First Windows installer and portable build of the Mistral line. Built on a Mac and not tested on Windows.

**Known issues (as of 6.7.4-beta; the New World black screen was fixed in 6.7.5-beta)**
- If the model starts to head hop, it can be reset by stopping your LLM server, closing the SoloRoleplayer session and restarting both. The model is still being perfected and still hiccups now and again.
- The NPC system is still being worked on.
- Importing very old Mac-era SQLite `.shard` files may not work on Windows.

## 6.7.3 Beta (July 2026): Mistral test lane
- SoloRoleplayer M: Electron wrapper with Mistral defaults, legacy shard import, and a Mac build (July 26).

## 6.7.2 Beta (June 2026)
- Windows builds. Mac and Windows builds of the free local lane (local launcher plus a Qwen3.5 model and an optional LoRA) and a bring-your-own-API lane by June 9.

## 6.7.1 (May 23, 2026)
- First packaged releases: free local and bring-your-own-API builds for Mac and Windows, plus the first anti-head-hopping LoRA package.

## May 2026: first prototype
- May 10: an early offline roleplay shell with rooms, slash commands, Holo and Construct modes, scene memory, a Library, Shards and preferences. Anti-head-hopping LoRA work began a week later with a 500-example pilot.

## Before May 2026
- An earlier prototype called Novel World was version 1, followed by about eleven Anima Deck iterations before SID 6.5 (from the author's recollection).
