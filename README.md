# Relationship Intelligence v3.9.41

v3.9.41:
- Adds Vaillancourt-informed social-rivalry teaching for women: sexy-peer intolerance, indirect aggression, social comparison, jealousy/envy, gossip, exclusion, sexual reputation pressure, and attractiveness policing.
- Adds a Tracy Vaillancourt dynamics voice as the fourth chat panel voice for Social rivalry / reputation.
- Adds an Orion "what women really want" source card separating stated preference, attraction, benefit, fulfillment, social-media comparison, and life tradeoffs.
- Adds citations/source trails for Vaillancourt/Sharma, Vaillancourt 2013, Arnocky et al., Fisher/Cambridge, Buss/Shackelford, and the two new transcripts.

v3.9.40:
- Fixes chat pronouns so women asking about men get "he/him" instead of hardcoded "she/her" in mixed-signal and grounding chat responses.
- Expands the big-three dating-strategy chat responses, especially Amy/Alison and Kait, for women choosing men intentionally.
- Adds intentional-dating language to category detection so prompts about choosing a man by character, direction, safety, attraction, and long-term fit flag as Dating strategy / selection when the wrong situation type is selected.

v3.9.39:
- Expands mixed-signal detection so plain-English prompts like "warm in person but inconsistent over text," "I do not want to chase," and "I do not want to miss a real opportunity" route to Hot-cold / mixed signals instead of Life reset / grounding.
- Strengthens the category mismatch warning when the selected situation type disagrees with the written situation.

v3.9.38:
- Adds a "Social rivalry / reputation" situation type for female intrasexual competition, gossip, reputation pressure, friend pressure, and attractiveness policing.
- Adds Modern Wisdom / Dr. Dani Sulikowski source cards, with a women-focused card on where pressure comes from and what the consequences can be.
- Renames the prior "Find a man / dating strategy" label to the broader "Dating strategy / selection."

v3.9.37:
- Adds a first-class "Dating strategy / selection" coach category for early-stage women looking for men and broader dating-selection prompts.
- Adds Orion source cards from "How women win: happy hunting" and "Don't be her option: why you get left on read," including the hunter/fisherman and job-offer analogy models.
- Routes happy hunting, conditional yes, lazy dating, fisherman/hunter, don't chase, left-on-read, and job-offer prompts into bespoke coach/chat responses instead of generic reciprocity.

v3.9.36:
- Fixes source-card ownership in the chat so Kait evidence cards only appear under the Kait voice.
- Prevents Amy/Alison cards from matching Kait cards through the generic word "truth."
- Keeps Amy/Alison tied to appreciation, usefulness, comfort, correction, translation, and Alison/Modern Wisdom playbooks.

v3.9.35:
- Re-centers contribution/reciprocity coach answers on building demonstrated capacity instead of over-focusing on avoiding sex.
- Adds a contribution-specific opening frame, "What I hear," best next move, and rationale around direction, composure, standards, health, useful competence, and a real life she can enter.
- Keeps sex/pacing advice for explicit sex-timing prompts, but prevents casual mentions of sex from hijacking capacity and relationship-opportunity questions.

v3.9.34:
- Makes the four coach field-guide boxes respond to the selected situation type instead of staying on generic early-dating advice.
- Adds specific field guides and good questions for reciprocity, public respect, digital loyalty, outside validation, information diet, mixed signals, and sex/pacing.
- Keeps the generic "man asking a woman out" guide only for ordinary early dating prompts without a more specific category.

v3.9.33:
- Clarifies the mini source-card bar charts as relative 0-100 evidence-weight visuals, not relationship scores.
- Tightens the coach category mismatch check so specific wrong selections like digital boundary vs public respect now show a Category check banner.
- Leaves broad repair/behavior-change mismatches quiet so the app does not nag when the selected frame is close enough.

v3.9.32:
- Dramatically expands the expandable chat source cards with take-home messages, model steps, mini evidence charts, and citation/source trails.
- Adds deep Kait Willett cards from "The Only Thing Women Want From Men" covering stated-vs-revealed preference gaps, capacity/status signals, and kindness plus self-command.
- Adds deeper Orion cards for incentive audits, relationship opportunity, contribution, and sex pacing.
- Updates the source-card renderer used by the chat and optional coach database so cards can show structured evidence instead of one-sentence blurbs.

