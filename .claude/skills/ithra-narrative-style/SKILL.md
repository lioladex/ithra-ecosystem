---
name: ithra-narrative-style
description: Prose/narration guideline for the Ithra Field Codex journey (data/journey.js and any other in-fiction VN text). Use whenever writing, reviewing, or polishing story paragraphs, action flavor text, or sysnotes for Confluence's journey — not for UI chrome, code comments, or database/lore-entry text.
---

# Ithra Journey Narrative Style

Distilled from the T-0 → Chapter-1-close prose in `data/journey.js`, written across many editing passes with the project owner. Follow these rules for any new or revised `paragraphs`/action `text` in that file.

## 1. Sensation before cognition
Confluence feels a thing before it can name or understand it. Never let narration hand it a label it hasn't earned yet.
- Bad: `รู้จักคำว่า เจ็บ` (implies it already knew the word)
- Good: `รู้สึกว่า เจ็บ` / a raw physical description, with naming arriving only at the exact moment understanding clicks (see `shock-collapse`: pain gets its name only in that instant, marked with `<em class="glow-danger">`).
- Apply this to every new sensation (hunger, smell-as-direction, flight, pain) — describe the raw sensory data first, let the "aha" be a separate, visible beat.

## 2. No real species names in-story
Confluence doesn't know real names. In dialogue/narration (not tags, sysnotes, comments, or UI labels — those may use real names freely), creatures get in-world descriptive nicknames from Confluence's naive POV:
- Karvos → เจ้าตัวสี่ขา
- Skyther → เจ้าเงาปีกกว้าง / เงาปีกกว้าง
- Vashli → เจ้าตาโต
- Confluence's own former body → ร่างเดิม / ร่างสี่ขาที่เคยสวมอยู่ (never "Luvenn" by name inside `paragraphs`)

When adding a new creature to the story, invent its nickname from a single striking visual/behavioral trait, not its taxonomy.

## 3. Distance-calibrated description
How much anatomical detail a paragraph gives must match how close/how long Confluence has been looking:
- Far / brief glimpse → silhouette only, one or two vague traits (e.g. first Skyther sighting: just "เส้นขอบปีกกว้าง", no eye count, no beak shape).
- Close / sustained observation → full sensory detail (eye count, mouth structure, texture, glow patterns) — this detail should visibly *increase* between repeated encounters with the same creature, never repeat the same description twice.
- This escalation is also how "observation" skill-teaching text earns its variety — each repeated observe action must show a *different* facet or technique, never the same glimpse reworded.

## 4. Ground the fantastical in the physical
Confluence's shapeshifting (cellular regeneration into a copy of an encountered template, not possession) must always read as a visceral, physical process — bones, skin, muscle rearranging — never as a fantasy-trope transformation ("magic," "glow," generic light effects as the *cause*). Anchor every stage in body sensation, matching rule 1.

## 5. Time-skip through the unbearable
When something would be too much to narrate moment-to-moment (fainting, the instant of a killing blow), cut the paragraph at the edge and resume after, rather than narrating through it. A blank beat (short standalone sentence like `ความมืดกลืนทุกอย่างไปหมด`) does the time-skip work — don't over-explain the gap.

## 6. Rhythm matches the moment
- Action/shock beats: short fragments, hard stops, present-tense immediacy.
- Calm/reflective beats: longer flowing sentences, more clauses, slower pacing.
- Reserve `<em class="glow-danger">` for the one or two words/phrases per scene that must hit hardest (an instinct shouting, a newly-named sensation). Overusing it flattens the effect.

## 7. Bespoke one-off effects need a comment justifying them
Any narrative event with mechanical side-effects that don't match a creature's `recoveryAction`/`teachesSkill` canon (e.g. the small AP recovery from fainting at `shock-collapse`) must ship with a short code comment explaining *why* it's non-canon and why it's justified by the specific scene — so a future editor doesn't "fix" it into consistency by accident.

## 8. Branch text must feel authored, not bolted on
When `paragraphs`/`text` is a function branching on prior choices (e.g. kicked vs. not-kicked at T+8/T+9), both branches must read as equally deliberate prose — no branch should feel like a shorter afterthought bolted onto the "real" path.

## 9. Chapter-close reflection lines (`reflections` in JOURNEY_CHAPTERS)
Every chapter ends with a processing sequence: one-sentence, first-person lines that float in and fade out, then a gain/loss ledger. Rules specific to these lines:
- This is the only place Confluence says "ฉัน" — it is inner processing, not scene narration. Never let this pronoun leak into step `paragraphs`.
- One line per *significant* beat, in the order the beats happened in that chapter. No line for something the reader did not see on the page.
- `kind: "gain"` = something acquired (a sensation, an ability, an understanding). `kind: "loss"` = something taken away (a body, a herd, a belief that turned out to be false). Beliefs count: losing a wrong assumption is a loss line, not a gain line.
- Keep the sentence naming what was gained/lost, not how it felt in the moment — the scene already did the feeling. "ฉันได้รู้จักความเจ็บปวด" not "ฉันเจ็บจนแทบขาดใจ".
- Aim for a mix that ends on the chapter's real cost. A chapter of pure gains reads as a checklist.
- Every new chapter must ship a `reflections` array; the close screen plays it automatically and builds the ledger from it.
- Confluence has no moral or abstract vocabulary this early: no guilt, no cruelty, no "belief" it can lose. Killing is `ล่า`, not `ฆ่า`; a lost assumption is a lost answer, a lost boundary, or a lost habit — never a lost belief.
- It never lost the four-legged body: the body was regenerated into a new one, not taken from it. Losses must be things that genuinely stopped being available (the herd, the light-fed feeding, effortless walking).

## Workflow when asked to polish existing prose
1. Read the target step(s) in full context (surrounding steps too — tone must flow between them).
2. Check each paragraph against rules 1–6 above.
3. Check nickname consistency (rule 2) — grep for real creature names leaking into `paragraphs`/action `text` (tags, sysnotes, comments, and UI strings like `continueLabel` are exempt).
4. Propose the smallest edit that fixes the violation — do not rewrite paragraphs that already comply just to "improve" them further; this project's prose has already been through many review passes and over-editing erodes voice consistency.
