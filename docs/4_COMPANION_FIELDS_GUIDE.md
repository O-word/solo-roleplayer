# SoloRoleplayer: every companion field, what it does, and how it is weighted (SID 6.7.5)

## The one rule: specificity
**Vagueness does not work in these fields.** The model does exactly what the setup tells it, and it fills every gap itself, with its own habits and with stereotypes. Say precisely what you want, in plain words, and say what you do NOT want.
- Example: if you want your companion to have a **stutter**, put it in the **Speech Pattern** field: choose **Custom**, then in **Custom Speech Notes** describe the stutter in your own view, specifically. Weak: "stutters." Strong: "Stutters when nervous or caught off guard: repeats the first sound of a word two or three times (\"I-I-I can't\"), mostly on hard consonants. Never when angry or reciting something rehearsed. Gets smoother when she is relaxed."
- Concrete beats clever: "You laugh when I stumble" beats "you have a mischievous streak."
- Write about the companion as "they" or speak to them as "you." Either works; pick one and stay with it.

## How the model weighs your fields (in plain words)
Every reply, the app builds a briefing for the model. Your companion's fields enter it in tiers, from strongest to weakest:
1. **Hard Rules and the "address the player as ___" rule:** told to the model as *absolute*: never broken, even if you push, ask, or the story tempts them.
2. **Important Notes:** *binding*. They explicitly override the model's default urge to be friendly, agreeable and warm, and the model is told to hold that attitude across the whole scene.
3. **The persona block** (only when persona injection is ON; `/persona on`): introduced to the model as "who you are; treat it as live truth, not optional flavor." It contains your description, species and gender, personality mix, personality in practice, speech pattern, **Inner Script**, **Behavior Emphasis (quirks)**, plus a few advanced fields. Each field is trimmed to a character limit when sent (table below), so put the sentences that matter most first.
4. **Relationship arc stage** (only if you turned `/arc` on): the stage notes plus a few lines of history. The model is told to stay at this stage and not warm up faster than it allows.
5. **Setup identity and appearance** (name, body, hair, eyes, fashion): sent as *paramount truth* about the companion and about you, to keep the characters stable from scene to scene.
6. **Your preferences** (the Preference Bible, `+ooc` corrections): high priority. Player-stated likes, dislikes and limits override any pack default or learned behavior.
7. **Scene memory (STASIS) and the Library:** live continuity (where you are, what you wear, what was promised) and established history for callbacks.

**Out of character:** when you step out with `+ooc`, the companion keeps their voice and humor but drops the role's attitude: warm, patient and helpful, so you can fix things without fighting the character.

## The setup steps, field by field
Limits are the setup box's character limit. "Sent" is how much of the field reaches the model in the persona block.

### Step 4: name
- **First Name** (32), **Last Name** (32): kept separate so the app never guesses. Used as the companion's name in scenes.
- **Gender** (40, one word is best), **Species** (140, one short sentence): sent together as "species/gender" (80 characters). Effect: what the model assumes about body and culture. Be plain: "Human, woman" or "android, nonbinary."

### Step 5: body and presence (hard visual anchors)
- **Height, Skin Tone (50), Eye Color (40), Hair Color (50), Hair Style (120), Body Type** (Skinny through Rubenesque, Chunky, Chubby and more): anchors the model quotes back to you so the character looks the same every scene. Name concrete things ("shaved sides, long on top, usually tied back").
- **Size Play / Imposing:** Imposing, Neutral or Not Imposing. Stored with the physical profile and passed along in the context packet; the effect is light, so if physical presence matters to you, also say it in the Description ("towers over most doorways and knows it").
- **Companion Description** (1200): up to four short paragraphs about body, face, energy and presence. This is the **"Who you are"** line in the persona block (first 600 characters sent), so lead with the most important traits.
- **Fashion Cues** (280) and **Things They Would Never Wear** (280): the clothes that live in their closet and the ones that never do. The app tracks outfits and, if you change what someone is wearing, replaces the old outfit with the new one so wardrobe stays consistent.
- **Important Notes / Preferences** (2400): *binding* attitude rules (tier 2). How they treat you, what they never do, how fast they warm up. Example: "Contemptuous toward the player. Never says anything kind unless the player earns it over many scenes. Mocks, dismisses, stays guarded." Edit anytime with `/notes`.