v3.9.31:
- Adds a category mismatch check in the coach response when the selected situation type conflicts with the text.
- Keeps the selected category in control, but offers a one-click Switch button to move to the suggested category.
- Adds a compact advisory style for mismatch warnings so wrong selections are visible without blocking the coach.

v3.9.30:
- Removes the redundant Counselor bubble from the "Ask the geniuses" chat.
- Renames the follow-up response from Counselor synthesis to Coach synthesis.

v3.9.29:
- Rebuilds the "Ask the geniuses" chat so it no longer falls through to repeated generic repair/refinement copy.
- Makes the coach chat deterministic: Orion, Kait, Amy/Alison, and one wildcard each generate text directly from the situation type and prompt.
- Adds situation-specific chat responses for digital boundaries, public respect, outside validation, information diet, contribution, hot-cold signals, sex pacing, grounding, behavior change, and repair.
- Renames the third modern panel voice to Amy Armstrong-Ellison while keeping it backed by the Alison/relationship-translation playbooks.
- Keeps source cards under each voice, but makes the visible answer full sentences instead of database boilerplate.

v3.9.28:
- Rebuilds the coach intake gate so it requires stage, speaker role, target role, and situation type before generating a coach read.
- Adds situation types for public respect, digital boundaries, outside validation, information diet, contribution, hot-cold signals, sex pacing, behavior change, repair, grounding, and general advice.
- Fixes the public-respect failure where "friends" could route a public dignity problem into self-orientation / life-reset advice.
- Adds pattern-specific coach reads, next moves, pitfalls, and scripts for public refuting, texting other people, validation posting, and toxic information diet cases.
- Removes a fallback recursion risk in the coach reframe path so the panel/coach cannot loop when no specific reframe matches.

v3.9.27:
- Makes Orion, Kait, and Alison the fixed big-three voices for early man-to-woman coach chat, with a fourth wildcard selected from the situation.
- Adds expandable source cards inside each genius chat bubble so users can inspect which coach-database playbooks informed that voice.
- Removes the obsolete "Assumed frame" card now that the user explicitly selects stage and roles.
- Adds an Orion "what women want" understanding layer so men get possible female-side reasons for hesitation, indirectness, testing, passivity, or mixed signals.
- Adds a Kait Willett capacity/status layer so male-to-female prompts are framed around demonstrated capacity, not only dates, attention, sex, or generic niceness.
- Syncs the genius chat panel with the coach playbooks so "men asking about women" prompts pull Orion + Kait rather than generic repair experts.
- Simplifies the coach intake: removes "what do you want" and "grounding style" selects, and adds explicit role selectors for "I am" and "I am asking about."
- Adds a matched playbook from the Orion video "What women want: the answer to the question" and boosts retrieval for understand-women prompts.
- Tightens ordinary dating fear versus safety language so "I am afraid she will lose attraction" does not route as a danger case.

v3.9.19:
- Starts the Modern Wisdom source-bedrock layer with Alison Armstrong and Suzanne Venker playbooks distilled into the coach database.
- Boosts retrieval so Modern Wisdom, Alison/truth/appreciation/usefulness, and Suzanne/family/marriage/provider prompts pull those cards into the coach read.
- Shows source labels inside the optional coach database section and adds a Suzanne family/purpose lens to the expert roster.

v3.9.18:
- Makes expert display names recognizable during development with pseudonym + "based on ..." labels.
- Adds deeper Orion/Taraban-inspired coach playbooks for sex pacing, useful contribution, and avoiding one-way overinvestment.
- Fixes early-stage routing for prompts like "dating a girl for a month or two" so they do not get treated as mature/married relationship cases.
- Makes the genius panel ask and answer sex-pacing/contribution questions with a sharper incentive/respect lens.

v3.9.17:
- Removes a dangling top-level coach return statement that blocked Safari from parsing `app.js`.
- Bumps the cache and asset query string so Safari/GitHub Pages fetch the corrected app script.

v3.9.16:
- Fixes an ambiguous decimal ternary in the expert engine that could parse badly in Safari and block startup.
- Adds early startup error reporting so the header shows script/load failures instead of staying stuck on "Loading app...".
- Bumps the service-worker cache and asset query string again for Safari/GitHub Pages.

v3.9.15:
- Hydrates Workspace and Self / Galaxy when their top tabs are clicked, so the emergency nav guard opens the view and runs the matching render functions instead of revealing empty panels.
- Restores the Workspace body state class during tab navigation so CSS does not suppress the page after the tab becomes active.
- Bumps the service-worker cache and asset query string to force Safari/GitHub Pages to fetch the updated files.

