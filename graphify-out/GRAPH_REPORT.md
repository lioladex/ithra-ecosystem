# Graph Report - ithra-ecosystem  (2026-09-02)

## Corpus Check
- 67 files · ~240,565 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 378 nodes · 484 edges · 56 communities (28 shown, 4 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 44 edges (avg confidence: 0.79)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Writing Style & Narrative Rules
- Journey Engine State Logic
- Codex Lore & Creature Design
- Journey Path Checker Script
- Prose Checker Script
- Creatures Consistency Checker
- Sevrin Portrait Traits
- Thessek Portrait Traits
- Vorthak Portrait Traits
- Ithra World Map Regions
- Cindergrub Portrait Traits
- Vellith Portrait Traits
- Ashkarn Portrait Traits
- Karvos Portrait Traits
- Mistcrawler Portrait Traits
- Palegrim Portrait Traits
- Skyther Portrait Traits
- Frostmane Portrait Traits
- Korrune Portrait Traits
- Lumenveil Portrait Traits
- Pallowfin Portrait Traits
- Dunkrell Portrait Traits
- Glimmerwing Portrait Traits
- Luvenn Portrait Traits
- Ozgrun Portrait Traits
- Threndle Portrait Traits
- Vashli Portrait Traits
- Kethyr Portrait Traits
- Skill System Data
- Find-Skills Skill
- Creature Image Library
- Creature Registry

## God Nodes (most connected - your core abstractions)
1. `Ithra Journey Narrative Style (skill)` - 20 edges
2. `Alien Intensity Scale (Tier I-V)` - 20 edges
3. `Chapter 3 Redesign Draft` - 14 edges
4. `journeyRender()` - 13 edges
5. `Creature Design (codex/creature-design.md)` - 13 edges
6. `journeyReset()` - 12 edges
7. `journeyResetFromStep()` - 10 edges
8. `journeyContinue()` - 9 edges
9. `Narrative Engine (Journey of Confluence system)` - 9 edges
10. `World Building — Ithra Planet` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Writing Style (codex mirror of skill file)` --semantically_similar_to--> `Ithra Journey Narrative Style (skill)`  [INFERRED] [semantically similar]
  codex/writing-style.md → .claude/skills/ithra-narrative-style/SKILL.md
- `Creature Design (codex/creature-design.md)` --semantically_similar_to--> `Creature Database (creatures/README.md)`  [INFERRED] [semantically similar]
  codex/creature-design.md → creatures/README.md
- `Chapter 3 Redesign Draft` --references--> `Sensation Before Cognition (Rule 1)`  [EXTRACTED]
  codex/chapter3-redesign-draft.md → .claude/skills/ithra-narrative-style/SKILL.md
- `Chapter 3 Redesign Draft` --references--> `Chapter Shape — Three Acts (Rule 10)`  [EXTRACTED]
  codex/chapter3-redesign-draft.md → .claude/skills/ithra-narrative-style/SKILL.md
- `Chapter 3 Redesign Draft` --references--> `End on a Sharper Question (Rule 12)`  [EXTRACTED]
  codex/chapter3-redesign-draft.md → .claude/skills/ithra-narrative-style/SKILL.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Narrative style rule chain governing Chapter 3 writing** — claude_skills_ithra_narrative_style_skill_ithranarrativestyleskill, codex_writing_style_writingstylecodexmirror, codex_chapter3_redesign_draft_chapter3redesigndraft [INFERRED 0.80]
- **Merged creature design documentation set** — codex_creature_design_creaturedesigndoc, creatures_readme_creaturedatabasedoc, codex_creature_design_alienintensityscale [EXTRACTED 0.90]
- **Interlocking systems that drive the Journey of Confluence engine** — codex_narrative_engine_journeystepsstructure, codex_narrative_engine_apskillsystem, codex_narrative_engine_specieslotetiersystem [INFERRED 0.85]

## Communities (56 total, 4 thin omitted)

### Community 0 - "Writing Style & Narrative Rules"
Cohesion: 0.06
Nodes (50): Bespoke One-Off Effects Need a Comment (Rule 7), Branch Text Must Feel Authored (Rule 8), Chapter-Close Reflection Lines (Rule 9), Chapter Shape — Three Acts (Rule 10), Name the Relation Between Clauses (Rule 16), creative-writing-craft skill (external reference), Crutch Words / check-prose.js (Rule 15), Density Beats Length (Rule 13) (+42 more)

### Community 1 - "Journey Engine State Logic"
Cohesion: 0.11
Nodes (48): apLoadState(), apRecover(), apRecoverCustom(), apSaveState(), apSpend(), JOURNEY_CHAPTERS, JOURNEY_STEPS, journeyAcknowledgeWarning() (+40 more)

### Community 2 - "Codex Lore & Creature Design"
Cohesion: 0.08
Nodes (42): abilities Field Rule (Innate Abilities), AI Image-Gen Prompt Style (2-paragraph formula), Alien Intensity Scale (Tier I-V), category Field Diet Taxonomy, Creature Design (codex/creature-design.md), Danger Rating Tiers, Dominant ⇄ Recessive Gene Rule, Mandatory Paired-Limb Symmetry Constraint (+34 more)

### Community 3 - "Journey Path Checker Script"
Cohesion: 0.14
Nodes (11): chances, ctx, errors, fs, path, ROOT, seenEndIds, seenIds (+3 more)

### Community 4 - "Prose Checker Script"
Cohesion: 0.14
Nodes (11): CRUTCHES, ctx, fs, path, perChapter, perStep, ROOT, totalCrutch (+3 more)

### Community 5 - "Creatures Consistency Checker"
Cohesion: 0.17
Nodes (11): creatureFiles, CREATURES_DIR, errors, fs, INDEX_HTML, indexContent, path, REQUIRED_FIELDS (+3 more)

### Community 6 - "Sevrin Portrait Traits"
Cohesion: 0.22
Nodes (10): Sevrin, moss-covered tree branch, dark forest night setting, glider/lemur-like small mammal species, apparent fire/lava elemental affinity, large rounded bat/lemur-like ears, large glowing orange-red eyes, glowing orange lava-vein pattern along back and tail, long tapering prehensile-looking tail (+2 more)

### Community 7 - "Thessek Portrait Traits"
Cohesion: 0.24
Nodes (10): cracked, stone/bark-textured hide on forelegs, Thessek, rocky desert/mountain habitat with burrow, long serpentine tail with glowing orange ridge segments, glowing orange bioluminescent throat/cheek pouch, hyena-like quadruped body, large bat-like ears with glowing orange inner ridges, oversized curved digging claws (+2 more)

### Community 8 - "Vorthak Portrait Traits"
Cohesion: 0.22
Nodes (10): Long tail ending in dangling bone-like protrusions, Bulbous bony growths/knuckles along legs and spine, Thick cracked stone-like hide with glowing red fissures, Vorthak, Arid desert/canyon rock formation environment, Wide gaping red maw ringed with tusk-like teeth, Four massive muscular clawed legs, Red glowing pores/vents on face and body (+2 more)

### Community 9 - "Ithra World Map Regions"
Cohesion: 0.29
Nodes (10): Central Mountain Range, Eastern Offshore Islands, Forested Lowlands and Highlands, Ithra World Map, Main Continent / Landmass, Northern Polar Icecap / Glacier Region, Braided River / Delta System, Southern Volcanic Archipelago (+2 more)

### Community 10 - "Cindergrub Portrait Traits"
Cohesion: 0.25
Nodes (9): Cindergrub, Dorsal Obsidian Crystal Spikes, Glowing Orange Eyes and Mandibles, Larva/Grub Body Morphotype, Glowing Lava-Vein Cracks, Obsidian/Crystalline Carapace, Segmented Insectile Body with Multiple Leg Pairs, Swarm/Group Presence (multiple cindergrubs visible) (+1 more)

### Community 11 - "Vellith Portrait Traits"
Cohesion: 0.25
Nodes (9): aerial colony-organism / gas-bladder cluster, cluster of translucent purple/lavender bulbous pods, Vellith, pale dangling tendrils/filaments hanging from underside, dark speckled/spotted markings within each pod, floating/hovering above treeline (buoyant flight), misty forest canopy at sunset (aerial setting), warm glowing inner light through pods (backlit sunset) (+1 more)

### Community 12 - "Ashkarn Portrait Traits"
Cohesion: 0.29
Nodes (8): Ashkarn, predatory crouched stance on rocky outcrop, wings partly spread, jagged volcanic mountain cliffs with lava flows and ash haze, volcanic dragon-like beast, row of glowing orange eyes on head, exposed glowing molten lava core in chest/abdomen, cracked obsidian/basalt rock hide with glowing lava veins, massive stone/rock bat-like wings with molten cracks

### Community 13 - "Karvos Portrait Traits"
Cohesion: 0.32
Nodes (8): Grey-white striped fur with dark leopard-like spots on hindquarters, Karvos, Pale amber eyes with intense forward stare, Glowing orange fissure markings on face, neck, and spine, Dark misty forest with bioluminescent mushrooms and roots, Oversized unhinged jaw with multiple rows of fangs and glowing throat, Aggressive standing stance, mouth agape, mid-roar/snarl, Wolf-hyena hybrid predator

### Community 14 - "Mistcrawler Portrait Traits"
Cohesion: 0.29
Nodes (8): Mottled brown-green camouflage carapace with segmented, ridged plating, Mistcrawler, Cluster of multiple pale/white orb-like eyes on face, Misty mossy forest with dew-laden web strung between tree trunks, Long spiny dark-red segmented legs covered in fine white bristles, Curved dark fangs/mandibles beneath eye cluster, Giant arachnid / spider-type creature, Large dew-covered spiderweb with small trapped insect

### Community 15 - "Palegrim Portrait Traits"
Cohesion: 0.25
Nodes (8): Palegrim, Misty, fog-shrouded forest environment, Fox-like canid (fennec/kit fox archetype), Bared teeth / snarling lip curl expression, Long bushy tail, Oversized upright ears, Pale, near-white/cream coat, Slender, long-legged build in mid-stride pose

### Community 16 - "Skyther Portrait Traits"
Cohesion: 0.29
Nodes (8): large membranous bat-like wings, hooked beak-like reptilian head with amber eyes, blue-gray scaled/leathery hide, Skyther, misty mossy forest canopy habitat, glowing veined golden head-crest/frill, wyvern-like flying reptilian creature, large clawed/taloned feet gripping branch

### Community 17 - "Frostmane Portrait Traits"
Cohesion: 0.33
Nodes (7): Frostmane, Arctic/glacial tundra, Herd-dwelling behavior, Translucent curved ice horns, Ice-encrusted tail tip, Thick shaggy pale-white/cream fur coat, Bison-like megafauna (ice-horned)

### Community 18 - "Korrune Portrait Traits"
Cohesion: 0.29
Nodes (7): Pale bioluminescent/crack-like vein markings across fur, Korrune, Dark charcoal-gray short fur coat, Misty mossy forest habitat, Forked, tendril-like split tail, Elongated saber-tooth fangs, Saber-toothed panther-like predator

### Community 19 - "Lumenveil Portrait Traits"
Cohesion: 0.33
Nodes (7): bulbous green internal pod clusters, Lumenveil, misty forest canopy / mossy tree branch habitat, golden bioluminescent vein network, porous speckled skin patches, sessile draped/mantle-like lifeform type, translucent membranous body form

### Community 20 - "Pallowfin Portrait Traits"
Cohesion: 0.29
Nodes (7): Schooling/shoaling group behavior, Pallowfin, Open ocean water column, sunbeam-lit midwater, Iridescent schooling fish, Deep, laterally compressed body (jack/pompano-like silhouette), Tall spiny dorsal fin and glassy translucent fins, Iridescent labyrinthine/marbled scale patterning (blue-pink-silver sheen)

### Community 21 - "Dunkrell Portrait Traits"
Cohesion: 0.40
Nodes (6): Glowing yellow-green cracks/veins in shell, Dunkrell, Wrinkled face with multiple small eyes and wide nostrils, Mushroom-encrusted domed shell, Misty swamp/forest wetland habitat, Giant tortoise-like body

### Community 22 - "Glimmerwing Portrait Traits"
Cohesion: 0.33
Nodes (6): Cyan bioluminescent glow (abdomen/core), Glimmerwing, Faceted crystalline carapace, Dark misty forest habitat with floating glowing motes, Insectoid/fly-like species type, Translucent veined insect wings

### Community 23 - "Luvenn Portrait Traits"
Cohesion: 0.33
Nodes (6): Luvenn, Deer-like quadruped body, Feathered/leaf-like mane, Misty mossy forest habitat, Green leaf/scale-feather body coat, Pale teal reptilian eyes

### Community 24 - "Ozgrun Portrait Traits"
Cohesion: 0.40
Nodes (5): Boulder-mimic body form, Cracked, plated rocky/bark-like shell, Ozgrun, Pale fleshy protrusion (snout/appendage) emerging from shell crack, Dark swamp/root-tangled forest floor setting

### Community 25 - "Threndle Portrait Traits"
Cohesion: 0.40
Nodes (5): Long thread-like sensory barbels (snout and tail-tip), Threndle, Amber and teal crystalline dorsal spines, Murky freshwater / misty wetland habitat, Crocodilian aquatic reptile

### Community 26 - "Vashli Portrait Traits"
Cohesion: 0.40
Nodes (5): Arboreal primate-lemur hybrid morphotype, Cyan bioluminescent markings, Vashli, Misty forest canopy habitat, Prehensile ringed tail

### Community 27 - "Kethyr Portrait Traits"
Cohesion: 0.50
Nodes (4): Kethyr, Glacial ice cave / crevasse setting, Glowing pale-blue eye-like light sources, Ice/glacier-like body form

## Knowledge Gaps
- **165 isolated node(s):** `IMAGE_LIBRARY`, `creaturesData`, `JOURNEY_STEPS`, `JOURNEY_CHAPTERS`, `journeyUnlockedIds` (+160 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 209 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Alien Intensity Scale (Tier I-V)` connect `Codex Lore & Creature Design` to `Writing Style & Narrative Rules`?**
  _High betweenness centrality (0.017) - this node is a cross-community bridge._
- **Why does `Codex Index (codex/README.md)` connect `Writing Style & Narrative Rules` to `Codex Lore & Creature Design`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **What connects `IMAGE_LIBRARY`, `creaturesData`, `JOURNEY_STEPS` to the rest of the system?**
  _165 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Writing Style & Narrative Rules` be split into smaller, more focused modules?**
  _Cohesion score 0.05877551020408163 - nodes in this community are weakly interconnected._
- **Should `Journey Engine State Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.10857142857142857 - nodes in this community are weakly interconnected._
- **Should `Codex Lore & Creature Design` be split into smaller, more focused modules?**
  _Cohesion score 0.07781649245063879 - nodes in this community are weakly interconnected._
- **Should `Journey Path Checker Script` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._