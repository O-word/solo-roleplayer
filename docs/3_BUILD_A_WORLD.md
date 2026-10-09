# SoloRoleplayer: How to build a world (SID 6.7.4)

A world is the stage your companion and you play on: a name, a genre, a feel, a short permanent reminder, a time frame, and a map. You set it in setup (steps 1 to 3 and 13) and can change most of it later with `/wedit`.

## Step 1: pick the start
- **Build New World:** go through the world screens by hand.
- **Load World Theme Pack:** skip the world screens and import a finished world pack (map reskins included).
- You can also load a companion pack on the same screen, or both. `/loader` does the same thing later.

## Step 2: name and class your world
| Field | What to put | What it does |
|---|---|---|
| **World Name** (64 characters) | "Neon Rain", "Cozy Monster Town", "Starship Morning" | Shown in the app and sent as part of the world reminder. |
| **World Trope** | Modern, Western, Urban Fantasy, Space Opera, Science-Fiction, Cyberpunk, Steampunk, Frostpunk, Solarpunk, Dieselpunk, Eastern | The genre lane. The setup calls it the trope family your world lives in; the model keeps vocabulary, props and tone inside it. |
| **World Flavor** | Real-Like, Anime-Like, Cartoon-Like, Novel-Like | The visual and tonal metaphor lane: how grounded, anime-flavored, cartoonish or novel-like the world feels. |
| **Narration Perspective** | Second, Third or First person | Whose point of view the narration uses. The app checks every non-quoted sentence against this and repairs drift. |
| **Narration Tense** | Past, Present, or either | Same: kept consistent and repaired when it slips. |
| **Roleplay Style Level** | 1 (about one good paragraph), 2 (about two or more), 3 (about three or more) | The typical size of replies, **on average**. The levels are ranges to aim for, not locks: the AI is free to write more, and we do not cap it. Pick the level that matches how much you usually write. |

## Step 3: describe the world
- **Brief World Description (280 characters, "less than a tweet").** The app flashes this back to the model **every turn** as hard, static world context, so spend it on the things that must never be forgotten.
  - Weak: "A cool fantasy place."
  - Strong: "A rainy steampunk coastal city where every hill hides an old machine and every family knows too much. No magic. Guns are rare and illegal."
- **Relative Time Frame (120 characters):** "late 90s", "far-future retro Earth", "mid-2000s with some 90s holdovers". It anchors props, phones and slang.
- **The map:** the current build ships one fixed layout, the **Sunlit Coast World**: 11 rooms (a hilltop overlook, a station road, the bay, and an "Above" room among them). `/map` shows it, `/legend` lists room names by code, `/location` lists the codes for `/drive`. Theme packs can reskin the names and descriptions.

## Step 13: the look
Pick a shell theme and a mood image, or upload a wide 16:9 background. These are presentation only; they do not change what the model knows.

## Edit it later
- `/wedit`: change name, genre, trope, flavor, time frame, brief description or theme pack.
- `/world`: the world codex (what is stored about the world).
- `/library` (long-term memory): facts the story has established, kept for callbacks. The model treats the Library as established truth and uses it for continuity, not as quotations.
- `/stasis`: the live scene card: where you are, who is present, what people wear, what just changed. It updates as you play and lets the story hold together over long sessions.
- `/npc`, `/npc-create`: store supporting characters (work in progress in this build: it will be fully tested and made more usable in later versions) (name, role, speech style, relationship, appearance). `+summon NPC01` brings one into a scene; `+banish NPC01` sends them away. The companion stays the main character; NPCs are support pieces.

## Writing a world that plays well
1. **Be specific about rules the world must keep** (technology level, danger level, who knows what). The model fills every gap with its own habits and common stereotypes.
2. **Put the unchangeable in the 280 characters;** put the rest in play, where `/library` will remember it.
3. **Say what the world is NOT** ("no magic", "no cell phones", "nobody can fly"). One line removes a lot of drift.
4. **Pick a Roleplay Style Level that fits how you write.** The companion tries to match your pose length, and the level sets the typical size on average. Short poses get shorter answers; long poses get longer ones.
5. **Save** (`/save`) when a scene ends. Saves stay on your computer; chat is not saved to disk.