v3.9.14:
- Adds an emergency top-tab navigation handler directly in the HTML so Workspace/Snapshot/Self/Diagnostics buttons still switch views even if a later module throws during startup.
- Keeps the normal app renderers layered on top when they load successfully.

v3.9.13:
- Starts the long-term coach intelligence fix by adding a standalone weighted coach router.
- Replaces first-match coach inference with scored stage/crux classification, suppressions, confidence, and reasons.
- Adds coach-router regression tests for early dating, pacing, safety, dating-market discouragement, and mature/kids prompts.

v3.9.12:
- Fixes dating-market frustration prompts so phrases like "doesn't have kids" no longer misclassify the coach read as mature/married.
- Routes Hinge/Instagram dating discouragement, access frustration, and generalized resentment into the self-orientation/life-reset branch instead of recycling flirtation tactics.
- Labels the coach output as self-orientation / life reset when the real issue is getting out of the dating loop.

v3.9.11:
- Adds a first-class self-orientation/life-reset coaching branch for prompts about finding yourself, rumination, family, friends, faith, dogs/routines, location changes, and achievable goals.
- Prevents those prompts from being treated like another early flirtation scenario.
- Adds a matched playbook for making life bigger than the romantic loop.

v3.9.10:
- Fixes the Coach office update button so it uses a delegated click handler and cannot silently lose its binding after workspace re-renders.
- Makes coach profile lookup create/use the active profile more reliably before saving the intake.
- Adds visible status feedback and scrolls to the coach read after updating.

v3.9.9:
- Separates Coach office and Counselor office: coach intake and normal coaching live in the Coach office; issue repair and saved-issue experts live in the Counselor office.
- Makes the counselor an explicit moderator in the genius chat who tracks goodwill, mediation, safety, and next-step synthesis.
- Moves the Coach office launcher to the primary/first button and upgrades both room buttons with clearer visual hierarchy.

v3.9.8:
- Rebuilds the "Ask the geniuses" output as a panel conversation with position, pushback, agreement, practical test, grounding, and synthesis turns.
- Adds a user "Your turn" box so the user can weigh in, update what happened next, or challenge the panel.
- Rewrites early-dating panel responses to be more concrete and interactive instead of isolated generic expert blurbs.

v3.9.7:
- Reframes structured issue/event repair as a small "Counselor office" inside the main coach flow.
- Makes it clearer that the issue room is only for a concrete problem, rupture, conflict, or event that needs saving and repair.
- Renames the saved-issue expert panel so it reads as issue-specific support instead of the default coach experience.

v3.9.6:
- Renames and clarifies the coach database section as matched playbooks behind the coach answer.
- Adds an explanation that those playbooks are supporting rationale, scripts, evidence, pitfalls, and stop points rather than a separate second answer.
- Shrinks the playbook section into a collapsed optional reference with compact chips and expandable rows.
- Adds tappable genius voice profiles with authority/source lineage, bio, tags, and modeled-voice disclosure.
- Rebalances modern voice labels so not every expert is presented as a doctor, and restores visible cultural/historical voice types.

v3.9.5:
- Replaces generic "Ask the geniuses" lens blurbs with situation-specific short comments.
- Curates the genius panel for early male-to-female dating prompts so it gives clean next-step advice instead of long-term relationship analysis.
- Keeps fresh coach questions isolated from stale issue context and bumps the cache key so Safari/GitHub Pages load the new panel logic.

v3.9.4:
- Stops fresh coach/genius questions from being polluted by older selected issues, profile notes, or long-term relationship context.
- Makes explicit early-dating language such as "girl I just met," "first date," "asking her out," and "talking stage" override stale mature/long-term profile signals.
- Penalizes non-early database cards when the prompt clearly describes a new early dating situation.

v3.9.3:
- Makes the coach the main expert surface by adding an "Ask the geniuses" chat-style panel inside the coach response.
- Adds a direct "Ask the geniuses" question box in the coach popout for standalone panel questions.
- Rephrases the user context into a simplified question bubble, then lets the most relevant expert voices give short discussion-style comments.
- Keeps the full expert-card panel hidden unless there is a saved issue/event, where it opens as the deeper panel for that issue.
- Fictionalizes modern expert display names and bios while preserving historical/literary figure names and the internal routing logic.

