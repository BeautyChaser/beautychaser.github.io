# Yunlan AI Video Retrospective: Art Direction, Camera Movement and Workflow Engineering

From Liblib's Wan 3.0 and Doubao experiments with an earlier character reference to a 15-second inner monologue made with Jimeng Seedance 2.0 VIP, this case study follows the decisions that brought the imagery, camera movement and voice closer together. It also preserves a failure: the character still moves her mouth around the words “也从容,” or “and at ease.”

**Published November 1, 2026 · Creative case study / Engineering notes**

[Watch the complete 10-minute-20-second retrospective on Bilibili](https://www.bilibili.com/video/BV1onxb6rEqp)

![Cover of the complete video retrospective](./media/yunlan/images/review-cover.jpg)

This article records the author's actions, reasons for decisions and observable results. AI assisted with the writing, and the accompanying retrospective uses AI narration. The character and scenes include AI-generated content.

Sunset, a sea of grass, white robes and a sword. The swordswoman already looked beautiful, and the wind was moving through the scene.

Yet the first result felt incomplete. The camera approached her without bringing me into her situation. Later, it finally reached a position behind her shoulder, and her appearance came closer to what I wanted. A new problem then emerged: although the voice was meant to be her inner monologue, her mouth still moved around “也从容.”

These fifteen seconds shifted my attention from writing an ever more impressive prompt toward a practical question: **when the starting point is only a feeling, how can a person work with AI to turn it into something that can be observed, judged and revised?**

I call this process convergence. The record below follows the actual experiments before considering how the verification logic might transfer to software and hardware work.

The video contains sample playback, the operating process and a second look at the mouth movement. This article provides searchable decisions, comparison tables and frame crops. The [original 15-second generated clip](./media/yunlan/yunlan-freedom-original.mp4) is also available separately.

## 1. Starting with Liblib: the character worked before the camera did

The earliest experiment took place in a Liblib test project using **Wan 3.0**. I confirmed the model and supplied a screenshot of its name. The preserved output, originally named “Video Node 2.mp4,” runs for about 5.04 seconds at 1280 × 720 and 30 fps.

![Author-supplied evidence identifying the initial Liblib model as Wan 3.0](./media/yunlan/images/liblib-wan30-model.png)

![Beginning, middle and ending frames from the initial Liblib sample](./media/yunlan/images/01-liblib-sequence.jpg)

[Play the early Liblib original, approximately five seconds](./media/yunlan/liblib-wan30-original.mp4)

The visual direction was already clear: warm golden grassland, cool white and pale blue clothing, a figure facing the wind and distant mountain layers. But the camera mainly moved closer to the character. The result remained a presentation of her appearance. I could see where she stood; the camera did not yet convey what she was facing.

I brought the sample to GPT with two specific judgments: the ending should look past the swordswoman's shoulder toward what she was watching, and her face should suggest complexity within calmness rather than a blunt, vacant expression.

Those judgments set the direction for later revisions. I wanted the audience to **observe her, sense her state of mind and finally face the distance alongside her**.

## 2. Turning a description of a picture into a camera plan

The main prompt material came from the author's [character-view and shot-design discussion](https://chatgpt.com/c/6ae6e510-d5e8-83e9-9804-e5dc5e8c4de1). It includes feedback on the first sample, a director's shot plan, negative prompts, character descriptions and a later compressed version. Private discussions may require the owner's login; the relevant decisions are documented here.

The useful change was breaking a feeling into requirements that could be checked:

| Problem | Production requirement | What to inspect |
|---|---|---|
| The camera only pushes closer | Move continuously from a front-side position, past the side, to behind the shoulder | Actual displacement, parallax and a final over-the-shoulder composition |
| Calmness reads as emptiness | Establish an object of attention, one natural blink and subtle breathing early in the shot | A readable emotional shift without exaggerated sadness or mechanical acting |
| The character holds all the attention | Gradually leave the face and give the valley more of the frame | Whether the ending reveals what she is looking toward |
| Wind is only decoration | Let grass, gauze, hair and heavier fabric respond differently to the same wind | Coherent direction without synchronized motion, clipping or sliding feet |

An earlier version began behind the character. The later director's version instead specified a start approximately **60 degrees to her front-left**, passing her side and ending around **155 degrees to her rear-left**. That gives the first half of the shot time to read her face. These versions should not be combined as though they specified the same starting point.

![Shot intention: observing the character, then sharing her view](./media/yunlan/images/06-shot-intention.jpg)

The director's version specified a 35 mm lens, T4, fixed focal length, a gentle start and deceleration near the end. It divided roughly five seconds into four phases: reaching a higher position and stopping, a subtle emotional shift, the move behind her, and the final view over her shoulder. These are instructions describing desired perspective, depth of field and movement. They do not establish that the model delivered a calibrated physical camera.

The negative prompt targeted foreseeable deviations: a straight push-in, a frontal beauty close-up, a stationary fake orbit, teleportation, the character turning to follow the camera, plastic skin, mechanical expressions, speech and lip-sync.

Constraints also needed updating when the goal changed. The realistic version included `cinematic live-action realism`, while its negative prompt rejected `anime appearance`. Once I chose 3D animation, those directions needed removing or rewriting. **Conflicting art directions cannot be resolved by adding more repetitions of “high quality.”**

## 3. Doubao came before the Jimeng asset revision

The next experiments continued in the author's [Doubao shot-design discussion](https://www.doubao.com/chat/38450724658925058). The chronology matters: **these Doubao samples preceded the later Jimeng-based character revision and used the older character reference**.

The visible record first requested an improved character appearance at 10 seconds and 720p. A subsequent instruction explicitly chose 3D animation instead of a realistic appearance, asking it to preserve the reference while avoiding an artificial-looking character. The 3D generation entry identifies **Seedance 2.0 Fast**. The model for the earlier realistic-looking sample was not independently established from the retrieved entry, so I do not assign it a name here.

![Recorded Doubao 3D generation entry](./media/yunlan/images/doubao-3d-record.jpg)

![Realistic-looking and 3D Doubao outputs using the older character reference](./media/yunlan/images/04-doubao-style.jpg)

[Play the realistic-looking Doubao original, approximately ten seconds](./media/yunlan/doubao-realistic-original.mp4) · [Play the Doubao 3D original, approximately ten seconds](./media/yunlan/doubao-3d-original.mp4)

Both retained the earlier asset's elaborate hair ornaments, embroidery and metal details. The realistic-looking result resembled familiar costume photography. The 3D result moved toward a deliberately modeled digital face and materials, allowing more stylization while retaining the older design's complexity.

Compared with the saved Liblib sample, both Doubao outputs already moved from a front-side view toward a position behind the shoulder. That was closer to the revised camera goal. But the 3D sample's sharper mountain silhouettes and heavier clouds made the atmosphere more dramatic. The complex hair ornaments remained visually prominent during the transition. **An improved camera path did not automatically make the overall art direction appropriate.**

“Realistic-looking” describes a generated visual style here. It does not mean a live actor was filmed.

## 4. An “AI look” is not a style switch

My character brief included avoiding a standardized AI beauty face and keeping a sharper, more assured presence. That still needed translating into concrete choices. I used four observation levels:

**Individuality of the face.** A polished face may still resemble a generic template. Yunlan needed clarity, restraint and an edge rather than universal prettiness from every angle.

**Differences between materials.** Skin, gauze, heavy cloth and metal should not all be equally smooth or glossy. Credibility often depends on these distinctions.

**Stability in motion.** Ornaments and clothing structures should remain consistent between frames. Hair should have weight, expression should develop continuously, and the body should stay in contact with the ground.

**Art direction serving the story.** Attractive embroidery is not useful in every shot. If the intention is to move attention into the distance, dense ornament can keep the audience looking at the character instead.

![Four observation levels: facial individuality, material differences, motion stability and narrative purpose](./media/yunlan/images/08-art-direction.jpg)

A realistic-looking route is constrained by expectations about real people. Excessively smooth skin, eyes without an object of attention and an unnatural relationship between the mouth and the voice can quickly become distracting. Viewers bring extensive experience of real faces and performances to that judgment.

3D animation allows deliberate changes to proportions, silhouette, material treatment and performance range. It gave this project more room for stylistic choices. That freedom has a boundary: **the design rules can change, but the same character must keep following those rules**. A drifting face, unstable ornaments or unwanted mouth movement does not become coherent simply because the work is animated.

These are artistic judgments about this project. They are not an objective “AI face” score and do not establish that 3D is universally better than realism.

## 5. A Jimeng sample changed the local character reference

Several five-second Jimeng samples were preserved. Some were more ornate; others used simpler clothing. The simpler treatment came closer to the feeling I wanted: the character belonged in the wind without reducing the landscape to a decorative backdrop.

This led to a practical decision: **while the work was still developing from an atmospheric idea, the starting character asset should remain open to validation and revision**.

Using full-body, facial and profile frames from the simpler sample, I revised the local Yunlan reference. I retained her facial identity, half-tied long hair, a small blue-and-silver floral hairpin, a fine forehead ornament, white-and-blue clothing and the sword at her left waist. Armor, dense decoration and excessive clothing layers were reduced. The asset went through an initial revision and a further refinement; the older image was backed up.

![Local character reference before and after revision](./media/yunlan/images/02-asset-evolution.jpg)

“Character asset” means a multi-view image reference for generation in this case. It is not a finished 3D character with topology, rigging and production materials. An edited image also cannot guarantee exact identity and costume consistency in a generated video; the motion still needs inspection.

In a [later workflow discussion](https://chatgpt.com/c/6ae712c4-6f68-83e9-8573-e6d5d1815aa6), I organized this experience into a possible sequence: establish logic and poetic atmosphere through language, determine the broad camera movement early, validate performance, then refine the assets and advance the scene.

Simple storyboards, rough 3D previs and inexpensive motion tests are useful next steps. **This project did not complete that ideal workflow from the beginning. A later lesson should not be rewritten as an action that had already happened.**

## 6. Fifteen seconds: assigning roles to references and leaving room for a voice

For the next generation, I explicitly requested **Seedance 2.0 VIP standard mode rather than Fast** and added an inner monologue about freedom and choosing one's own path. The submitted model identifier was `seedance2.0_vip`, targeting 15 seconds, 16:9 and 1080p. The saved successful task consumed 660 points. Points are not a price in renminbi.

Each reference was assigned a separate role:

| Input | Intended role and priority |
|---|---|
| Updated Yunlan reference image | Character identity, clothing and sword placement; the new image takes priority over conflicting details in the older video |
| Existing five-second video | Scene, lighting, 3D treatment and the feel of continuous camera movement |
| Original audio extracted from that video | Musical and environmental continuity, developed naturally across fifteen seconds rather than mechanically looped |

The Chinese monologue reads:

> 旧日的结，交给风。\
> 从今自由，也从容。\
> 前路再多岔口，\
> 我自己选，也自己走。

An English rendering of its meaning:

> Let the wind take the knots of yesterday.\
> From now on, free—and at ease.\
> However many crossroads lie ahead,\
> I choose my path, and walk it myself.

The voice needed to fit an adult swordswoman: firm, encouraging herself, with some ease after releasing a burden. It should not sound like a tragic farewell, a sugary performance or an empty whisper. I extended the duration to fifteen seconds so the lines could be spoken naturally and leave room for the ending.

The prompt explicitly described the voice as Yunlan's internal narration and required her lips to remain naturally closed, without speaking or lip-sync.

Execution through Jimeng's official CLI and its skill involved login authorization, membership access and an initial web confirmation. These were access conditions, not evidence of the model's visual quality. Once a task was accepted, its existing task ID was used to check completion and download the original. Acceptance of a submission and successful generation were recorded separately.

The resulting clip is approximately 15.07 seconds at 1920 × 1080. The player below preserves its original sound and unresolved mouth movement, followed by the ending composition.

<video controls preload="none" playsinline poster="./media/yunlan/images/final-14.6s.png" style="display:block;width:100%;max-width:100%;height:auto;" src="./media/yunlan/yunlan-freedom-original.mp4">Use the original 15-second clip link above if your browser cannot play this video.</video>

![Final composition looking into the distance from behind Yunlan's shoulder](./media/yunlan/images/final-14.6s.png)

## 7. Preserving a failure: the mouth still moves around “也从容”

The overall result came closer to the intended direction, but **the inner voice and the character's mouth were not fully separated**.

The clearest issue occurs around “也从容,” meaning “and at ease.” Frame inspection shows a visibly larger gap between the lips at approximately 4.6–4.9 seconds, with opening and closing before and after. The figure retains the wider frame for context and adds face and mouth crops. These use original pixels, cropped and enlarged without AI repainting or generative super-resolution.

![Frames around 4.6–4.9 seconds with enlarged face and mouth crops](./media/yunlan/images/05-lip-failure-evidence.jpg)

This supports one specific observation: **the requirement for naturally closed lips without speaking movements did not hold throughout the shot**. An isolated frame with an open mouth does not establish phoneme-level lip-sync. This project did not perform a strict time alignment between phonemes and lip shapes. The more accurate description is speech-like mouth movement that conflicts with the intended internal narration.

Possible explanations remain hypotheses. Joint audiovisual generation may associate a first-person voice with the visible character speaking. Instructions for emotional activity, breathing and relaxation may also compete locally with the requirement for closed lips. Multiple references and a long prompt may introduce further trade-offs.

These are not measurements of the model's internal structure or attention. Nor can the outputs establish how much computation an additional character reference requires. What can be directly observed is an output deviation while several conditions were being requested simultaneously.

Three useful next comparisons would be:

1. Generate the visuals without a character voice, keeping the same identity and camera requirements, then add the inner narration separately.
2. Specify the mouth state more clearly during the problem interval while reducing unrelated performance instructions.
3. Where narratively justified, place the voice over a rear view or a wider shot. This reduces mouth visibility, but is a camera-design decision rather than a repair of the mouth behavior.

These are proposed tests, not completed fixes. The original still contains the problem. No mouth repair or additional paid corrective generation was performed for this article.

## 8. What the three routes actually compare

![Comparison of the Liblib, Doubao and Jimeng creative routes](./media/yunlan/images/03-three-routes.jpg)

| Stage | Verified model and conditions | What this experiment revealed |
|---|---|---|
| Liblib, earliest | Wan 3.0; older asset; about five seconds at 720p | The character and sunset atmosphere emerged, but the saved sample mainly pushed closer and did not establish the intended over-the-shoulder narrative |
| Doubao, subsequent early trials | The 3D entry identifies Seedance 2.0 Fast; older asset; ten seconds at 720p | A transition behind the shoulder was present; sharper mountains, heavier clouds and elaborate ornaments changed the scene's emphasis |
| Jimeng, later convergence | Final fifteen-second output: Seedance 2.0 VIP standard; updated image plus video and audio; 1080p | Identity, camera movement and sound came closer together, while the mouth constraint still failed around “也从容” |

Platform, model, duration, asset and prompt all changed, and each later task benefited from earlier experiments. **This is not a controlled platform benchmark.** It cannot establish an absolute ranking of platforms or models.

The reusable part is the decision logic: judge which expression better serves the goal, retain what works and identify the next deviation to address. A study of reference constraints would instead compare conditions such as no reference, identity-only reference and full reference under otherwise similar settings, with repeated generations to observe distributions rather than a single result.

## 9. From video to engineering: order decisions by their dependencies and cost of verification

Looking back, a useful creative sequence would be:

**Poetic intention → camera and spatial design → motion prototype → asset refinement → detailed production.**

Camera movement belongs early, once the atmosphere is understood. Otherwise it is easy to polish the character before knowing why the camera should move or where it should end. Performance, temporary audio and timing should also be considered in the prototype.

![A convergence workflow with feedback loops rather than a one-way production line](./media/yunlan/images/07-convergence-workflow.jpg)

The ordering reflects dependencies and the cost of changing direction. An intention that can be revised in a few sentences is inexpensive to explore. Revising it after longer generation, detailed assets and final audio costs more. Feedback remains possible: a better appearance found in a sample can reshape the reference, while a narrative problem may require returning to camera design.

This case demonstrates intention decomposition, tool orchestration, feedback and evidence management. It does not by itself demonstrate computational-physics accuracy or the engineering performance of a Physical AI system. The transferable element is the verification logic:

| Video production | Software development | Hardware development |
|---|---|---|
| Story, atmosphere and audience experience | User goals and the overall workflow | System function and performance targets |
| Camera movement, storyboard and spatial relationships | Architecture, module relationships and key interactions | System concepts and functional architecture |
| A watchable motion prototype | A runnable minimal end-to-end version | Simulation and functional prototypes |
| Character, motion, materials and audio detail | Interfaces, algorithms, data and error handling | Circuits, mechanics, controls and thermal design |
| Reusable assets and production conventions | Contracts, components and verification evidence | Standard components, design rules and test data |

Software permissions and data boundaries, and hardware safety, physical feasibility and manufacturing constraints still impose requirements that may need to be addressed early. A production with an established character IP also cannot freely defer identity constraints.

At a systems level, this resembles a layered process of constraints and feedback, evaluated by a person. High-level intention affects the camera, performance, art direction and sound. Local results help revise the goal. “Weights” here means the creator's priorities, not direct changes to neural-network weights or differentiable backpropagation training.

The human contribution is continuing to articulate a feeling, judge trade-offs, notice deviations and decide what to accept. AI helps organize the intention, propose executable approaches, generate prototypes and document verification.

Both the successful move behind the shoulder and the unwanted mouth movement are valuable outcomes. One shows the intention taking shape. The other is a reminder that a requirement written into a prompt still needs to become an observable fact in the output.

“I choose my path, and walk it myself” applies to the creative process too.

---

**Sources and reproducibility**

- Prompt development: the author's [character-view and shot-design discussion](https://chatgpt.com/c/6ae6e510-d5e8-83e9-9804-e5dc5e8c4de1).
- Workflow discussion: [Seedance workflow refinement](https://chatgpt.com/c/6ae712c4-6f68-83e9-8573-e6d5d1815aa6).
- Earlier trials: the [Liblib test project](https://www.liblib.tv/canvas?spaceId=13885536&entrySource=homepage_recent_projects&entryItemKey=13885536) and [Doubao shot-design discussion](https://www.doubao.com/chat/38450724658925058). Private conversations or projects may require the owner's login; the screenshots and original clips supplied here are the direct evidence for the discussion.
- Images come from this project's character references, platform records and actual video frames. External film stills mentioned in the source discussions were not reused. Some evidence images retain Chinese text from the original records; the surrounding English text and captions explain their relevant content.
- The author supplied the judgments and revision requests; AI assisted with organization. The accompanying retrospective uses AI narration and was approved by the author before publication on Bilibili. This written version is hosted on the author's blog; it was not submitted to Zhihu.
