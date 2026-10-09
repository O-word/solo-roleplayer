# SoloRoleplayer: Commands overview (SID 6.7.4)
`[Holo]` = works in the story. `[Construct]` = works in the blank room. `[Both]` = works in either. In the app, `/commands` shows this list a page at a time (`/commands 2`, `/commands next`); `/cmds` is the same.

## Getting started
- `/help` (also `/help2`, `/help3`): short command pages. `/help stasis` explains scene memory; `/help sidecar` explains the side panel. [Both]
- `/commands`: the full list. [Both]
- `/start`: enter the Holo. [Construct]
- `/stop`: leave the Holo for the Construct; offers a backup shard. `/construct` does the same. [Holo]
- `/menu`: save and return to the main menu to load another companion or world; the app stays open. [Both]
- `/exit`: leave a vehicle or built space; elsewhere it behaves like `/menu`. [Both]
- `/quit`: log out to setup and offer a shard backup first. [Both]
- `/connect`: find or change your AI server (`/connect 8080`, `/connect http://127.0.0.1:5001`). [Both]
- `/wedit`: edit your world (name, genre, trope, flavor, time frame, brief description, theme pack). [Both]
- `/bareprose on|off`: treat text typed without `@emit` as a pose. Default off. [Holo]

## Looking around and moving
- `/look`, `/look <thing>`: describe the room or a target. `/map`, `/legend`, `/location`: the fixed room map, room names, room codes. [Both]
- `/go <direction>`: move through an exit. `/enter <alias>`: enter a vehicle or place. `/drive R001`: travel to a room from inside a vehicle. `/aliases`: list enterable places. [Holo]
- `/inventory` (`/inv`): carried items. `/refs`: clickable references. `/ambient`: ambient player status. `/assets`: the asset library. [Holo, `/assets` Both]

## Companion and preferences
- `/cprofile`: show the companion. `/cedit` (`/compedit`): guided companion editor. [Both]
- `/notes`: Important Notes, binding attitude rules. `/rules`: Hard Rules, absolute never/always lines. `/quirks`: quirks, gestures and ways of speaking. All work on older companions too. [Both]
- `/persona on|off`: send the companion's full persona to the model every reply. New companions default on; older ones stay off until you turn it on. [Both]
- `/arc`: relationship arc (stages that change how the companion treats you over time). Off by default. `/arc on|off`, `/arc edit`, `/arc next [why]`, `/arc prev`, `/arc set <number or name>`. [Both]
- `/preferences` (`+prefs`): your paged preference bible (likes, dislikes, limits). `/profile`: your player profile. `/edit`: guided player editor. [Both]
- `/npc`, `/npc-create`, `/npc-delete`: the NPC vault. (NPCs are a work in progress in this build; see the note at the end of this page.) `+summon NPC01` puts one into the scene; `+banish NPC01` removes it. [Both, summon/banish Holo]

## Memory, worlds and saving
- `/save`: save the world locally and offer a backup shard. `/shard`: make a backup shard. [Both]
- `/library` (old name `/plotline`): the long-term memory library. `/world`: the world codex. [Both]
- `/loader` (`/preloader`): load a world or companion template. [Both]
- `/storage` (`/privacy`): where local data lives and what is stored. [Both]
- `/purge`: clear the chat memory right now. [Both]
- `/reset`: factory reset or delete the current world. `/burn`: begin the full reset flow. [Both]
- `+chatlog` (`/chatlog`): save a raw backup log of the chat yourself, if you choose to. [Both]

## Settings and display
- `/settings`: settings hub. `/settings-tense`: narration perspective, tense and roleplay style level. [Both]
- `/theme`, `/background`, `/uibackground` (`/uibg`), `/clear`, `/echo on|off`. [Both / Construct as shown in `/commands`]

## AI and debugging
- `/stasis`: what the companion remembers about the live scene (`/stasis now`, `/stasis log`, `/stasis scribe on|off`, `/stasis every N`, `/stasis window N`). [Both]
- `/ai`, `/aitest`, `/aipacket` (shows the context packet being sent), `/cute` (Cute LM help), `/debug-on`, `/debug-off`. [Both / Construct as shown]

## Plus commands (type with a +)
- `+ooc <text>`: step out of character to comment, ask, set a preference or change the scene. [Holo]
- `+style`: load 2 to 5 `.txt` or `.md` files as a writing-style packet. [Both]
- `+notes`, `+prefs`, `+chatlog`, `+summon`, `+banish`: shortcuts as listed above.

## Retired (still typed by habit; they explain themselves)
`/scene-start`, `/scene-end` (STASIS is always live now; use `/save`), `/goal` (removed; use `/preferences`), `/worldbuilder`, `/mapview`, `/objcreate`, `/vehcreate`, `/build`, `/index`, `/preset`, `/aimanual`.

## Known limits of this test build
- **Work in progress:** the NPC system is still being worked on in this test build. It will be fully tested and made more usable in later versions, so expect rough edges and please report what you find.