v3.9.2:
- Adds explicit coach role inference for early dating, including "I am a man asking a girl/woman out" and "I am a woman asking a guy/man out."
- Changes early-stage coach copy, field guide, and issue analysis when the user is a man asking a woman out, so the advice no longer flips the roles.
- Adjusts database ranking so masculine-direction cards do not dominate female prompts and women/serious-boyfriend-selection cards do not appear as top matches for male-to-female asking-out prompts.

v3.9.1:
- Fixes coach stage inference so "moving too fast," pace, and rushing language defaults to early-stage pacing unless the user clearly names marriage/spouse/kids/years together.
- Integrates the old issue/event tracker under the coach intake as an optional collapsed structured tracker instead of showing two unrelated input/result systems in the same visible module.
- Adds a dedicated coach database card for early-stage pacing so "moving too fast" gets specific guidance, scripts, selection signals, and stop points.

v3.9.0:
- Adds a dedicated `coach-database.js` knowledge base with structured coaching cards across early dating, texting, safety, repair, behavior change, values, desire, sex/intimacy, money, children, family boundaries, modern dating advice, and long-term marriage routines.
- Wires the coach response to rank and render relevant database matches from the user’s situation, relationship stage, inferred crux, and goal.
- Adds compact database cards with rationale, next moves, evidence to watch, scripts, pitfalls, selection signals, and stop points so coach answers become less generic and easier to expand.

v3.8.1:
- Deepens the coach layer with stage-specific playbooks for early dating, committed relationships, mature bonds, safety, desire/admiration, behavior change, and grounding values.
- Adds practical "dad advice" for early dating, what to select for, what not to feed, good questions, and behaviors to adopt or eliminate.
- Adds expandable Issue analysis mode and Children / family-life questions while preserving the old expert lens panel for structured analysis.

v3.8.0:
- Reframes the top Workspace modules from issue/expert diagnosis into a coach-first flow: Tell the coach what is going on and Talk with the coach.
- Adds a freeform coach intake for normal-language situations, goals, relationship stage, grounding style, evidence, worries, and questions.
- Adds a stage-aware coach response for early dating, committed/mid-stage, and mature/married relationships with a read, reasons, pitfalls, adopt/eliminate behaviors, scripts, and grounding principle.
- Keeps the existing issue tracker and expert lens panel available underneath the coach layer for structured follow-up and deeper framework analysis.

v3.7.1:
- Softens glossary term styling so defined relationship/therapy words are available without visually dominating the expert text.
- Replaces the old click-created definition panel with a small hover/focus/click tooltip that stays clamped inside the visible screen, including inside popouts.

v3.7.0:
- Moves Issue / Event Translation and Expert Interpretation into focused popout modules instead of showing both full panels at the top of the Workspace.
- Adds a calmer personalized workspace launcher with the current profile, current event, status, and two clear actions.
- Keeps the full tracker and expert functionality intact while reducing first-screen visual overload.

v3.6.9:
- Rebalances slider visual hierarchy so the rating name is the strongest element and low/high endpoint text is quieter.
- Moves the live slider meaning into a centered supporting pill, reducing confusion while preserving the more tactile v3.6.8 input feel.

v3.6.8:
- Upgrades range sliders across the app with colored tracks, larger thumbs, live meaning labels, and tick feedback so each notch feels more intentional.
- Adds slider-specific microcopy for core signals such as warmth, respect, peace, reciprocity, attraction, clarity, repair, admiration, dopamine, activation, and bonding afterglow.
- Adds stickier section context in long slider wizards so general partner signals, personal feelings, couple qualities, and bond chemistry stay easier to orient around while scrolling.

v3.6.7:
- Adds a Bond Chemistry module with a separate popout wizard for dopamine percentage, oxytocin percentage, heart-rate activation, bonding afterglow, and an interaction note.
- Adds a current dopamine/oxytocin balance graphic and a Bond Chemistry trajectory chart with separate dopamine and oxytocin lines.
- Adds an Admiration Trajectory chart and expands the admiration module explanation with the inputs that feed the index.

v3.6.6:
- Renames the partner-signal entry point to Edit General Partner Signals so the warmth, respect, peace, reciprocity, attraction, clarity, follow-through, and social-fit sliders are easier to find.
- Opens the current partner/personal score summary by default in Relationship Measures.