### Step 6: how they perform
- **Speech Pattern:** Casual modern, Neutral conversational, Formal polished, Poetic heightened, or **Custom**. Casual modern means everyday speech ("maybe," not "perhaps"). **Custom Speech Notes** (220) are used when you pick Custom: this is where accents, stutters, verbal tics and dialect go. Only about 260 characters of the speech pattern are sent, so write it tight and specific.
- **Lead / Follow Style:** tells the model how much initiative the companion takes. Exactly what each does:
  - *Balanced:* offers ideas, observations and gentle momentum, but does not seize control of the scene.
  - *Follower:* reacts first and supports your direction; does not steer unless you clearly need help.
  - *Leader:* helps steer, suggests next moves, creates forward momentum without overriding your choices.
  - *Instigator:* adds sparks, tension and trouble; actively stirs the scene instead of waiting.
  - *Brat and Insulting-Charm variants:* follower or leader versions with a pushy, needling or cutting edge (a mouthy follower who resists playfully; a bossy leader who still gives you room to answer back).
  The overall default is that you lead the story unless the style or the scene calls for more from them.
- **Pop-culture likeness** (180, optional): 2 to 3 characters or performers to mood-match. A hint about tone, not an instruction to copy.

### Steps 7 and 8: personality presets and sliders (the foundation)
- Pick **up to three presets** (a few dozen are offered, from Dry-Witted Navigator to Trickster Fox to Warm Hearthkeeper). Keep one or two if you want a simpler character.
- **Each preset gets its own slider, 0 to 100.** 0 means nearly absent; 100 means that lane dominates their behavior. **Each slider is independent:** three presets at 100 all run at full strength; the percentages do not split a shared total.
- What the model sees: "Weighted trait mix: A: 80% | B: 40%" with a note that each percentage is that trait's own strength against its full setting. Sent as "Personality mix" (560 characters) and "Personality in practice" (800).
- Think of presets as who they are at the core. **The Inner Script then alters that core into who they are with you.**

### Step 9: Inner Script, Hard Rules, quote, picture
- **Companion Inner Script** (3000, sent up to 1800): "the story they tell themselves" about you and the scene. Write directives, as "You..." lines. This is the most influential free-text box for how they treat you. If it disagrees with the presets, the script's alterations win, but the model improvises the blend, so the more specific the script, the less it improvises.
- **Hard Rules** (3000): one rule per line, "Never..." and "Always..." (tier 1). Absolute. Use them for the few lines that must never break: "Never apologize, even when wrong." "Always call the player by their last name." Edit with `/rules`.
- **Quote** (280): a signature line stored on the profile card. It is flavor for you, not an instruction to the model.
- **Companion Picture:** shows in the viewer after setup; not sent to the model.

### Step 10: Behavior Emphasis (quirks)
- **Behavior Emphasis** (3000, sent up to 1800): the companion's "isms": gestures, expressions, habits and how they describe things. Concrete beats vague: "Taps two fingers on whatever is nearby when thinking. Calls everything she likes 'decent'. Looks at the door before answering a hard question." Edit with `/quirks`. (If it is a copy of the Inner Script, it is sent only once.)

### Steps 11 and 12: you
- **Full Name, Nickname** (what your companion calls you, 40): the nickname becomes an **absolute rule**: whenever the companion speaks aloud, they address you by it. **Gender, Age, Height, Skin Tone, Eye Color, Hair Color, Typical Hairstyle, Fashion Sense, Build, Known For** (up to 280 each): your visual card and prompt context, treated as truth about you. Fill them as you would want the companion to see you.
- **Roleplay Style Level** (1 to 3, also set with `/settings-tense`): the typical reply size **on average** (about one, two or three-plus paragraphs). The levels are ranges, not locks, so the AI stays free to write even more. The companion also tries to match your pose length, so a long pose gets a long answer.

### Step 13: shell theme and background
Presentation only. Does not change what the model knows.

## Advanced fields (not in the wizard; available in packs and by editing)
Backstory that matters (600 sent), Beliefs about friendship, romance, casual relationships and power (700 each), Soft Boundaries (400), and Example Lines in your voice (700). Companion packs can also lock fields so the companion's core stays intact.

## Editing an existing companion
`/cedit` (guided editor), `/notes`, `/rules`, `/quirks`, `/persona on|off`, `/arc`. **Older companions do not send their full persona until you type `/persona on`.** New companions default to on.

## A fast checklist before your first scene
1. Presets: one or two, with sliders you meant.
2. Inner Script: three to six specific "You..." lines about how they treat you.
3. Important Notes: one binding attitude rule, including how fast they warm up.
4. Hard Rules: two or three absolute lines only.
5. Speech Pattern: pick one; if you need an accent or a stutter, Custom with specifics.
6. Behavior Emphasis: three concrete habits.
7. Play one short scene, then fix what is off with `+ooc`, `/notes` and `/quirks`.
