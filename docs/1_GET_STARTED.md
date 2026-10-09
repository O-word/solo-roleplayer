# SoloRoleplayer: Get Started Guide
(Written for the SID 6.7.4 test build. Source of truth for every statement below is the app's own code; where a feature may change, the guide says so.)

## What it is
SoloRoleplayer is an offline roleplay partner. You play in one scene with one companion, in a text window, using your own AI model running on your own computer. Nothing is sent to a company. Chat is not saved to disk: the app keeps only the last few rounds in memory, and `/purge` clears them at any moment.

## What you need
1. The app (this build).
2. A local AI model served the way LM Studio, Ollama, KoboldCPP or llama.cpp serve it: an OpenAI-compatible server. The app expects `http://127.0.0.1:1234` by default and uses whatever model that server has loaded.
3. If your server is somewhere else, type `/connect 8080` (a port) or `/connect http://127.0.0.1:5001` (an address). `/connect` alone checks the current one.

## Minimum system requirements

### Windows PC (what this build is for)
These are the author's engineering estimates for running a 12B to 14B model (Mistral Nemo 12B, quantized) with the LoRA. They have **not** yet been confirmed on a real Windows machine; the first testers will correct them.
| | Minimum (works, slower) | Comfortable |
|---|---|---|
| **Windows** | Windows 10, 64-bit | Windows 10 or 11, 64-bit, kept up to date |
| **Memory (RAM)** | 16 GB | 32 GB |
| **Graphics card** | NVIDIA with **8 GB** of video memory (some of the model spills to system memory) | NVIDIA with **12 GB or more** video memory so the whole model sits on the card. AMD and Intel cards work in LM Studio and KoboldCPP through Vulkan |
| **No graphics card** | Works on 16 GB of RAM with a modern processor, but replies are slow (expect many seconds to minutes per reply) | Not recommended for long sessions |
| **Processor** | 64-bit Intel or AMD, about 2015 or newer (needs AVX2) | A recent 6-core or better |
| **Disk** | 15 GB free (a quantized 12B model is about 7 to 8 GB, plus the app and saves) | 30 GB free on an SSD |
| **Screen** | 1366 x 768 works; the app window will not shrink below 1180 x 760 | 1920 x 1080 |
| **Internet** | Only to download the app and your model; play is offline | |
- **Model size:** about 14 billion parameters or smaller is the tested class. Bigger models write better and need more video memory or system memory.
- **The scene scribe** (`/stasis`) is a second model pass. On slower machines it takes noticeably longer; you can turn it off or run it less often (`/stasis scribe off`, `/stasis every N`).

### Mac (the author's test machine)
A **16 GB MacBook Air (Apple silicon)** running a model of about 14B or smaller is the tested floor. There a reply takes a few seconds to tens of seconds, and the scene scribe takes about 35 to 40 seconds per pass. Less than 16 GB of memory is not tested.

Tell us what you ran it on and how it felt; that is the most useful test report.

## The two rooms
- **Construct:** a blank white room. Setup, questions, help, editing. Free conversation with your companion about the app.
- **Holo:** the story. In-character play. `/start` enters the Holo, `/stop` or `/construct` returns.

## Your first five minutes
1. Launch the app. The setup wizard walks you through 14 short steps: world, companion, you, and the look of the app. Guides 3 and 4 explain every field.
2. Finish setup. You land in the Construct. Type `/help` for a short list, or `/commands` for every command.
3. Type `/start` to enter the Holo.
4. Write a pose. Use `@emit` (or `@e`) for a full pose, `say` or `s` for speech, `:` for a quick emote, `%r` and `%t` for the other two styles. Example: `@emit I push the door open slowly and wait on the threshold.`
5. Your companion answers in character. Keep playing. Type `+ooc I'd like it a bit slower` any time to step out and give feedback; the app saves it as a preference.

## The five habits that make it good
1. **Be specific.** The model fills every gap you leave. See guide 4: vague fields give vague play.
2. **Fix it as you go** with `+ooc`, `/notes`, `/rules`, `/quirks`, and `/persona on` instead of rebuilding the companion.
3. **Match your length.** The companion tries to match the length and detail of your pose. Short in, short out; long in, long out.
4. **Save.** `/save` stores the world locally and offers a backup shard (a file you keep). `/shard` makes one on its own.
5. **Privacy:** `/storage` shows what is saved and where. `/purge` empties the chat memory now. `/reset` deletes the current world.

## Known limits of this test build
- **Work in progress:** the NPC system is still being worked on in this test build. It will be fully tested and made more usable in later versions, so expect rough edges and please report what you find.
- The Windows installer is unsigned and was built on a Mac. The author has no Windows PC to test on, so you are the first testers: report problems (Windows version, what happened, a screenshot) and they will be fixed quickly.
- Hardware numbers for Windows are estimates until testers confirm them.

## If something goes wrong
- No reply or an error: `/aitest` (Construct) checks the connection; `/connect` shows or changes the server; `/debug-on` shows the technical lines.
- The companion sounds off after a long session: type `/persona on`, check `/notes` and `/rules`, or restart the model server. Rarely a model instance starts a session in a bad state; a fresh start clears it.
- `/stasis` shows what the companion believes about the live scene (where you are, what you wear, who is present). `/stasis now` runs the scene scribe.
- Anything else: `/commands`, or ask the companion in the Construct. If the answer is not in the app's manual, it says "I don't know" instead of guessing.

## Adult-use notice
This is a tool for adults (18+). It runs offline and unmonitored on your own computer. What you write is your own business and your own responsibility.