v3.6.5:
- Adds visible feedback under Issue / Event Translation meaning cards after Accurate, Partial, or Wrong is clicked.
- Adds a private text-insult branch so respect/dignity issues do not get described as public joking when the event is private meanness over text.
- Bumps service-worker cache keys so Safari receives the translation feedback fix.

v3.6.4:
- Rebuilds the Issue / Event Translation renderer around the expert-engine crux classifier instead of older broad templates.
- Adds crux-specific possible meanings, evidence checks, and next steps for safety, boundaries, trust, respect, labor, commitment, communication, attachment, intimacy, appreciation, dating evaluation, and positive repair.
- Reduces repeated he/she text by making the module respond to the selected event pattern rather than only the prompt label.

v3.6.3:
- Cleans up a stale diagnostics failure for the removed Peace/Respect time canvas.
- Treats the current Peace/Respect trajectory canvas, dashboard canvas, or high-resolution matrix as the valid diagnostic target.
- Bumps service-worker cache keys so Safari receives the updated diagnostics code.

v3.6.2:
- Adds a values-under-test layer to the expert takeaway so advice names likely value tensions without assigning the user's worldview.
- Connects behavior recommendations to shared goals such as autonomy, dignity, gratitude, fairness, commitment, repair, consent, and secure connection.
- Adds value reflection prompts for durability, because behavior change is fragile when it is not tied to a shared belief, value, or goal.
- Treats values as hypotheses discovered through repeated conflict, repair, and life-stage decisions.

v3.6.1:
- Removes repeated relationship-stage boilerplate from individual expert responses.
- Integrates the former therapy exercise and immediate-action cards beneath the expert analysis as one plain-English behavior takeaway.
- Adds issue-specific Stop, Start, Make it stick, Evidence, optional practice, and durability/values checks across all expert crux categories.
- Adds a general relationship posture centered on kindness, lower anxiety, and judging change by repeated conduct rather than temporary compliance.

v3.6.0:
- Adds tap, hover, and keyboard-focus definitions for therapy and relationship terminology inside expert responses.
- Includes plain-language explanations for flooding, criticism, defensiveness, stonewalling, repair bids, attachment, autonomy, mental load, shame, vulnerability, and related terms.
- Rewrites the abstract long-term relationship modifier in more concrete language.

v3.5.9:
- Replaces static expert speeches with a selected-issue-only crux recognition engine.
- Classifies safety, boundaries, trust, dignity, labor, commitment, communication, attachment, intimacy, appreciation, dating evaluation, and positive repair independently.
- Adds expert-specific capability routing, relationship-stage and recurrence modifiers, safety overrides, alternative explanations, evidence tests, and stop conditions.
- Prevents cultural contrast modes from appearing as Best Fit or Challenge View and adds regression tests for routing and response differentiation.

v3.5.8:
- Rebuilds the event timeline as expandable evidence cards with full event recaps.
- Adds outcome, recurrence, follow-up notes, and reversible relationship-measure adjustments.
- Lets each event support positive or cautionary relationship descriptors displayed beside the top status bars.

v3.5.7:
- Rebuilds the Peace and Respect Matrix as a responsive, high-resolution quadrant graphic.
- Places the current relationship at its exact Peace and Respect scores with a prominent marker.
- Uses one shared matrix renderer across Workspace, Dashboard, and the main analysis view.
- Removes the vestigial Therapy / Growth Exercises and Role / Paradigm Shift display headings.

v3.5.6:
- Gives Marcus Aurelius and Aristotle separate, issue-specific reasoning for surveillance, appreciation, communication, commitment, intimacy, public conflict, responsibility, trust, closeness, boundaries, and positive events.
- Uses the reported issue or example event directly in each philosophical analysis, question, experiment, and limitation.
- Labels generated expert applications as modeled analysis rather than fabricated direct quotations.

v3.5.5:
- Restores therapy and role content to their intended full-width modules after legacy layout passes.
- Removes narrow, stretched exercise cards and enforces compact content-sized rows.
- Makes the Marcus Aurelius lens specific to surveillance, consent, access security, boundaries, and safety planning.

v3.5.4:
- Adds a dedicated Evan Stark coercive-control safety lens.
- Hard-routes covert phone, location, message, and app monitoring away from modern-dating advice.
- Penalizes early-dating optimization lenses for surveillance, safety flags, and established marriages.
- Adds a cache-busted stylesheet so the new relationship status bars render immediately.

v3.5.3:
- Replaces the Peace, Respect, and Repair pills with compact relationship-vital-sign bars.
- Adds plain-language statuses and accessible progress values while removing duplicated scores under the profile name.

v3.5.2:
- Audits possible meanings for him and her across every issue category.
- Replaces generic gender assumptions with event-specific hypotheses and supporting/contradicting evidence checks.
- Makes positive trust and repair events use their own meanings instead of the appreciation fallback.
- Removes the redundant expert “challenge” section and capitalizes Bell Hooks throughout the UI.
- Rewrites expert output as complete, framework-faithful prose rather than fragmented system headings.

v3.5.1:
- Adds compact expert avatars, biographies, and source-type labels before analysis.
- Rewrites expert-card section titles in direct, human-readable language.
- Removes the redundant “What this framework challenges” section from expert cards.

v3.5.0:
- Replaces generic male/female meaning fallbacks with category-specific, evidence-aware hypotheses.
- Covers commitment, trust, jealousy, planning, household labor, emotional distance, affection, and boundaries explicitly.
- Adds “fits if / less likely if” checks and makes positive-event translations issue-specific.

v3.4.9:
- Replaces the low-resolution admiration arrows with a responsive high-DPI symmetry chart.
- Adds crisp directional score bars, a difference score, balance status, and accessible chart text.

v3.4.8:
- Deletes the interaction-pattern display entirely.
- Adds four expert-diagnosis examples covering healthy digital boundaries, successful money repair, covert phone monitoring, and AI-assisted conflict outsourcing.

v3.4.7:
- Consolidates all useful Workspace trends into Relationship Changes Over Time.
- Removes redundant casual, slider-history, and Peace/Respect trajectory displays.
- Groups partner, personal, and couple sliders into one condensed Relationship Measures module.
- Renames charts around the questions they answer instead of their underlying data structures.
- Removes the generic interaction-pattern/escalation-loop display.
- Adds healthy digital-boundary and money-repair examples plus covert phone-monitoring and AI-conflict-judge examples.
- Replaces generic expert summaries with framework-specific interpretations, challenges, questions, experiments, and failure signals.
- Removes redundant expert context and lens-routing explanations.

v3.4.6:
- Condenses the Workspace entry into a compact profile and latest-issue summary with two relationship avatars.
- Moves profile and issue examples into compact controls within Issue / Event Translation.
- Prioritizes Issue / Event Translation and Expert Interpretation at the top of the Workspace.
- Adds profile-specific issue timestamps and resolved/reopened lifecycle tracking.
- Adds provenance, avatars, and consequence/tradeoff sections to guidance cards.
- Adds clearly labeled popular-media and red-pill contrasts without treating them as expert authority.

v3.4.5:
- Adds a modern dating and relationship science advisor category.
- Adds contextual lenses based on Logan Ury, Eli Finkel, David Buss, and Scott Stanley.
- Connects modern dating shortcuts to early-dating, app-choice, mating-strategy, jealousy, and commitment-clarity issues.
- Adds framework cautions to avoid stereotyping or treating general research as a diagnosis.

v3.4.4:
- Restores general partner-signal sliders for warmth, respect, peace, reciprocity, attraction, clarity, follow-through, and social fit.
- Renames Issue Translation to Issue / Event Translation for positive and negative events.
- Adds visible thinker shortcuts in the expert lens panel.
- Adds and cleans example issues, including positive appreciation examples.

v3.4.3:
- Adds connected advisor lenses for the active relationship issue.
- Adds contextual best-fit and challenge-view expert outputs.
- Refreshes PWA cache/versioning for Safari and hosted deploys.

Deep rebuild:
- New Relationship / Snapshot wording:
  - Issue Type → Recent event or issue category
  - Who feels aggrieved → Who is being influenced?
  - Issue name placeholder → appreciation
  - Specific event placeholder → She hypes me up when I do thoughtful things.
  - Story placeholder → I feel more like doing nice things when I’m appreciated...
- Adds Issue / Event Translation banner that updates with selected issue
- Positive events now use a positive reinforcement engine
- Fixes example profile trajectories:
  - couple trajectory
  - personal feeling trajectory
  - female-specific traits trajectory
  - male-specific traits trajectory
- Hides stale v3.3.3 diagnostics and adds v3.4.2 diagnostics
