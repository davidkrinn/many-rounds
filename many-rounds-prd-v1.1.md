# Many Rounds — Boxing Timer & Combo Trainer
## Product Requirements Document (PRD) v1.1

---

## 1. Document Information

| Field | Value |
|-------|-------|
| **Document Title** | Many Rounds — Boxing Timer & Combo Trainer Web App |
| **Author(s)** | *(Your name here)* |
| **Date Created** | April 28, 2026 |
| **Last Updated** | April 28, 2026 |
| **Version** | 1.1 |
| **Status** | Draft |
| **Reviewers / Approvers** | *(Fill in)* |
| **Distribution List** | *(Fill in)* |

### v1.1 Change Summary

- Auth approach updated to localStorage only (no accounts, no backend)
- Break warning updated to 5 beeps in final 5 seconds
- Session complete screen defined (title belt, stats, buttons)
- Combo max lengths finalized per difficulty
- Punch reference added to homepage + popover on config page
- Wake Lock API added as P0
- Single volume control
- Background music feature added (3 tracks with preview)
- Music ducking/volume behavior defined
- Audio preloading with countdown defined
- Hosting clarified as VS Code + GitHub

---

## 2. Executive Summary

**Many Rounds** is a mobile-first, responsive progressive web application (PWA) that serves as a customizable boxing round timer and real-time combo trainer. Users configure their training session — number of rounds, round/break duration, difficulty level, voice preferences, combo frequency, and background music — then receive audio and visual punch/defense callouts throughout each round, simulating a live trainer experience.

The app targets boxing enthusiasts ranging from beginners learning basic combinations to advanced fighters seeking high-intensity, complex combo drills. It is free to use with no account required. Match configurations are saved locally to the device via localStorage for quick reuse.

The design aesthetic is rooted in an elite, modern boxing gym atmosphere with an oxblood and beige color palette built on Bootstrap 5. The product will be a fully installable PWA capable of offline use, optimized for both vertical and horizontal mobile orientations, with desktop as a secondary target.

This is an internal proof of concept project built and hosted locally via VS Code and GitHub. There are no paid services, subscriptions, or backend infrastructure. All data is stored client-side.

---

## 3. Problem Statement

- **What problem are we solving?** Boxers and fitness enthusiasts who train solo (shadowboxing, heavy bag, etc.) lack an accessible, customizable tool that simulates a real trainer calling out combinations in real time. Existing boxing timer apps typically only provide round timing without intelligent combo callouts, and those that do offer limited customization, poor UX, or require expensive subscriptions.

- **Who experiences this problem?** Solo boxers, home gym users, fitness enthusiasts incorporating boxing into their routines, and beginner-to-advanced fighters who don't always have access to a trainer or training partner.

- **What is the impact of not solving it?** Users default to generic interval timers with no combo guidance, leading to repetitive, unstructured training sessions. Beginners don't learn proper combinations, and advanced users plateau without varied, challenging drills.

- **Evidence / data supporting the problem:** The boxing fitness market continues to grow rapidly. Top boxing timer apps in app stores have millions of downloads but consistently receive feedback requesting better combo integration, more voice options, and deeper customization. There is a clear gap for a free, web-based solution that combines timing and intelligent combo training. Additionally, this serves as an internal proof of concept to demonstrate the viability of a browser-based training tool that could be expanded into a full product.

---

## 4. Goals & Objectives

### Business Goals

- Deliver a functional internal proof of concept demonstrating the viability of a browser-based boxing training tool
- Validate the core user experience of real-time combo callouts combined with a round timer
- Establish the "Many Rounds" brand identity and design language for potential future public release
- Build a foundation that can be expanded into a full product with backend services, accounts, and monetization

### Product Goals

- Deliver a seamless, trainer-like experience through audio/visual combo callouts with background music
- Provide deep customization so the app serves beginners through advanced fighters
- Ensure the app is usable anywhere (gym, home, park) via offline PWA functionality
- Create an elite, polished UI that feels premium despite being a free POC

### Key Results / Success Metrics (KPIs)

- **KPI 1:** POC is fully functional end-to-end (configure → train → complete) without errors
- **KPI 2:** App works reliably offline after initial load
- **KPI 3:** Audio callouts, bells, and background music play in sync without latency issues across iOS Safari and Chrome Mobile
- **KPI 4:** All three difficulty levels produce appropriately varied and logical combinations
- **KPI 5:** App renders correctly in both portrait and landscape on mobile devices
- **KPI 6:** Internal stakeholders validate the concept as viable for further investment
- **KPI 7:** Session complete screen accurately tracks total punches, defensive moves, and estimated calories

### Non-Goals

- This is NOT a public production release — it is an internal POC
- No user accounts or backend authentication
- No server-side data storage — all data is localStorage only
- No real ad integration — placeholder only
- No social features, sharing, or leaderboards
- No native iOS/Android app — PWA only
- No paid services or subscriptions
- No wearable/smartwatch integration
- No video instruction or form correction

---

## 5. Target Audience & User Personas

### Primary Persona: "Solo Sam"

- **Role:** Recreational boxer / fitness enthusiast
- **Demographics:** 20–40 years old, trains 3–5x/week, owns a heavy bag or shadowboxes at home/gym
- **Goals:** Structured, varied workouts without needing a trainer present
- **Pain Points:** Gets bored doing the same combos, doesn't know enough combinations, existing apps are too basic or too expensive
- **Behaviors:** Uses phone propped up during training, wants quick setup, values audio callouts so they don't have to stare at a screen. Enjoys music while training to stay motivated

### Secondary Persona: "Beginner Bri"

- **Role:** New to boxing, taking it up for fitness
- **Demographics:** 18–50 years old, just started boxing classes or home training
- **Goals:** Learn the basic punch numbering system and common combinations
- **Pain Points:** Doesn't know what combos to throw, overwhelmed by complex apps, needs guidance
- **Behaviors:** Will use beginner mode, references the punch numbering guide on the homepage and config page popover, prefers encouraging voice, appreciates the calorie burn estimate for fitness motivation

### Secondary Persona: "Competitive Chris"

- **Role:** Amateur/competitive boxer
- **Demographics:** 18–35 years old, trains daily, competes or aspires to compete
- **Goals:** High-intensity, unpredictable combo drills that simulate fight pressure including defensive moves
- **Pain Points:** Most apps are too easy/slow, wants champ-level complexity with defensive calls
- **Behaviors:** Maxes out settings (12 rounds, champ difficulty, constant combos), uses landscape mode, prefers gruff or stern voice, selects metal or rap background music for intensity

### Internal Stakeholder Persona: "Decision-Maker Dana"

- **Role:** Internal stakeholder evaluating the POC for further investment
- **Demographics:** Product leader or executive
- **Goals:** Assess whether the concept is viable, polished, and worth developing into a full public product
- **Pain Points:** Needs to see a working, impressive demo — not just wireframes or slide decks
- **Behaviors:** Will evaluate the app on design quality, feature completeness, user experience flow, and technical feasibility. Will test on their own phone

### Stakeholder Map

| Role | Owner |
|------|-------|
| Product Owner | *(You)* |
| Development | *(TBD)* |
| Design | *(TBD)* |
| QA | *(TBD)* |
| Internal Reviewers | *(Stakeholders evaluating the POC)* |
---

## 6. Market & Competitive Analysis

### Market Context / Trends

- Boxing fitness is a multi-billion dollar global market growing year over year
- Home/solo fitness surged post-pandemic and remains elevated
- PWAs are increasingly viable as app-store alternatives with lower friction and zero distribution cost
- Voice-guided fitness experiences (Peloton, Apple Fitness+) have set user expectations high
- Music-driven workout experiences are now table stakes — users expect curated audio alongside training guidance

### Competitive Landscape

| Competitor | Strengths | Weaknesses |
|-----------|-----------|------------|
| Boxing Round Timer (various) | Simple, reliable timers, large install base | No combo callouts, no customization beyond timing, no music integration |
| PunchLab | Combo generation, decent UI | Limited voice options, not free, native app only, no background music |
| Boxerise / Shadow Boxing Apps | Some combo features, some have music | Poor UX, limited difficulty scaling, dated design, no defensive moves |
| YouTube Boxing Workouts | Free, human trainer, music included | Not customizable, requires video attention, not interactive, can't adjust difficulty |
| Peloton / Apple Fitness+ Boxing | High production quality, music, coaching | Expensive subscription, requires specific hardware/ecosystem, not customizable per round |

### Differentiation / Unique Value Proposition

Many Rounds is the only **free, web-based, installable PWA** that combines a fully customizable round timer with an intelligent combo engine featuring multiple mix-and-match voice profiles, three difficulty tiers with defensive moves, background music selection, both visual and audio callouts, session statistics with calorie estimation — all wrapped in a premium boxing gym aesthetic that works offline on any device with zero installation friction.

---

## 7. Scope & Boundaries

### In Scope (V1 — POC)

- Responsive PWA (mobile-first, vertical + horizontal, desktop supported)
- Elite-styled homepage with dark gradient, boxer foreground image, branding, and punch numbering reference section
- Navigation menu (Quick Match, Create a Match, Saved Matches, Settings, How to Use, About / Contact)
- Create a Match configuration screen with all customization options
- Punch numbering reference popover on configuration page
- Quick Match (instant start with defaults)
- Round timer with start bell, warning bell, and final championship bell
- Break timer with 5-second countdown beeps
- Real-time combo engine with audio + visual callouts
- 3 difficulty levels (Beginner: max 3 punches, Up-and-Comer: max 4–5 punches, Champ: max 6 punches with defensive moves)
- Mix-and-match voice selection (gender × tone = 8 profiles)
- Combo display toggle (one-at-a-time vs. full combo highlighted)
- Customizable combo frequency
- Background music selection (3 royalty-free instrumental tracks: rock, metal, rap) with preview/sample functionality
- Music volume behavior (duck to 80% during breaks with 10-second fade back up, voice callouts always prioritized in mix)
- Animated break screen with filling circle, round number, and 5-second beep countdown
- Pause / Stop functionality
- Session complete screen (title belt graphic, "You knocked it out!", total punches, total defensive moves, estimated calories burned, "Go Again" + "New Match" buttons)
- localStorage-based match saving and loading (no accounts)
- Saved Matches management with auto-naming fallback
- Settings page (voice, display, volume)
- How to Use / Tutorial page
- About / Contact page
- Wake Lock API to prevent screen sleep during sessions
- Audio preloading with countdown to round
- Offline functionality via service worker
- Home screen installable (PWA)
- Ad slot placeholder banner on break screen
- Analytics instrumentation (console logging)

### Out of Scope (V1 — POC)

- User accounts / authentication / backend
- Server-side data storage
- Native mobile apps
- Video content / form tutorials
- Social features / sharing
- Wearable integration
- Paid subscription or real ad integration
- Body shot distinction
- Multiplayer / partner modes
- Haptic feedback (future consideration)
- Multiple languages / localization

### Future Considerations / Parking Lot

- Backend with real user accounts and cloud-synced saved matches
- OAuth authentication (Google, Apple)
- Paid ad integration during breaks
- Additional difficulty levels or custom difficulty slider
- Workout history / statistics dashboard
- Custom combo builder (user creates their own combos)
- Integration with heart rate monitors
- Haptic feedback for combo callouts
- Additional background music tracks and genre options
- User-uploaded music support
- Sound/music volume separation (independent sliders)
- Additional languages / localization
- Sharing saved match configurations via link
- Leaderboards or community features

---

## 8. User Stories & Use Cases

| ID | User Story | Acceptance Criteria | Priority |
|----|-----------|---------------------|----------|
| US-001 | As a user, I want to see an elite-styled homepage so that I feel motivated and understand what the app does | Homepage displays with dark gradient background, boxer foreground image, Many Rounds header with logo, menu icon, punch numbering reference section, and "Set up your match" CTA button | P0 |
| US-002 | As a user, I want to see the punch numbering system on the homepage so that I can learn the basics before starting | Homepage includes a visually styled section showing 1=Jab, 2=Cross, 3=Lead Hook, 4=Rear Hook, 5=Lead Uppercut, 6=Rear Uppercut | P0 |
| US-003 | As a user, I want to quickly start a training session with default settings so that I can begin training immediately | Tapping "Quick Match" from the menu instantly starts a session with 5 rounds, 2 min each, 1 min break, 10 sec warning bell, Beginner difficulty, default voice (male, encouraging), one-at-a-time display, moderate combo frequency, no background music | P0 |
| US-004 | As a user, I want to customize my match settings so that the session fits my training goals | Create a Match screen allows configuration of: rounds (1–12), round length (30s–5min), break length (30s–5min), warning bell timing, difficulty level, voice gender, voice tone, combo display mode, combo frequency, background music selection | P0 |
| US-005 | As a user, I want to reference the punch numbering system while configuring my match so that I can make informed difficulty choices | A popover/tooltip accessible from the Create a Match page displays the full punch numbering reference (1–6 with names) and defensive moves (Champ only) | P0 |
| US-006 | As a user, I want to hear and see punch numbers and names called out during rounds so that I can follow along while training | During active rounds, combos are displayed on screen (number + punch name) and spoken aloud via selected voice, at the configured frequency and difficulty. Voice callouts are always the loudest element in the audio mix | P0 |
| US-007 | As a user, I want to toggle between seeing one number at a time or the full combo with highlighting so that I can choose my preferred visual style | A toggle in setup switches between: (a) single number flash mode showing one large number + name and (b) full combo string with active number highlighted | P0 |
| US-008 | As a user, I want to hear a warning bell before the round ends so that I know the round is almost over | A classic boxing bell warning sound plays at the configured time before round end (default 10 seconds) | P0 |
| US-009 | As a user, I want to hear beeps in the final 5 seconds of my break so that I know the next round is about to start | Five beeps play, one per second, during the last 5 seconds of each break. The round start bell sounds immediately after the 5th beep | P0 |
| US-010 | As a user, I want to see an animated break screen between rounds so that I know how much rest time remains and what round is next | Break screen shows a large empty circle that fills bottom-to-top over the break duration, displays upcoming round number inside. When full, circle pulses 5 times. 5-second beep countdown plays during final 5 seconds. Round start bell sounds on completion | P0 |
| US-011 | As a user, I want to hear the round number announced before each round starts so that I know which round I'm entering | Audio announces "Round [X]" immediately before the round start bell | P0 |
| US-012 | As a user, I want to hear a traditional boxing match ending bell when all rounds are complete so that I get the satisfying finish of a real match | After the final round, a distinct multi-ring championship bell sequence plays | P0 |
| US-013 | As a user, I want to see a session complete screen with my stats so that I feel accomplished and can track my effort | Session complete screen displays: title belt graphic, "You knocked it out!" headline, total punches thrown (count), total defensive moves (count), estimated calories burned, "Go Again" button (restarts same config), "New Match" button (returns to Create a Match) | P0 |
| US-014 | As a user, I want to pause and resume or stop my session at any time so that I can take an unplanned break or end early | Pause button freezes all timers, audio, combo callouts, and background music. Resume continues from exact point. Stop button confirms with user then ends session and returns to home | P0 |
| US-015 | As a user, I want to select from multiple voice options so that I can personalize my training experience | Voice selection UI allows choosing gender (Male / Female) and tone (Encouraging / Stern / Gruff / Motivating) independently as mix-and-match, resulting in 8 possible combinations | P0 |
| US-016 | As a user, I want to choose my difficulty level so that combos match my skill level | Beginner: 2–3 punch combos, slower pace, mostly 1s and 2s, no defense. Up-and-Comer: 3–5 punch combos, moderate pace, all punches (1–6), some defense. Champ: 4–6 punch combos, fast pace, complex sequences, frequent defense calls (SLIP, ROLL, BLOCK, STEP BACK), shorter gaps | P0 |
| US-017 | As a user, I want to select background music for my training session so that I stay motivated and energized | Create a Match screen offers 3 royalty-free instrumental music options: Rock, Metal, Rap. Each can be previewed/sampled before starting. Option to select none. Music plays during active rounds | P0 |
| US-018 | As a user, I want the background music to lower during breaks and come back up when the round starts so that the audio experience feels natural | During breaks, music volume reduces to 80% of round volume. When the next round begins, music gradually fades back up to full round volume over 10 seconds | P0 |
| US-019 | As a user, I want the voice callouts to always be clearly audible over the background music so that I never miss a combo | Voice callouts are mixed at a higher priority than background music. Music does not duck but voice is always front and center in the audio mix | P0 |
| US-020 | As a user, I want to save my custom match configurations locally so that I can quickly reuse them | Save button on Create a Match stores config to localStorage. Optional name field; if blank, auto-generates name as "[# rounds], [round length], [break length]". No account required | P0 |
| US-021 | As a user, I want to manage my saved matches so that I can organize my training presets | Saved Matches screen lists all locally saved configs. Each entry shows name and key settings summary. Actions per entry: Start, Edit, Delete | P0 |
| US-022 | As a user, I want the app to keep my phone screen awake during a session so that the display doesn't turn off while I'm training | Wake Lock API is engaged when a session starts and released when the session ends, is paused, or is stopped | P0 |
| US-023 | As a user, I want to see a loading/countdown state before the round starts so that I'm prepared when the first combo is called | After pressing Start Match or after break completes, a brief audio preloading state is shown followed by a visible countdown (3-2-1 or similar) before the round begins | P0 |
| US-024 | As a user, I want to use the app in both portrait and landscape orientation on my phone so that I can prop my phone up however is convenient | Layout adapts responsively: portrait = stacked layout; landscape = side-by-side (timer on one side, combo display on the other) | P0 |
| US-025 | As a user, I want to customize how frequently combos are called during a round so that I can control the intensity | Combo frequency setting allows adjustment from constant (1–3 sec gaps only) to spaced out (includes 5–10 sec free work windows) | P0 |
| US-026 | As a user, I want to access Settings from the menu and from the Create a Match page so that I can adjust preferences conveniently | Settings link appears in hamburger menu and as a link/icon on the Create a Match page | P1 |
| US-027 | As a user, I want to access a tutorial explaining the punch numbering system so that I can learn what each number means | How to Use page displays the number system (1–6 with names), defensive move labels (Champ only), and brief descriptions of how to use the app | P1 |
| US-028 | As a user, I want the app to work offline after initial load so that I can train in gyms with poor connectivity | Service worker caches all assets, audio files, and app shell. Full functionality available offline | P1 |
| US-029 | As a user, I want to install the app to my home screen so that it feels like a native app | PWA manifest with app icon, splash screen, standalone display mode, no browser chrome | P1 |
| US-030 | As a user, I want to see an About page so that I can learn about the app and contact the creators | About page with app description, creator info, contact method, and version number | P2 |

---

## 9. Functional Requirements

| ID | Requirement | Description | Priority | Dependencies |
|----|------------|-------------|----------|--------------|
| FR-001 | Homepage | Full-viewport dark gradient background (dark to darker). Boxer image in foreground (centered or offset). "Many Rounds" header bar with placeholder logo (gloves + stopwatch) and hamburger menu icon. Large "Set up your match" CTA button styled in oxblood or gold accent. Punch numbering reference section below the fold displaying 1–6 with punch names in a visually styled layout consistent with the elite gym aesthetic | P0 | Logo asset, hero image |
| FR-002 | Navigation Menu | Hamburger menu slides out with options: Quick Match, Create a Match, Saved Matches, Settings, How to Use, About / Contact. Menu styled consistently with oxblood/beige palette. Active page highlighted | P0 | — |
| FR-003 | Quick Match | Instantly launches a training session with default settings: 5 rounds, 2 min rounds, 1 min breaks, 10 sec warning bell, Beginner difficulty, default voice (male, encouraging), one-at-a-time display, moderate combo frequency, no background music. Skips configuration screen entirely | P0 | Combo engine, audio system, timer |
| FR-004 | Create a Match | Configuration screen with the following controls organized in clear sections: **Timing Section:** Rounds (slider/stepper 1–12, default 5), Round Length (slider/stepper 30s–5min, default 2min), Break Length (slider/stepper 30s–5min, default 1min), Warning Bell (slider/stepper in seconds, default 10s). **Difficulty Section:** 3-option selector (Beginner / Up-and-Comer / Champ) with brief description of each level. Punch numbering reference popover accessible via info icon or "View punch guide" link. **Voice Section:** Voice Gender (Male / Female), Voice Tone (Encouraging / Stern / Gruff / Motivating). **Display Section:** Combo Display Mode toggle (one-at-a-time / full combo highlighted). **Intensity Section:** Combo Frequency slider (constant → spaced out) with descriptive labels. **Music Section:** Background music selector (None / Rock / Metal / Rap) with sample/preview play button for each track. **Actions:** "Start Match" prominent CTA button at bottom. "Save Match" button (saves to localStorage). Link to Settings page (gear icon or text link) | P0 | — |
| FR-005 | Punch Reference Popover | Accessible from Create a Match page via info icon or link. Displays in a modal or popover: Numbers 1–6 with punch names (1=Jab, 2=Cross, 3=Lead Hook, 4=Rear Hook, 5=Lead Uppercut, 6=Rear Uppercut). Defensive moves section (SLIP, ROLL, BLOCK, STEP BACK) with note that these appear at Champ level only. Dismissible by tapping outside or close button | P0 | — |
| FR-006 | Audio Preloading & Round Countdown | When a session is initiated (Start Match, Quick Match, or loaded from Saved Matches): all required audio files for the selected voice profile, bells, and music track are preloaded. A loading indicator is shown during preload. Once loaded, a visible countdown (3-2-1) is displayed before Round 1 begins. This countdown also appears after each break before the next round starts | P0 | Audio assets |
| FR-007 | Round Timer | Countdown timer displayed prominently during active rounds. Shows minutes:seconds remaining. Counts down in real time. Positioned at top in portrait mode, left side in landscape mode | P0 | — |
| FR-008 | Combo Engine | Generates contextually appropriate boxing combinations based on difficulty level. Randomized but following real boxing logic (no illogical sequences such as two same-hand punches in immediate succession without setup). Respects configured frequency and gap settings. Max 3 seconds between combos at highest frequency setting. Includes 5–10 second free work windows at lower frequency settings. Tracks total punches thrown and total defensive moves called for session complete stats | P0 | Combo library |
| FR-009 | Combo Library | Pre-built library of common boxing combinations categorized by difficulty. **Beginner:** 2–3 punch combos max using primarily 1 (Jab) and 2 (Cross). Examples: 1-2, 1-1-2, 1-2-1, 2-1-2. No defensive moves. **Up-and-Comer:** 3–5 punch combos max using all punches 1–6. Examples: 1-2-3, 1-2-3-2, 1-2-5-2, 1-6-3-2, 3-2-3, 1-2-3-4, 5-2-3-2, 1-1-2-3-2. No defensive moves. **Champ:** 4–6 punch combos max using all punches 1–6 plus defensive moves (SLIP, ROLL, BLOCK, STEP BACK). Examples: 1-2-SLIP-2-3, 1-2-3-ROLL-2-3, 1-2-BLOCK-5-6-3, SLIP-2-3-4-STEP BACK-1. Defensive moves count toward the 6-move max | P0 | — |
| FR-010 | Audio Callout System | Speaks each punch number and name (e.g., "One — Jab") and defensive move aloud using the selected voice profile. Timing syncs precisely with visual display. Voice callouts are always the loudest element in the audio mix regardless of background music. Announces round number ("Round [X]") before each round. Plays warning bell at configured time before round end. Plays round start bell at the beginning of each round. Plays 5 beeps (one per second) during final 5 seconds of each break. Plays final championship bell sequence after last round | P0 | Audio assets, voice files |
| FR-011 | Visual Combo Display — Single Mode | Displays one punch at a time: large number + punch name (e.g., "1 — JAB") centered on screen. Each number/name animates in (flash, scale, or slide) in sync with audio callout. Defensive moves display as text label (e.g., "SLIP") with distinct styling | P0 | — |
| FR-012 | Visual Combo Display — Full Combo Mode | Displays the entire combo string horizontally (e.g., "1 - 2 - 3 - 2"). Each number/move is highlighted, enlarged, or color-changed as it is called out in audio. Non-active numbers remain visible but dimmed. Defensive moves shown as text labels inline with numbers | P0 | — |
| FR-013 | Warning Bell | Classic boxing bell sound plays at the configured number of seconds before round end (default 10 seconds). Distinct sound from round start bell — can be a double ding or different tone | P0 | Audio asset |
| FR-014 | Round Start Bell | Classic boxing bell single ding plays at the start of each round, immediately following the 3-2-1 countdown and round announcement | P0 | Audio asset |
| FR-015 | Round Announcement | Audio announces "Round [number]" immediately before the round start bell. Plays after the break countdown beeps complete and before the 3-2-1 visual countdown | P0 | Audio asset |
| FR-016 | Break Countdown Beeps | During the final 5 seconds of each break, a distinct beep sound plays once per second (5 beeps total). Beeps are clearly audible over the lowered background music. The 5th beep transitions into the round announcement and start bell sequence | P0 | Audio asset |
| FR-017 | Final Championship Bell | Traditional boxing match ending bell sequence (multiple rings, celebratory) plays after the last round timer reaches zero. Distinct from single round start bell. Transitions to session complete screen | P0 | Audio asset |
| FR-018 | Break Screen Animation | Between rounds: large empty circle displayed centered on screen. Circle fills from bottom to top over the duration of the break using a smooth animation. Upcoming round number displayed large inside the circle. Break time remaining countdown displayed below the circle. When circle is full, it pulses 5 times visually. During final 5 seconds, beep countdown plays (FR-016). After 5th pulse/beep, transitions to round announcement → countdown → round start | P0 | — |
| FR-019 | Background Music Playback | Three royalty-free instrumental tracks available: Rock, Metal, Rap. Music begins playing when Round 1 starts. Music plays continuously during active rounds. During breaks, music volume reduces to 80% of round volume immediately when break begins. When next round starts, music gradually fades back up to full volume over 10 seconds. Music pauses when session is paused. Music stops when session is stopped or completed. Music does not duck during voice callouts — voice is simply mixed louder | P0 | Music audio assets |
| FR-020 | Background Music Preview | On Create a Match screen, each music option (Rock, Metal, Rap) has a play/preview button. Tapping preview plays a 10–15 second sample of the track. Tapping again or tapping a different preview stops the current sample. Only one preview plays at a time | P0 | Music audio assets |
| FR-021 | Ad Placeholder Banner | Small banner area at the bottom of the break screen reserved for future ad placement. Displays empty or branded Many Rounds placeholder at launch. Does not interfere with break animation or countdown | P2 | — |
| FR-022 | Pause / Resume | Pause button visible during active rounds and breaks. Pauses all timers, audio callouts, background music, and combo generation simultaneously. Screen displays "PAUSED" overlay with resume and stop options. Resume button restarts everything from exact paused state including music position | P0 | — |
| FR-023 | Stop Session | Stop button visible during active session (and on pause screen). Confirms with user via modal ("End session early?"). If confirmed, stops all audio and timers, releases wake lock, and returns to session complete screen with stats accumulated up to that point | P0 | — |
| FR-024 | Session Complete Screen | Displays after final round ends (or after early stop). **Visual:** Title belt graphic centered at top. **Headline:** "You knocked it out!" in bold display font. **Stats:** Total punches thrown (count of all punch callouts across all rounds), Total defensive moves (count of all defensive callouts — Champ only, shows 0 for other levels), Estimated calories burned (calculated based on round duration × difficulty multiplier — see Appendix for formula). **Buttons:** "Go Again" — restarts the same match configuration immediately (with preload/countdown). "New Match" — navigates to Create a Match screen. Background music is stopped. Championship bell has already played before this screen appears | P0 | — |
| FR-025 | Session Statistics Tracking | Throughout the session, the app tracks in memory: running count of each punch called (1–6), running count of each defensive move called (SLIP, ROLL, BLOCK, STEP BACK), total round time elapsed, difficulty level. These values are used to populate the session complete screen | P0 | — |
| FR-026 | Save Match Configuration | "Save" button on Create a Match screen. Saves all current configuration fields as a JSON object to localStorage. Optional name field presented in a small modal/inline input when save is tapped. If name is left blank, auto-generates: "[X] rounds, [Y] min rounds, [Z] min break". Confirmation toast/message shown on successful save | P0 | — |
| FR-027 | Saved Matches Screen | Lists all locally saved match configurations. Each entry displayed as a card showing: name, number of rounds, round length, break length, difficulty level, music selection. Actions per card: Start (launches session with that config), Edit (opens Create a Match pre-filled with that config), Delete (confirms then removes from localStorage). Empty state message shown if no matches saved: "No saved matches yet. Create your first match!" | P0 | FR-026 |
| FR-028 | Settings Page | Accessible from hamburger menu and from Create a Match page. Contains: Voice gender selection (Male / Female), Voice tone selection (Encouraging / Stern / Gruff / Motivating), Combo display mode default (one-at-a-time / full combo highlighted), Volume control (single slider controlling all audio — voice, bells, and music at same level). Settings saved to localStorage and persist across sessions. Settings on this page serve as defaults that can be overridden per match on the Create a Match screen | P1 | — |
| FR-029 | How to Use / Tutorial Page | Static content page with elite gym styling. Sections: **The Number System** — displays 1–6 with punch names, brief description of each punch, and optional illustration/icon. **Defensive Moves** — SLIP, ROLL, BLOCK, STEP BACK with descriptions. Note that these appear at Champ level only. **How to Set Up a Match** — step-by-step walkthrough of the Create a Match screen. **Difficulty Levels** — description of Beginner, Up-and-Comer, and Champ with what to expect at each level. **Tips** — general tips for getting the most out of training with the app | P1 | — |
| FR-030 | About / Contact Page | Static content page with: App description and mission, Creator/team info, Contact form or email link, Version number, Credits for audio assets and imagery | P2 | — |
| FR-031 | Wake Lock | When a training session starts (first round countdown begins), the app requests a Wake Lock via the Wake Lock API to prevent the screen from dimming or sleeping. Wake Lock is released when: session completes (session complete screen shown), session is stopped by user, app is closed/navigated away. If Wake Lock API is not supported by the browser, the app continues to function normally without it (graceful degradation) | P0 | — |
| FR-032 | PWA — Offline Support | Service worker registered on first visit. Caches: app shell (HTML, CSS, JS), all UI assets and images, bell and beep sound effects, voice audio files (lazy-loaded per selected profile), music tracks (lazy-loaded per selected track). After initial cache, full app functionality works without internet connection. Cache update strategy: stale-while-revalidate for app shell, cache-first for audio assets | P1 | — |
| FR-033 | PWA — Installable | Web App Manifest includes: app name ("Many Rounds"), short name, description, theme color (oxblood), background color (dark), display mode (standalone), icons (placeholder logo at required sizes), splash screen configuration. Browser install prompt is shown when criteria are met. App launches without browser chrome when installed | P1 | Logo asset |

---

## 10. Non-Functional Requirements

### Performance

- App shell loads in under 2 seconds on a 4G connection
- Audio callouts play with less than 100ms latency from visual display
- Timer accuracy within ±0.5 seconds over a 5-minute round
- Combo generation is instantaneous (combos pre-generated per round at session start)
- Background music crossfade/volume transitions are smooth with no audible pops or clicks
- Break screen circle fill animation runs at 60fps on mid-range mobile devices
- Music preview on Create a Match screen begins playback within 500ms of tap

### Scalability

- Fully client-side application — no server scalability concerns
- localStorage usage should remain under 1MB total (match configs are small JSON objects, ~0.5KB each)
- Combo library should support easy addition of new combos without code restructuring (data-driven, not hard-coded logic)

### Reliability / Availability

- PWA functions fully offline after initial load and asset caching
- localStorage data persists across browser sessions unless user clears browser data
- Graceful handling of localStorage being full (show user-friendly error, suggest deleting old matches)
- If Wake Lock API is unavailable, app functions normally without it
- If Web Audio API encounters an error, app attempts fallback to HTML5 Audio elements

### Security

- HTTPS required (GitHub Pages provides this by default)
- No sensitive data collected or stored
- localStorage contains only match configuration JSON — no PII
- No external API calls (fully client-side)
- Content Security Policy headers recommended to prevent XSS

### Privacy & Compliance

- No user accounts = no PII collected
- Analytics (if implemented) should be privacy-friendly (no cookie consent required if using cookieless analytics like Plausible, or include consent banner if using GA4)
- Privacy policy page recommended but not legally critical for internal POC
- No data leaves the device (all localStorage)

### Accessibility

- WCAG 2.1 AA compliance target
- High contrast verified between oxblood/beige palette combinations (minimum 4.5:1 for normal text, 3:1 for large text)
- All interactive elements have minimum 44x44px touch targets for mobile use during training
- Screen reader support for non-active-session pages (homepage, config, saved matches, tutorial, about)
- Active session screens prioritize visual clarity over screen reader optimization (training context)
- All images have alt text
- Focus management for modal/popover elements (punch reference popover, pause overlay, stop confirmation)
- Keyboard navigation support for desktop use

### Localization / Internationalization

- English only for V1
- All user-facing strings stored in a centralized location (not scattered through code) to facilitate future localization
- No hard-coded text in images or audio (except voice callouts which are language-specific by nature)

### Browser / Device / Platform Support

- **Primary (must work perfectly):**
  - Mobile Safari iOS 15+
  - Chrome Mobile Android 10+
  - Both portrait and landscape orientations
- **Secondary (should work well):**
  - Chrome Desktop (Windows, Mac, Linux)
  - Firefox Desktop
  - Safari Desktop (Mac)
  - Edge Desktop
- **Minimum screen width:** 320px (iPhone SE)
- **Landscape minimum height:** 320px
- **Known limitation:** PWA install not fully supported on Firefox Desktop — acceptable for POC

### Data Retention & Archival

- All data stored in localStorage on user's device
- Data persists until user manually clears browser data or deletes matches through the app
- No server-side retention concerns
- App should handle gracefully if localStorage is cleared externally (show empty saved matches, reset settings to defaults)

# Many Rounds — PRD v1.1
## Sections 11–14

---

## 11. User Experience (UX) Requirements

### Design System

**Framework:** Bootstrap 5 (latest stable) with custom theme overrides

**Color Palette:**

| Token | Color | Hex (Suggested) | Usage |
|-------|-------|-----------------|-------|
| Primary | Oxblood | #4A0E0E | Buttons, active states, accents, key UI elements |
| Primary Dark | Deep Oxblood | #2D0808 | Hover states, pressed states, dark accents |
| Primary Light | Warm Oxblood | #6B1A1A | Secondary buttons, highlights |
| Secondary | Beige | #F5F0E8 | Text on dark backgrounds, card backgrounds, secondary surfaces |
| Secondary Dark | Warm Tan | #D4C9B8 | Borders, dividers, muted text on light backgrounds |
| Accent | Gold | #C9A84C | CTAs, important highlights, title belt, star elements |
| Dark | Near Black | #1A1A1A | Primary backgrounds, gradients |
| Darker | True Dark | #0D0D0D | Deepest gradient stops, overlays |
| Surface | Dark Gray | #2A2A2A | Cards, input backgrounds, elevated surfaces on dark bg |
| Text Primary | Off White | #F5F0E8 | Primary text on dark backgrounds (same as beige) |
| Text Secondary | Muted Beige | #A89F91 | Secondary/helper text on dark backgrounds |
| Success | Green | #4CAF50 | Session complete, positive feedback |
| Danger | Red | #E53935 | Stop button, delete confirmation, errors |
| Warning | Amber | #FFC107 | Warning bell indicator |

**Typography:**

- **Display / Headers:** Elite boxing gym aesthetic — bold, condensed, impactful. Recommended: Bebas Neue or Oswald (Google Fonts, free). Used for: "Many Rounds" wordmark, round numbers, combo display numbers, "You knocked it out!", section headers
- **Body / UI:** Clean, modern sans-serif. Recommended: Inter or Roboto (Google Fonts, free). Used for: configuration labels, descriptions, tutorial content, button text, helper text
- **Monospace / Timer:** A clean monospace or tabular-figure font for the countdown timer to prevent layout shift as digits change. Recommended: Roboto Mono or JetBrains Mono

**Imagery:**

- Dark, dramatic, high-contrast photography
- Boxer silhouette or action shot for homepage foreground (royalty-free)
- Minimal use of photography beyond homepage — UI is primarily typographic and iconographic

**Iconography:**

- Bootstrap Icons (included with Bootstrap) or Phosphor Icons
- Consistent line weight and style throughout
- Key icons needed: menu (hamburger), play, pause, stop, settings (gear), save, delete, edit, info/help, music note, volume, close/X, checkmark

**Border Radius:**

- Buttons: 8px (slightly rounded, not pill-shaped)
- Cards: 12px
- Input fields: 8px
- Modals/popovers: 16px

**Spacing:**

- Follow Bootstrap's spacing scale (0.25rem increments)
- Generous padding on all interactive elements for gloved/sweaty finger tapping

**Shadows:**

- Subtle elevation shadows on cards and modals
- Dark theme means shadows are less visible — use subtle lighter glows or border highlights for elevation instead

### Logo Placeholder

- **Design:** Pair of boxing gloves punching outward — left glove angled to upper-left, right glove angled to upper-right — with a stopwatch centered between and slightly below the gloves
- **Style:** Monochrome (beige on dark) or oxblood/beige/gold. Clean vector style with minimal detail. Should read clearly at 32x32px (favicon) up to 512x512px (PWA icon)
- **Placement:** Header bar, left-aligned, next to "Many Rounds" text in display font
- **Also used as:** PWA icon (multiple sizes), splash screen center element, favicon, session complete screen watermark (optional)

### Key Screens

#### Screen 1: Homepage

- Full-viewport dark gradient background (radial or top-to-bottom, #0D0D0D → #1A1A1A → #2A2A2A)
- Boxer image in foreground — high contrast, dramatic lighting, centered or slightly offset
- Top: Fixed header bar with logo + "Many Rounds" in display font (left) and hamburger menu icon (right). Header has slight dark transparent background for readability
- Center: Large "Set up your match" CTA button. Oxblood background with beige text, or gold background with dark text. Prominent, impossible to miss
- Below fold: Punch numbering reference section. Dark card or section with heading "Know Your Numbers." Displays 1–6 in a grid or list, each with the number in large display font and punch name beside it. Styled to feel like a gym wall poster
- Overall feel: Walking into an elite boxing gym at night. Dark, moody, powerful

#### Screen 2: Navigation Menu

- Slides in from the right (or left) as an overlay panel
- Dark surface background (#2A2A2A) with beige text
- Menu items stacked vertically with generous tap targets (minimum 48px height each)
- Items: Quick Match, Create a Match, Saved Matches, Settings, How to Use, About / Contact
- Close button (X) at top of menu panel
- Subtle oxblood accent line or highlight on active/hovered item

#### Screen 3: Create a Match

- Dark background consistent with app theme
- Sections grouped in cards or visually separated areas
- Each section has a clear heading in display font
- **Timing:** Sliders or stepper inputs styled in oxblood/beige. Current value displayed prominently. Slider tracks in dark gray, filled portion in oxblood, thumb in beige/gold
- **Difficulty:** Three large selectable cards or buttons (Beginner / Up-and-Comer / Champ). Selected state highlighted in oxblood with gold border. Brief description under each (e.g., "Simple combos, slower pace" / "Mixed combos, moderate pace" / "Complex combos with defense, fast pace")
- **Punch Reference:** Info icon or "View punch guide" text link. Opens popover/modal with the numbering reference
- **Voice:** Two rows — Gender (Male / Female toggle or buttons) and Tone (4 option buttons: Encouraging / Stern / Gruff / Motivating). Selected states highlighted
- **Display:** Toggle switch for combo display mode with labels
- **Intensity:** Slider for combo frequency with labels at each end ("Constant" ↔ "Spaced Out")
- **Music:** Three music option cards (Rock / Metal / Rap) each with a small play/preview icon button. Selected state highlighted. "None" option also available. Currently playing preview shows a small animated indicator
- **Settings Link:** Gear icon with "Settings" text, positioned near top or in a consistent utility area
- **Actions at bottom:** "Start Match" — large, prominent CTA (gold or oxblood). "Save Match" — secondary styled button beside or below Start

#### Screen 4: Active Round — Portrait

- **Top zone:** Round indicator ("ROUND 3 OF 10") in smaller text. Countdown timer in very large monospace display font (e.g., "1:47"). Timer text in beige, background dark
- **Center zone (majority of screen):** Combo display area. In single mode: one large number + punch name centered, animating with each callout. In full combo mode: horizontal string of numbers with active one highlighted/enlarged. Defensive moves (Champ) styled distinctly — different color (gold?) or with a shield/block icon
- **Bottom zone:** Pause button (large, easily tappable) and Stop button (smaller, secondary). Minimal other UI — this screen is about focus
- **Background:** Solid dark (#1A1A1A) — no distracting imagery during active training

#### Screen 5: Active Round — Landscape

- **Left half:** Round indicator at top-left. Large countdown timer below it, vertically centered in the left half
- **Right half:** Combo display area filling the right half. Same single/full combo modes as portrait but with more horizontal space
- **Bottom edge:** Pause and Stop buttons, horizontally arranged, accessible but not dominant
- **Orientation transition:** Smooth CSS transition, no interruption to timer or audio

#### Screen 6: Break Screen

- **Center:** Large empty circle (beige or oxblood outline on dark background). Circle fills from bottom to top with oxblood or gold fill color, animated smoothly over the break duration. Upcoming round number displayed large inside the circle in display font (e.g., "4"). Number scales up slightly as circle fills
- **Below circle:** Break time remaining countdown in medium text (e.g., "0:34")
- **Top:** "REST" or "BREAK" label
- **Pulse animation:** When circle is completely full, it pulses (scale up/down subtly) 5 times over ~3 seconds. Coincides with the 5-second beep countdown
- **Bottom:** Small ad placeholder banner — thin strip, branded with Many Rounds logo or "Ad space" placeholder text. Does not overlap with circle or countdown
- **Background music** at 80% volume during this screen

#### Screen 7: Session Complete

- **Background:** Dark with subtle celebratory feel — perhaps a very subtle gold particle effect or radial gold gradient behind the belt
- **Top center:** Title belt graphic. Gold/metallic styled championship belt illustration. Prominent but not overwhelming. Placeholder can be a simple vector belt shape with "CHAMPION" or Many Rounds logo on the center plate
- **Headline:** "You knocked it out!" in large display font, beige or gold text
- **Stats section:** Clean card or section below headline displaying:
  - 🥊 Total Punches Thrown: [number]
  - 🛡️ Total Defensive Moves: [number] (shows 0 if Beginner/Up-and-Comer)
  - 🔥 Est. Calories Burned: [number]
  - Stats displayed in a visually appealing layout — could be three columns or stacked cards with icons
- **Buttons:**
  - "Go Again" — primary CTA (oxblood or gold). Restarts the same match configuration with preload/countdown
  - "New Match" — secondary button. Navigates to Create a Match screen
  - Buttons stacked vertically on mobile with generous spacing
- **No background music** on this screen. Championship bell has already played

#### Screen 8: Saved Matches

- **Header:** "Saved Matches" in display font
- **List:** Cards for each saved match configuration, stacked vertically
- **Each card shows:**
  - Match name (or auto-generated name) in bold
  - Key details: "5 rounds · 2 min · 1 min break · Beginner · Rock"
  - Three action buttons/icons: ▶ Start, ✏️ Edit, 🗑️ Delete
- **Delete:** Confirmation modal before removing ("Delete this match?")
- **Edit:** Opens Create a Match pre-filled with that configuration. Save overwrites the existing entry
- **Empty state:** Centered message: "No saved matches yet." with a CTA button: "Create your first match" linking to Create a Match
- **Scrollable** if many matches saved

#### Screen 9: Settings

- Clean form layout consistent with Create a Match styling
- **Voice Defaults:** Gender toggle + Tone selector (same UI as Create a Match)
- **Display Default:** Combo display mode toggle
- **Volume:** Single slider (0–100%) controlling master volume for all audio (voice, bells, music all at same relative level)
- **Save/Apply:** Settings auto-save to localStorage on change (no explicit save button needed). Toast confirmation: "Settings saved"
- Note at top: "These are your default settings. You can override them for each match."

#### Screen 10: How to Use

- Styled as a long-scroll content page with the elite gym aesthetic
- Sections with display font headings and body font content
- Punch numbering displayed in a visually rich grid (similar to homepage section but more detailed with descriptions)
- Defensive moves section with descriptions
- Step-by-step match setup walkthrough with small screenshots or illustrated icons
- Difficulty level descriptions
- Tips section

#### Screen 11: About / Contact

- Simple content page
- App description, mission/vision
- Creator info
- Contact email or simple contact form
- Version number
- Audio/image credits and licensing info

#### Screen 12: Pause Overlay

- Semi-transparent dark overlay covering the entire active session screen
- "PAUSED" in large display font, centered
- Two buttons centered below: "Resume" (primary) and "End Session" (secondary/danger)
- All background activity frozen — timer stopped, no audio, no combo display changes

#### Screen 13: Stop Confirmation Modal

- Standard modal overlay
- "End session early?" heading
- "Your progress so far will be shown on the results screen." body text
- Two buttons: "Keep Going" (primary, returns to session) and "End Session" (danger/secondary, goes to session complete with partial stats)

### User Flows

#### Flow 1: Quick Match
Homepage → Menu → Quick Match → Audio Preload → 3-2-1 Countdown
→ Round 1 (combos + timer + music) → Warning Bell → Round End
→ Break Screen (circle fill + music at 80%) → 5-Second Beeps
→ Round Announcement → 3-2-1 Countdown → Round 2 → ...
→ Final Round End → Championship Bell → Session Complete Screen
→ "Go Again" (restart) OR "New Match" (configure)
#### Flow 2: Create & Start a Match
Homepage → "Set up your match" → Create a Match Screen
→ Configure all settings → Preview music (optional)
→ "Start Match" → Audio Preload → 3-2-1 Countdown
→ Round 1 → ... → Session Complete Screen

#### Flow 3: Save a Match
Create a Match → Configure settings → "Save Match"
→ Name input modal (optional) → Confirm → Toast: "Match saved!"
→ Match appears in Saved Matches

#### Flow 4: Load & Start a Saved Match
Menu → Saved Matches → Select match card → "Start"
→ Audio Preload → 3-2-1 Countdown → Round 1 → ... → Session Complete

#### Flow 5: Edit a Saved Match
Menu → Saved Matches → Select match card → "Edit"
→ Create a Match (pre-filled) → Modify settings
→ "Save Match" → Overwrites existing → Toast: "Match updated!"
#### Flow 6: Pause & Resume
Active Round → Tap Pause → Pause Overlay (all frozen)
→ Tap Resume → Session continues from exact point

#### Flow 7: Stop Early
Active Round → Tap Stop (or Pause → End Session)
→ Stop Confirmation Modal → "End Session"
→ Session Complete Screen (partial stats)
#### Flow 8: First-Time User
Homepage → Read punch numbering section → "Set up your match"
→ Create a Match → Tap punch reference popover → Review numbers
→ Select Beginner → Configure → Start Match
---

## 12. Technical Architecture & Constraints

### System Architecture Overview
┌─────────────────────────────────────────────────────┐
│ CLIENT (Browser) │
│ │
│ ┌─────────────┐ ┌──────────────┐ ┌─────────────┐ │
│ │ UI Layer │ │ App Logic │ │ Storage │ │
│ │ (Bootstrap │ │ (Combo │ │ (localStorage│ │
│ │ + Custom │ │ Engine, │ │ for saved │ │
│ │ CSS/HTML) │ │ Timer, │ │ matches & │ │
│ │ │ │ Stats) │ │ settings) │ │
│ └──────┬──────┘ └──────┬───────┘ └──────┬──────┘ │
│ │ │ │ │
│ ┌──────┴────────────────┴──────────────────┴──────┐ │
│ │ Audio Engine │ │
│ │ (Web Audio API — voice, bells, beeps, music) │ │
│ │ ┌────────┐ ┌────────┐ ┌────────┐ ┌──────────┐ │ │
│ │ │ Voice │ │ Bells │ │ Beeps │ │ Music │ │ │
│ │ │ Node │ │ Node │ │ Node │ │ Node │ │ │
│ │ │(Gain: │ │(Gain: │ │(Gain: │ │(Gain: │ │ │
│ │ │ HIGH) │ │ MATCH) │ │ MATCH) │ │ LOWER) │ │ │
│ │ └───┬────┘ └───┬────┘ └───┬────┘ └────┬─────┘ │ │
│ │ └──────────┴─────────┴────────────┘ │ │
│ │ │ │ │
│ │ Master Gain Node │ │
│ │ (User volume control) │ │
│ │ │ │ │
│ │ Audio Destination │ │
│ │ (Speakers) │ │
│ └──────────────────────────────────────────────────┘ │
│ │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Service Worker │ │
│ │ (Caching: app shell, audio, images, fonts) │ │
│ └──────────────────────────────────────────────────┘ │
│ │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Web App Manifest │ │
│ │ (PWA install, icons, splash, theme) │ │
│ └──────────────────────────────────────────────────┘ │
│ │
│ ┌──────────────────────────────────────────────────┐ │
│ │ Wake Lock API │ │
│ │ (Prevent screen sleep during sessions) │ │
│ └──────────────────────────────────────────────────┘ │
│ │
└─────────────────────────────────────────────────────────┘

     No Backend / No Server / No Database
     All client-side. Hosted as static files.

    ### Technology Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Markup** | HTML5 | Semantic HTML, PWA meta tags |
| **Styling** | CSS3 + Bootstrap 5 | Custom Bootstrap theme with oxblood/beige variables. CSS custom properties for theming. CSS animations for break circle, combo display, pulse effects |
| **JavaScript** | Vanilla JS (ES6+) or lightweight framework | No heavy frameworks required. Vanilla JS recommended for POC simplicity and performance. If a framework is preferred: Vue.js 3 (lightweight) or Alpine.js (minimal) |
| **Audio** | Web Audio API | Primary audio engine for precise timing, gain control, and mixing. AudioContext with multiple GainNodes for independent volume control of voice, bells, beeps, and music. Fallback to HTML5 Audio elements if needed |

```text
AudioContext
├── voiceGainNode (gain: 1.0 — always loudest)
│   └── Voice AudioBufferSourceNode (punch callouts, round announcements)
├── bellGainNode (gain: 0.8 — matches master)
│   └── Bell AudioBufferSourceNode (start bell, warning bell, final bell)
├── beepGainNode (gain: 0.8 — matches master)
│   └── Beep AudioBufferSourceNode (break countdown beeps)
├── musicGainNode (gain: 0.6 during rounds, 0.48 during breaks)
│   └── Music AudioBufferSourceNode (background track)
└── masterGainNode (gain: user volume setting 0.0–1.0)
    └── AudioContext.destination (speakers)
```

**Voice Priority Mixing:**

- Voice callouts are routed through a gain node set higher than music
- Music gain is set lower than voice by default (e.g., voice at 1.0, music at 0.6)
- This ensures voice is always "front and center" without needing dynamic ducking
- Bells and beeps match the master volume level
- All nodes feed into a master gain node controlled by the user's volume slider

**Music Volume Behavior:**

- During active rounds: `musicGainNode.gain = 0.6` (relative to master)
- When break begins: `musicGainNode.gain` immediately set to `0.6 × 0.8 = 0.48` (80% of round volume)
- When next round begins: `musicGainNode.gain` linearly ramps from `0.48` back to `0.6` over 10 seconds using `linearRampToValueAtTime()`

**iOS Safari Audio Considerations:**

- AudioContext must be created and resumed inside a user gesture event handler (tap/click)
- The "Start Match" button tap, Quick Match tap, or any session-initiating action will create/resume the AudioContext
- All audio buffers are pre-decoded during the preload phase before the 3-2-1 countdown
- A silent buffer is played on first user interaction to "unlock" the AudioContext on iOS

### Audio Assets Required

**Voice Callouts (8 profiles × ~22 callouts = ~176 files):**

| Profile | Gender | Tone | Files Needed |
|---------|--------|------|-------------|
| Profile 1 | Male | Encouraging | 22 |
| Profile 2 | Male | Stern | 22 |
| Profile 3 | Male | Gruff | 22 |
| Profile 4 | Male | Motivating | 22 |
| Profile 5 | Female | Encouraging | 22 |
| Profile 6 | Female | Stern | 22 |
| Profile 7 | Female | Gruff | 22 |
| Profile 8 | Female | Motivating | 22 |

**Per profile, 22 callouts:**

- "One — Jab"
- "Two — Cross"
- "Three — Lead Hook"
- "Four — Rear Hook"
- "Five — Lead Uppercut"
- "Six — Rear Uppercut"
- "Slip"
- "Roll"
- "Block"
- "Step Back"
- "Round One" through "Round Twelve" (12 files)

**Format:** MP3 (broad compatibility) or OGG (better quality/size ratio) or both for cross-browser support. Each file ~1–3 seconds, ~20–50KB each.

**Bell & Beep Sounds (royalty-free):**

| Sound | Description | Estimated Duration | Files |
|-------|------------|-------------------|-------|
| Round Start Bell | Single classic boxing bell ding | ~1.5 seconds | 1 |
| Warning Bell | Double ding or distinct tone from start bell | ~2 seconds | 1 |
| Final Championship Bell | Multi-ring celebratory bell sequence | ~4–6 seconds | 1 |
| Break Countdown Beep | Short, sharp beep | ~0.3 seconds | 1 |

**Recommended sources for royalty-free bells:**

- Freesound.org (CC0 or CC-BY)
- Pixabay Sound Effects (free commercial use)
- Mixkit.co (free sound effects)
- Zapsplat.com (free with attribution)

**Background Music Tracks (3 tracks, royalty-free, instrumental only):**

| Track | Genre | Mood/Energy | Estimated Duration |
|-------|-------|------------|-------------------|
| Track 1 | Rock | High energy, driving rhythm, aggressive guitars | 5–10 minutes (loopable) |
| Track 2 | Metal | Intense, heavy, fast tempo, powerful | 5–10 minutes (loopable) |
| Track 3 | Rap/Hip-Hop | Hard-hitting beats, bass-heavy, instrumental only | 5–10 minutes (loopable) |

**Music requirements:**

- Must be long enough to cover a full 12-round session (~60+ minutes) OR must loop seamlessly
- Recommendation: Use tracks that are 3–5 minutes and loop them seamlessly using Web Audio API's `AudioBufferSourceNode.loop = true`
- **Format:** MP3 (compressed, ~3–5MB per track for a 3–5 minute file)

**Total estimated audio asset size:**

- Voice files: ~176 files × ~35KB avg = ~6MB total (but only ~22 files loaded per session based on selected profile = ~770KB)
- Bell/beep sounds: ~4 files × ~50KB avg = ~200KB
- Music tracks: ~3 files × ~4MB avg = ~12MB total (but only 1 loaded per session = ~4MB)
- **Per session load: ~5MB** (1 voice profile + bells/beeps + 1 music track)
- **Total app size with all assets: ~18MB** (cached progressively)

### Combo Engine Architecture

```javascript
ComboEngine {
  difficulty: 'beginner' | 'up-and-comer' | 'champ'
  frequency: number (1-10 scale, 1=constant, 10=spaced out)
  comboLibrary: {
    beginner: [...],
    'up-and-comer': [...],
    champ: [...]
  }
  
  // Pre-generates a sequence of combos for an entire round
  generateRoundSequence(roundDurationSeconds) → [
    { combo: ['1', '2', '3'], timings: [0ms, 400ms, 800ms], startTime: 2.0s },
    { combo: ['1', '1', '2'], timings: [0ms, 350ms, 700ms], startTime: 5.5s },
    ...
  ]
  
  // Timing between combos based on frequency setting
  getGapDuration() → milliseconds (1000-3000ms at constant, up to 10000ms at spaced)
  
  // Timing between punches within a combo based on difficulty
  getPunchInterval() → milliseconds
    beginner: 600-800ms between punches
    up-and-comer: 400-600ms between punches  
    champ: 250-450ms between punches
  
  // Stats tracking
  stats: {
    totalPunches: 0,
    totalDefensiveMoves: 0,
    punchBreakdown: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 },
    defenseBreakdown: { 'slip': 0, 'roll': 0, 'block': 0, 'stepBack': 0 }
  }
}
```

Calorie Estimation Formula
Calories = MET × Weight(kg) × Duration(hours)

Assumptions (since we don't collect user weight):
- Assume average weight: 70kg (154 lbs)
- MET values by difficulty:
  - Beginner: 5.5 MET (light shadowboxing)
  - Up-and-Comer: 7.8 MET (moderate boxing training)
  - Champ: 9.5 MET (vigorous boxing training)

Formula:
caloriesBurned = MET × 70 × (totalActiveRoundMinutes / 60)

Example: 5 rounds × 2 min = 10 min active time at Beginner
= 5.5 × 70 × (10/60) = 64 calories

Note: Break time is NOT included in calorie calculation.
Display as "Est. ~64 cal" (with tilde to indicate estimate)
This formula and the assumed weight should be documented in the How to Use page or as a tooltip on the session complete screen.

File Structure (Recommended)
many-rounds/
├── index.html                    # Main SPA entry point
├── manifest.json                 # PWA manifest
├── sw.js                         # Service worker
├── favicon.ico                   # Favicon
│
├── css/
│   ├── bootstrap-custom.css      # Bootstrap with custom theme variables
│   ├── styles.css                # Custom app styles
│   └── animations.css            # Keyframe animations (circle fill, pulse, combo flash)
│
├── js/
│   ├── app.js                    # Main app initialization, routing, state management
│   ├── timer.js                  # Round timer and break timer logic
│   ├── combo-engine.js           # Combo generation, difficulty logic, stats tracking
│   ├── audio-engine.js           # Web Audio API setup, playback, mixing, volume control
│   ├── storage.js                # localStorage read/write for matches and settings
│   ├── ui.js                     # DOM manipulation, screen rendering, animations
│   └── wake-lock.js              # Wake Lock API wrapper
│
├── audio/
│   ├── voices/
│   │   ├── male-encouraging/
│   │   │   ├── 1-jab.mp3
│   │   │   ├── 2-cross.mp3
│   │   │   ├── ...
│   │   │   ├── slip.mp3
│   │   │   ├── round-1.mp3
│   │   │   └── round-12.mp3
│   │   ├── male-stern/
│   │   ├── male-gruff/
│   │   ├── male-motivating/
│   │   ├── female-encouraging/
│   │   ├── female-stern/
│   │   ├── female-gruff/
│   │   └── female-motivating/
│   ├── bells/
│   │   ├── round-start.mp3
│   │   ├── warning.mp3
│   │   ├── final-bell.mp3
│   │   └── beep.mp3
│   └── music/
│       ├── rock.mp3
│       ├── metal.mp3
│       └── rap.mp3
│
├── img/
│   ├── logo-placeholder.svg      # Gloves + stopwatch logo
│   ├── hero-boxer.jpg            # Homepage foreground image
│   ├── title-belt.svg            # Session complete belt graphic
│   └── icons/
│       ├── icon-192.png          # PWA icon
│       ├── icon-512.png          # PWA icon
│       └── apple-touch-icon.png  # iOS icon
│
└── README.md                     # Project documentation
Technical Constraints / Limitations
iOS Safari Audio: AudioContext requires user gesture to start. AudioContext requires user gesture to start. First tap must initialize audio. Silent buffer trick needed to unlock audio on iOS
localStorage Limits: ~5–10MB depending on browser. Each saved match is ~0.5KB. Supports thousands of saves. Must handle quota exceeded errors gracefully
Service Worker Audio Caching: ~18MB total audio assets. Cache only the selected voice profile and music track on first use (lazy caching). Don't pre-cache all 176 voice files
Web Audio API Browser Support: Supported in all modern browsers. Older browsers may need AudioContext prefix (webkitAudioContext for older Safari)
Wake Lock API Support: Supported in Chrome 84+, Edge 84+, Safari 16.4+. Not supported in Firefox. Must feature-detect and degrade gracefully
CSS Animation Performance: Break screen circle fill animation should use transform and opacity properties for GPU acceleration. Avoid animating width, height, or clip-path for performance
GitHub Pages Limitations: Static files only, no server-side processing, no custom headers (CSP must be set via meta tags), single-page app routing requires 404.html redirect trick or hash-based routing
Audio File Size vs. Quality: MP3 at 128kbps provides good quality at reasonable file size. Voice files can be 96kbps (speech doesn't need high bitrate). Music should be 128–192kbps for acceptable quality
Migration Requirements
N/A — greenfield project
13. Analytics & Instrumentation
Recommended Approach for POC
Since this is an internal POC with no backend, analytics should be lightweight and privacy-friendly. Two options:

Option A (Recommended for POC): Console Logging + In-App Stats

Log key events to the browser console during development and testing
Session complete screen already displays per-session stats (punches, defense, calories)
No external analytics service needed
Can be upgraded to a real analytics provider when the product goes public
Option B (If stakeholder reporting is needed): Plausible Analytics or Simple Analytics

Privacy-friendly, cookieless (no consent banner needed)
Plausible has a free self-hosted option or paid cloud ($9/mo — may conflict with free budget)
Alternative: Use Google Analytics 4 free tier with a cookie consent banner
Recommendation: Start with Option A for POC. Instrument the code with a simple event logging utility that can be swapped to a real provider later.

Event Logging Utility (Built-In)
```javascript
// analytics.js — lightweight event logger
// Logs to console for POC, easily swappable to GA4/Plausible later

const Analytics = {
  log(eventName, properties = {}) {
    console.log(`[ANALYTICS] ${eventName}`, {
      ...properties,
      timestamp: new Date().toISOString()
    });
    // Future: replace with real analytics call
    // gtag('event', eventName, properties);
    // plausible(eventName, { props: properties });
  }
};
```
Events to Instrument
Event Name	Properties	Purpose
app_loaded	source: 'direct' | 'pwa' | 'homescreen'	Track how users access the app
page_view	page_name	Navigation tracking
quick_match_started	—	Quick match usage
match_configured	rounds, round_length, break_length, difficulty, voice_gender, voice_tone, combo_display, combo_frequency, music_selection	Understand user preferences
session_started	source: 'quick_match' | 'create_match' | 'saved_match', difficulty, rounds, music	Session initiation tracking
round_started	round_number	Round progression
round_completed	round_number, punches_this_round	Round completion
session_completed	total_rounds, total_punches, total_defense, est_calories, difficulty, total_duration_seconds	Full session tracking
session_paused	round_number, time_remaining	Understand pause behavior
session_resumed	round_number, time_remaining, pause_duration_seconds	Resume tracking
session_stopped_early	round_number, time_remaining, total_punches_so_far	Early exit tracking
match_saved	named: true | false, difficulty	Save feature usage
match_loaded	difficulty	Saved match engagement
match_deleted	—	Churn signal
match_edited	—	Edit feature usage
music_previewed	genre: 'rock' | 'metal' | 'rap'	Music preference
music_selected	genre: 'rock' | 'metal' | 'rap' | 'none'	Music preference
voice_selected	gender, tone	Voice preference data
difficulty_selected	level	Difficulty distribution
display_mode_toggled	mode: 'single' | 'full_combo'	Feature usage
punch_reference_viewed	source: 'homepage' | 'config_popover'	Educational content engagement
tutorial_viewed	—	Onboarding engagement
settings_changed	changed_fields[]	Settings engagement
pwa_install_prompted	—	PWA adoption
pwa_installed	—	PWA adoption
go_again_tapped	—	Re-engagement
new_match_tapped	—	Post-session flow
audio_preload_duration	duration_ms, voice_profile, music_track	Performance monitoring
wake_lock_acquired	—	Feature support tracking
wake_lock_failed	error	Feature support tracking
audio_error	error_type, browser	Error tracking
Dashboards / Reports (Future — When Real Analytics Added)
Daily/weekly session counts and completion rates
Most popular configurations (difficulty, voice, music, rounds)
Session duration distribution
Drop-off analysis (which round do users stop early?)
Feature adoption (music usage, save usage, display mode preference)
Device/browser/orientation distribution
PWA install conversion
A/B Testing Plan
Not required for POC
Event logging utility is structured to support future A/B test property tagging
14. Release Strategy
Release Type
Phased internal release
Rollout Plan
Phase 1 — Core MVP (Target: 2–3 weeks from start)

Homepage with branding, hero image, punch reference section, CTA
Navigation menu (all links present, some pages placeholder)
Create a Match configuration screen (all controls functional)
Quick Match with defaults
Round timer (countdown, round indicator)
Combo engine (all 3 difficulty levels, frequency control)
Visual combo display (both modes — single and full combo)
Audio callout system with 2 initial voice profiles:
Male Encouraging (default)
Female Motivating
Round start bell, warning bell, final championship bell
Break screen with circle fill animation and round number
Break countdown beeps (5-second)
Audio preloading with 3-2-1 countdown
Pause / Stop functionality
Session complete screen (belt, stats, buttons)
Portrait and landscape responsive layouts
Wake Lock API
Basic console analytics logging
Phase 2 — Full Features (Target: 2 weeks after Phase 1)

Remaining 6 voice profiles (all 8 complete)
Background music (3 tracks with preview)
Music volume behavior (break ducking, 10-second fade up)
Save match to localStorage
Saved Matches screen (list, start, edit, delete)
Auto-naming for unnamed matches
Settings page with defaults
Settings link on Create a Match page
Punch reference popover on Create a Match page
Phase 3 — Polish & PWA (Target: 1–2 weeks after Phase 2)

Service worker for offline support
PWA manifest for home screen install
How to Use / Tutorial page (full content)
About / Contact page
Ad placeholder banner on break screen
Cross-browser testing and bug fixes
Performance optimization (audio preload speed, animation smoothness)
Accessibility audit and fixes (contrast ratios, touch targets, focus management)
Final visual polish (animations, transitions, micro-interactions)
Development Environment
Tool	Purpose
VS Code	Primary IDE
VS Code Live Server Extension	Local development server with hot reload
Git	Version control
GitHub	Repository hosting
GitHub Pages	Static hosting for demo/review (optional)
Chrome DevTools	Debugging, performance profiling, mobile emulation
Safari Web Inspector	iOS debugging (requires Mac)
Branch Strategy
main              ← Production-ready code (deployed to GitHub Pages)
├── develop       ← Integration branch for features
│   ├── feature/homepage
│   ├── feature/create-match
│   ├── feature/timer
│   ├── feature/combo-engine
│   ├── feature/audio-engine
│   ├── feature/break-screen
│   ├── feature/session-complete
│   ├── feature/saved-matches
│   ├── feature/settings
│   ├── feature/music
│   ├── feature/pwa
│   ├── feature/tutorial
│   └── bugfix/[description]
Feature Flags (Simplified for POC)
Since there's no backend, feature flags are implemented as JavaScript constants:
javascript
// feature-flags.js
const FEATURES = {
  ENABLE_MUSIC: true,          // Toggle background music feature
  ENABLE_SAVED_MATCHES: true,  // Toggle save/load functionality
  ENABLE_PWA: true,            // Toggle service worker registration
  ENABLE_ANALYTICS: true,      // Toggle console analytics logging
  ENABLE_AD_PLACEHOLDER: true, // Toggle ad banner on break screen
  ENABLE_WAKE_LOCK: true,      // Toggle wake lock API usage
  DEBUG_MODE: false,           // Extra console logging for development
};
Rollback Plan
GitHub Pages: Revert to previous commit on main branch
Local: git revert or git reset to previous working state
No database or server state to worry about — purely static file rollback
Demo / Review Plan
Phase 1 complete: Internal demo to stakeholders. Walk through Quick Match flow end-to-end. Demonstrate both difficulty extremes (Beginner vs. Champ). Show portrait and landscape modes
Phase 2 complete: Demo music integration, saved matches workflow, all 8 voice profiles. Let stakeholders configure and run their own session
Phase 3 complete: Final POC review. Demonstrate offline functionality, PWA install, full polish. Gather feedback for potential public release roadmap
Communication Plan
Internal: Regular progress updates via team communication channel (Slack, Teams, email)
Stakeholder Reviews: Scheduled demos at each phase completion
Documentation: README.md in GitHub repo with setup instructions, feature status, and known issues

---

# Many Rounds — PRD v1.1
## Sections 15–18

---

## 15. Dependencies & Integrations

### Upstream Dependencies

These items must be completed or sourced before development of dependent features can be finalized:

| Dependency | Description | Blocks | Priority | Status |
|-----------|-------------|--------|----------|--------|
| Voice Audio Files (Phase 1) | 2 voice profiles recorded/generated: Male Encouraging, Female Motivating. 22 callouts each = 44 files | Combo engine audio playback, full session flow | Critical Path | Not Started |
| Voice Audio Files (Phase 2) | Remaining 6 voice profiles. 22 callouts each = 132 files | Full voice selection feature | High | Not Started |
| Bell Sound Effects | 3 royalty-free bell sounds: round start (single ding), warning (double ding or distinct tone), final championship (multi-ring). 1 beep sound for break countdown | Timer audio, break countdown, session complete | Critical Path | Not Started |
| Background Music Tracks | 3 royalty-free instrumental tracks: Rock, Metal, Rap. Each 3–5 minutes, loopable, MP3 format | Music playback feature | High (Phase 2) | Not Started |
| Hero Boxer Image | High-quality, dark/dramatic boxer photograph. Royalty-free. Optimized for web (compressed JPEG/WebP, ~200–500KB) | Homepage visual | High | Not Started |
| Logo Placeholder | Vector graphic: boxing gloves punching outward (upper-left and upper-right) with stopwatch centered. SVG format. Must work at 32px (favicon) through 512px (PWA icon) | Header, PWA manifest, favicon, splash screen | High | Not Started |
| Title Belt Graphic | Vector or high-quality illustration of a championship belt. Gold/metallic style. SVG or PNG with transparency | Session complete screen | Medium | Not Started |
| Google Fonts | Bebas Neue or Oswald (display), Inter or Roboto (body), Roboto Mono (timer). Free, hosted by Google | All typography across the app | Low Risk (readily available) | Not Started |
| Bootstrap 5 | Latest stable release via CDN or local file | All UI components and layout | Low Risk (readily available) | Not Started |
| Bootstrap Icons or Phosphor Icons | Icon set for UI elements | All screens | Low Risk (readily available) | Not Started |

### Voice Audio Production Options

Since the budget is free, here are the recommended approaches ranked by quality and feasibility:

**Option 1 (Recommended): AI Text-to-Speech**

- Use a free-tier AI TTS service to generate all voice callouts
- **ElevenLabs:** Free tier offers ~10,000 characters/month. Enough for all 176 callouts in 1–2 months. Multiple voice styles available. High quality, natural sounding
- **Google Cloud TTS:** Free tier offers 1 million characters/month. WaveNet voices are high quality. Multiple voice options but less "character" than ElevenLabs
- **Amazon Polly:** Free tier for 12 months, 5 million characters/month. Neural voices available
- Process: Generate each callout as an individual MP3 file, trim silence, normalize volume levels across all files

**Option 2: Self-Recorded**

- Record callouts yourself or with volunteers
- Requires a quiet environment and decent microphone (phone recording in a closet works in a pinch)
- Use Audacity (free) to trim, normalize, and export
- Harder to achieve 8 distinct voice profiles convincingly

**Option 3: Hybrid**

- Use AI TTS for most profiles
- Self-record 1–2 profiles for authenticity
- Mix and match based on quality

### Downstream Dependencies

- None — Many Rounds is a standalone product with no consumers

### Cross-Team Coordination Needed

- **Stakeholders:** Schedule demo reviews at each phase completion
- **Audio Production:** If using AI TTS, one person needs to generate, trim, and organize all audio files. Estimated effort: 4–8 hours for all 8 profiles
- **Graphic Design:** Logo, title belt, and hero image sourcing/creation. If no designer available, use royalty-free assets and simple SVG creation tools (Figma free tier, Canva, or SVG editors)

### External Vendor Dependencies

| Vendor/Service | Purpose | Cost | Risk |
|---------------|---------|------|------|
| Google Fonts | Typography | Free | None — highly reliable CDN |
| Bootstrap CDN | CSS framework | Free | None — can also self-host |
| Freesound.org / Pixabay / Mixkit | Bell sounds, beep sounds | Free | Low — many options available |
| Pixabay Music / Incompetech / Uppbeat | Background music tracks | Free (with attribution where required) | Low — many options available |
| ElevenLabs / Google Cloud TTS | Voice callout generation | Free tier | Medium — free tier limits may require generating files over multiple days/months |
| GitHub Pages | Static hosting | Free | None — reliable, HTTPS included |
| Unsplash / Pexels / Pixabay | Hero boxer image | Free | Low — many options available |

---

## 16. Risks & Mitigations

| ID | Risk | Likelihood | Impact | Mitigation Strategy | Owner |
|----|------|-----------|--------|---------------------|-------|
| R-001 | **iOS Safari audio playback fails or has timing issues** — AudioContext autoplay restrictions cause audio not to play, or timing drift occurs during long sessions | High | Critical | Create/resume AudioContext on first user tap (Start Match or Quick Match). Play silent buffer to unlock audio. Pre-decode all audio buffers during preload phase. Use `requestAnimationFrame` or `setTimeout` with drift correction for precise timing. Test extensively on multiple iOS versions. Implement HTML5 Audio fallback | Dev |
| R-002 | **Voice audio production takes too long** — Generating 176 audio files across 8 profiles is time-consuming even with AI TTS, especially on free tier limits | Medium | High | Launch Phase 1 with only 2 voice profiles (Male Encouraging, Female Motivating). Generate remaining profiles in parallel during Phase 1 development. Batch generate during free tier monthly resets if needed. Have self-recorded backup plan | Product |
| R-003 | **Combo engine produces repetitive or illogical sequences** — Random generation creates awkward punch sequences or the same combos repeat too frequently within a round | Medium | Medium | Use a curated combo library (not pure random generation). Implement a "no repeat within last N combos" rule. Shuffle the library per round. Playtest extensively at all 3 difficulty levels. Have real boxers review combo logic | Dev |
| R-004 | **Audio sync drift over long sessions** — Timer and audio callouts gradually fall out of sync during a 12-round session (potentially 60+ minutes) | Medium | High | Use Web Audio API's `currentTime` for scheduling (hardware-accelerated, not subject to JS timer drift). Schedule audio events relative to AudioContext time, not `setTimeout`. Implement drift detection and correction at each round boundary | Dev |
| R-005 | **Background music conflicts with voice callouts** — Even with voice at higher gain, certain music passages may mask callouts on phone speakers | Medium | Medium | Set voice gain significantly higher than music (voice: 1.0, music: 0.6). Test with all 3 music tracks against all voice profiles on phone speakers (not just headphones). Adjust gain ratios if needed. Consider adding a slight high-pass filter to music to clear frequency space for voice | Dev |
| R-006 | **Break screen circle animation janky on low-end devices** — CSS animation of the filling circle performs poorly on budget Android phones | Low | Medium | Use CSS `transform` and `opacity` for GPU-accelerated animation. Avoid animating `clip-path`, `height`, or `width`. Test on a budget Android device (e.g., Samsung Galaxy A series). Provide a simple fallback (progress bar or numeric countdown) if animation drops below 30fps | Dev |
| R-007 | **localStorage data loss** — User clears browser data, switches browsers, or uses private/incognito mode, losing all saved matches and settings | Medium | Low | Display a note in Saved Matches: "Matches are saved to this browser. Clearing browser data will remove them." Detect private/incognito mode and warn user that saves won't persist. This is acceptable for POC — real accounts solve this in a future version | Product |
| R-008 | **Royalty-free music quality is insufficient** — Free instrumental tracks sound cheap or don't match the elite gym aesthetic | Medium | Medium | Audition multiple tracks from multiple sources before committing. Prioritize Pixabay Music and Uppbeat which tend to have higher quality free options. Have 2–3 backup options per genre. Music is a Phase 2 feature so there's time to source properly | Product |
| R-009 | **Service worker caching causes stale content** — After an update, users continue seeing old version of the app because service worker serves cached files | Low | Medium | Implement stale-while-revalidate strategy for app shell. Version the service worker cache name. Show a "New version available — refresh" prompt when an update is detected. Document cache-busting procedure in README | Dev |
| R-010 | **Landscape layout breaks on certain phone models** — Unusual screen aspect ratios or notch/dynamic island placement causes layout issues | Medium | Low | Test on top 10 most common phone screen sizes using Chrome DevTools device emulation. Account for safe area insets (CSS `env(safe-area-inset-*)`) for notched phones. Set minimum usable landscape height. Fallback to portrait-style stacked layout on very small landscape viewports (height < 300px) | Dev |
| R-011 | **GitHub Pages routing issues with SPA** — Navigating directly to a route (e.g., `/settings`) returns a 404 on GitHub Pages since there's no server-side routing | Medium | Low | Use hash-based routing (`/#/settings`) instead of history-based routing (`/settings`). This works natively with GitHub Pages without any workarounds. Alternatively, use the 404.html redirect trick (copy index.html to 404.html) | Dev |
| R-012 | **Calorie estimation is inaccurate or misleading** — Users take the calorie number as precise medical data | Low | Low | Display as "Est. ~[X] calories" with tilde indicating approximation. Add a small disclaimer tooltip: "Estimate based on average body weight of 154 lbs (70 kg). Actual calories vary based on individual factors." Include note in How to Use page | Product |
| R-013 | **Audio preloading is slow on poor connections** — Loading voice files + music track takes too long, frustrating users who want to start quickly | Medium | Medium | Show a clear loading progress indicator during preload ("Loading your trainer... 60%"). Preload only the selected voice profile and music track (not all assets). For Quick Match, preload default voice profile in the background on homepage load. Cache assets via service worker for instant subsequent loads | Dev |
| R-014 | **Web Audio API not supported in user's browser** — Very old browsers or restricted environments don't support Web Audio API | Low | High | Feature-detect Web Audio API on app load. If unavailable, fall back to HTML5 `<audio>` elements with reduced timing precision. Show a warning: "For the best experience, use the latest version of Chrome or Safari." This is edge case for POC | Dev |
| R-015 | **Stakeholder expectations exceed POC scope** — Internal reviewers expect production-quality polish, native app features, or backend functionality that's out of scope | Medium | Medium | Set expectations clearly before demos. Share the PRD scope and non-goals in advance. Frame demos as "proof of concept" not "finished product." Highlight the future considerations / parking lot as the roadmap | Product |

---

## 17. Assumptions & Constraints

### Assumptions

| ID | Assumption | Impact if Wrong | Mitigation |
|----|-----------|----------------|------------|
| A-001 | Users have a modern smartphone (2020+) with a working speaker, Bluetooth speaker, or headphones | App audio won't be heard; core value proposition fails | State minimum device requirements in About page. Audio is supplemented by visual display so app is partially usable without sound |
| A-002 | Users are familiar with basic boxing concepts or will use the tutorial before their first session | Users may be confused by punch numbers and combo callouts | Punch reference on homepage and popover on config page. How to Use tutorial page. Numbers always shown with punch names |
| A-003 | High-quality AI text-to-speech (ElevenLabs free tier or equivalent) produces sufficiently natural and motivating voice callouts for 8 profiles | Voice quality is poor, robotic, or doesn't convey the intended tone (encouraging, stern, gruff, motivating) | Audition multiple AI TTS providers. Self-record as backup. Launch with 2 best profiles and iterate |
| A-004 | Royalty-free boxing bell sounds of sufficient quality and authenticity are available at no cost | Bell sounds are cheap-sounding and undermine the premium feel | Audition many options from multiple sources (Freesound, Pixabay, Mixkit, Zapsplat). Layer and edit sounds in Audacity if needed |
| A-005 | Royalty-free instrumental music tracks in Rock, Metal, and Rap genres are available at no cost with sufficient energy and quality for a boxing workout | Music is low quality, wrong energy, or has licensing restrictions | Source from multiple providers. Have 2–3 backup options per genre. Verify license terms carefully |
| A-006 | Bootstrap 5 with custom theming provides sufficient design flexibility to achieve the desired elite boxing gym aesthetic | Design looks generic or "Bootstrap-y" and doesn't feel premium | Heavy custom CSS overrides on top of Bootstrap. Custom color variables, typography, and component styling. Bootstrap is the foundation, not the final look |
| A-007 | localStorage provides adequate storage for the POC's needs (saved matches + settings) | Storage limit reached or data lost unexpectedly | Each match config is ~0.5KB. localStorage supports ~5MB. Thousands of matches possible. Handle quota errors gracefully |
| A-008 | The target audience for the POC is primarily English-speaking | Non-English speakers can't use the app | English only for V1. Architecture supports future localization (centralized strings) |
| A-009 | Web Audio API provides sufficient timing precision for syncing voice callouts with visual display and background music | Audio and visual elements are noticeably out of sync | Web Audio API's hardware-accelerated clock is highly precise. Schedule events using AudioContext.currentTime. This is a well-proven approach used by professional web audio applications |
| A-010 | GitHub Pages is sufficient for hosting the POC for internal stakeholder review | GitHub Pages has limitations that prevent proper functioning (e.g., large audio files, bandwidth) | GitHub Pages supports sites up to 1GB with 100GB/month bandwidth. Total app with all audio assets is ~18MB. Well within limits for internal use. Can migrate to Netlify or Vercel (also free) if issues arise |
| A-011 | Internal stakeholders will review the POC on their own mobile devices | Stakeholders only review on desktop, missing the primary mobile experience | Explicitly request mobile testing in demo sessions. Provide QR code linking to the hosted app for easy mobile access |
| A-012 | A single volume control (same level for voice, bells, and music) provides an acceptable user experience | Users want independent volume controls for voice vs. music | Single control simplifies the POC. Voice is mixed louder than music at the audio engine level regardless of the master volume. Independent controls noted in future considerations |
| A-013 | The estimated calorie formula using assumed 70kg body weight provides a "good enough" estimate for motivation purposes | Users find the calorie number unreliable or misleading | Display with "Est. ~" prefix and disclaimer tooltip. Note in How to Use page that it's an approximation. Future version could allow user to input weight for better accuracy |

### Constraints

| ID | Constraint | Type | Impact on Design/Development |
|----|-----------|------|------------------------------|
| C-001 | **Zero budget** — No paid services, subscriptions, hosting, or assets allowed | Financial | Must use free tiers of all tools and services. Royalty-free assets only. Free hosting (GitHub Pages). Free AI TTS or self-recorded audio |
| C-002 | **Internal POC only** — Not a public production release | Scope | Reduces need for production-grade security, scalability, legal compliance, and support infrastructure. Allows shortcuts like localStorage-only storage and console-only analytics |
| C-003 | **No backend / no server** — Fully client-side application | Technical | No user accounts, no cloud storage, no server-side logic. All data in localStorage. No API calls. Limits future features like cross-device sync until a backend is added |
| C-004 | **Static hosting only (GitHub Pages)** — No server-side rendering or processing | Technical | Must use hash-based routing for SPA. No server-side redirects or headers. All logic runs in the browser |
| C-005 | **Timeline: ASAP** — Aggressive delivery timeline | Schedule | Phased release approach to ship MVP quickly. Prioritize P0 features. Accept "good enough" over "perfect" for POC. Defer P2 features if timeline pressure increases |
| C-006 | **Audio file production** — 176 voice files + 4 bell/beep files + 3 music tracks must be sourced or created | Content | Critical path dependency. Phase 1 needs minimum 44 voice files + 4 bell/beep files. Phase 2 needs remaining 132 voice files + 3 music tracks. Must begin audio production immediately in parallel with development |
| C-007 | **iOS Safari audio restrictions** — AudioContext requires user gesture; autoplay is blocked | Technical | All audio initialization must be triggered by a user tap. Affects the flow of Quick Match and session start. Must be accounted for in the audio engine architecture from day one |
| C-008 | **PWA limitations on iOS** — iOS has limited PWA support (no push notifications, limited background processing, storage can be cleared by OS after 7 days of inactivity) | Technical | PWA install works but with caveats. localStorage may be cleared on iOS if app isn't used for 7 days. Acceptable for POC. Note in documentation |
| C-009 | **Single developer assumption** — If only one person is building this, all skills (HTML, CSS, JS, audio, design, testing) must be covered by that person | Resource | Prioritize functionality over visual polish in early phases. Use Bootstrap defaults where custom design isn't critical. Leverage AI tools for code generation and asset creation |
| C-010 | **No custom domain** — App will be accessed via `username.github.io/many-rounds` or `localhost` | Infrastructure | Acceptable for internal POC. PWA manifest works with GitHub Pages URL. Not ideal for a public launch but not needed for POC |

---

## 18. Timeline & Milestones

### Overview

Total estimated timeline: **6–8 weeks** from PRD approval to fully polished POC, assuming one developer working on this alongside other responsibilities. Can be compressed to **4–5 weeks** with dedicated full-time focus.

### Phase 1 — Core MVP

| Milestone | Target | Owner | Dependencies | Status |
|-----------|--------|-------|-------------|--------|
| PRD Finalized & Approved | Week 0 | Product | — | In Progress |
| Audio Production Begins (2 voice profiles + bells/beeps) | Week 0 (parallel) | Product/Dev | AI TTS service access | Not Started |
| Project Setup (repo, file structure, Bootstrap theme, fonts) | Week 1, Day 1–2 | Dev | — | Not Started |
| Homepage Built (hero, branding, punch reference, CTA) | Week 1, Day 2–4 | Dev | Hero image, logo placeholder | Not Started |
| Navigation Menu Built | Week 1, Day 4–5 | Dev | — | Not Started |
| Create a Match Screen Built (all controls, no functionality) | Week 2, Day 1–3 | Dev | — | Not Started |
| Timer Engine Built (round countdown, break countdown) | Week 2, Day 3–5 | Dev | — | Not Started |
| Combo Engine Built (library, generation, stats tracking) | Week 3, Day 1–3 | Dev | — | Not Started |
| Audio Engine Built (Web Audio API, gain nodes, preloading) | Week 3, Day 3–5 | Dev | Voice files, bell files | Not Started |
| Visual Combo Display Built (both modes) | Week 4, Day 1–2 | Dev | Combo engine | Not Started |
| Break Screen Animation Built (circle fill, beeps) | Week 4, Day 2–3 | Dev | Timer engine, audio engine | Not Started |
| Session Complete Screen Built (belt, stats, buttons) | Week 4, Day 3–4 | Dev | Title belt graphic | Not Started |
| Pause / Stop Functionality | Week 4, Day 4 | Dev | Timer, audio, combo engines | Not Started |
| Wake Lock Integration | Week 4, Day 4 | Dev | — | Not Started |
| Portrait + Landscape Layouts | Week 4, Day 5 | Dev | All active session screens | Not Started |
| Full Session Flow Integration Testing | Week 5, Day 1–2 | Dev/QA | All Phase 1 components | Not Started |
| **Phase 1 Internal Demo** | **Week 5, Day 3** | **All** | All Phase 1 complete | Not Started |

### Phase 2 — Full Features

| Milestone | Target | Owner | Dependencies | Status |
|-----------|--------|-------|-------------|--------|
| Audio Production Complete (remaining 6 voice profiles) | Week 5 (parallel) | Product/Dev | Voice files | Not Started |
| Music Track Sourcing & Selection | Week 5, Day 1–2 | Product | — | Not Started |
| Background Music Integration (playback, volume behavior, preview) | Week 5, Day 3–5 | Dev | Music tracks | Not Started |
| Remaining Voice Profiles Integration | Week 6, Day 1 | Dev | Voice files | Not Started |
| localStorage Save/Load Implementation | Week 6, Day 1–2 | Dev | — | Not Started |
| Saved Matches Screen Built | Week 6, Day 2–3 | Dev | localStorage | Not Started |
| Settings Page Built | Week 6, Day 3–4 | Dev | localStorage | Not Started |
| Punch Reference Popover on Config Page | Week 6, Day 4 | Dev | — | Not Started |
| Settings Link on Create a Match Page | Week 6, Day 4 | Dev | Settings page | Not Started |
| Phase 2 Integration Testing | Week 6, Day 5 | Dev/QA | All Phase 2 components | Not Started |
| **Phase 2 Internal Demo** | **Week 7, Day 1** | **All** | All Phase 2 complete | Not Started |

### Phase 3 — Polish & PWA

| Milestone | Target | Owner | Dependencies | Status |
|-----------|--------|-------|-------------|--------|
| Service Worker Implementation (offline caching) | Week 7, Day 1–2 | Dev | All assets finalized | Not Started |
| PWA Manifest & Install Support | Week 7, Day 2–3 | Dev | Logo at all required sizes | Not Started |
| How to Use / Tutorial Page | Week 7, Day 3–4 | Dev | Content written | Not Started |
| About / Contact Page | Week 7, Day 4 | Dev | Content written | Not Started |
| Ad Placeholder Banner on Break Screen | Week 7, Day 4 | Dev | — | Not Started |
| Cross-Browser Testing (iOS Safari, Chrome Mobile, Desktop browsers) | Week 7, Day 5 – Week 8, Day 1 | QA/Dev | — | Not Started |
| Accessibility Audit & Fixes | Week 8, Day 1–2 | Dev | — | Not Started |
| Performance Optimization | Week 8, Day 2–3 | Dev | — | Not Started |
| Visual Polish & Micro-interactions | Week 8, Day 3–4 | Dev | — | Not Started |
| Final Bug Fixes | Week 8, Day 4–5 | Dev | — | Not Started |
| Deploy to GitHub Pages | Week 8, Day 5 | Dev | — | Not Started |
| **Final POC Demo & Review** | **End of Week 8** | **All** | Everything complete | Not Started |

### Post-Launch

| Milestone | Target | Owner | Status |
|-----------|--------|-------|--------|
| Stakeholder Feedback Collection | Week 9 | Product | Not Started |
| Bug Fixes from Feedback | Week 9–10 | Dev | Not Started |
| Go/No-Go Decision on Public Release | Week 10 | Product/Stakeholders | Not Started |
| Public Release Roadmap (if approved) | Week 10–11 | Product | Not Started |

---

# Many Rounds — PRD v1.1
## Sections 19–22

---

## 19. Resource & Staffing Requirements

### Team Structure (POC)

| Role | Headcount | Responsibilities | Required Skills |
|------|-----------|-----------------|-----------------|
| **Product Owner** | 1 (You) | Requirements, prioritization, audio/asset sourcing, stakeholder management, demo coordination, content writing (tutorial, about page) | Product management, boxing domain knowledge, project coordination |
| **Developer** | 1 | All frontend development, audio engine, combo engine, PWA implementation, testing, deployment | HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Web Audio API, Service Workers, responsive design, Git/GitHub |
| **QA / Tester** | 1 (can be same as developer or product owner) | Cross-browser testing, mobile device testing, session flow testing, accessibility review | Mobile testing, browser DevTools, attention to detail |

### Effort Estimates

| Component | Estimated Effort | Phase |
|-----------|-----------------|-------|
| Project setup, Bootstrap theming, file structure | 4 hours | 1 |
| Homepage (hero, branding, punch reference, responsive) | 6 hours | 1 |
| Navigation menu | 3 hours | 1 |
| Create a Match screen (all controls, validation) | 8 hours | 1 |
| Timer engine (round countdown, break countdown, warning) | 6 hours | 1 |
| Combo engine (library, generation, difficulty logic, stats) | 10 hours | 1 |
| Audio engine (Web Audio API, gain nodes, preload, iOS handling) | 12 hours | 1 |
| Visual combo display (single mode + full combo mode) | 6 hours | 1 |
| Break screen (circle animation, beeps, pulse, transition) | 8 hours | 1 |
| Session complete screen (belt, stats, calorie calc, buttons) | 4 hours | 1 |
| Pause / Stop functionality | 4 hours | 1 |
| Wake Lock integration | 1 hour | 1 |
| Portrait + Landscape responsive layouts | 6 hours | 1 |
| Phase 1 integration testing & bug fixes | 8 hours | 1 |
| **Phase 1 Subtotal** | **~86 hours** | |
| Background music (playback, volume behavior, looping) | 6 hours | 2 |
| Music preview on config screen | 3 hours | 2 |
| Remaining voice profile integration | 2 hours | 2 |
| localStorage save/load implementation | 4 hours | 2 |
| Saved Matches screen (list, start, edit, delete, empty state) | 6 hours | 2 |
| Settings page | 4 hours | 2 |
| Punch reference popover | 2 hours | 2 |
| Phase 2 integration testing & bug fixes | 6 hours | 2 |
| **Phase 2 Subtotal** | **~33 hours** | |
| Service Worker (offline caching, update strategy) | 6 hours | 3 |
| PWA manifest & install support | 3 hours | 3 |
| How to Use / Tutorial page | 4 hours | 3 |
| About / Contact page | 2 hours | 3 |
| Ad placeholder banner | 1 hour | 3 |
| Cross-browser testing & fixes | 8 hours | 3 |
| Accessibility audit & fixes | 4 hours | 3 |
| Performance optimization | 4 hours | 3 |
| Visual polish & micro-interactions | 6 hours | 3 |
| Final bug fixes & deployment | 4 hours | 3 |
| **Phase 3 Subtotal** | **~42 hours** | |
| **Total Development Effort** | **~161 hours** | |

### Non-Development Effort

| Task | Estimated Effort | Owner |
|------|-----------------|-------|
| Voice audio production (AI TTS generation, trimming, normalizing — all 8 profiles) | 8–12 hours | Product/Dev |
| Bell/beep sound sourcing and editing | 2 hours | Product/Dev |
| Background music sourcing, auditioning, and selection | 3 hours | Product |
| Hero boxer image sourcing | 1 hour | Product |
| Logo placeholder creation (simple SVG) | 2–4 hours | Product/Dev |
| Title belt graphic creation or sourcing | 1–2 hours | Product/Dev |
| Tutorial and About page content writing | 2 hours | Product |
| Stakeholder demo preparation (3 demos) | 3 hours | Product |
| **Non-Dev Subtotal** | **~22–29 hours** | |

### Total Project Effort

- **Development:** ~161 hours
- **Non-Development:** ~25 hours (midpoint estimate)
- **Grand Total:** ~186 hours
- **At 20 hours/week (part-time):** ~9–10 weeks
- **At 40 hours/week (full-time):** ~5 weeks
- **At 30 hours/week (realistic mix):** ~6–7 weeks

---

## 20. Testing & Quality Assurance

### Test Strategy

| Test Type | Approach | Tools | When |
|-----------|----------|-------|------|
| **Manual Functional Testing** | Test all user flows end-to-end on real devices | Physical devices + browser DevTools | Each phase completion |
| **Audio Testing** | Verify all voice callouts, bells, beeps, and music play correctly with proper timing and volume | Physical devices with speaker + headphones | Phase 1 & 2 |
| **Responsive Testing** | Verify portrait and landscape layouts across screen sizes | Chrome DevTools device emulation + physical devices | Each phase completion |
| **Cross-Browser Testing** | Verify functionality on all supported browsers | Physical devices + BrowserStack (free trial) or manual | Phase 3 |
| **Performance Testing** | Measure load times, animation frame rates, audio latency | Chrome DevTools Performance tab, Lighthouse | Phase 3 |
| **Accessibility Testing** | Verify contrast ratios, touch targets, screen reader basics, keyboard navigation | axe DevTools extension, Lighthouse, manual | Phase 3 |
| **Offline Testing** | Verify full functionality with network disconnected | Chrome DevTools Network tab (offline mode) | Phase 3 |
| **PWA Testing** | Verify install, splash screen, standalone mode, icons | Chrome DevTools Application tab, physical device install | Phase 3 |
| **localStorage Testing** | Verify save, load, edit, delete, quota handling, data persistence | Browser DevTools Application tab | Phase 2 |

### Test Devices

| Device | OS | Browser | Priority | Purpose |
|--------|-----|---------|----------|---------|
| iPhone 13/14/15 (any model) | iOS 16+ | Safari | Primary | Primary mobile target, iOS audio testing |
| iPhone SE (2nd/3rd gen) | iOS 15+ | Safari | Primary | Smallest supported screen (375px portrait, 667px landscape) |
| Samsung Galaxy S21/S22/S23 | Android 12+ | Chrome | Primary | Primary Android target |
| Samsung Galaxy A series (budget) | Android 10+ | Chrome | Secondary | Low-end performance testing |
| iPad (any recent model) | iPadOS 16+ | Safari | Secondary | Tablet layout verification |
| Desktop/Laptop | Windows/Mac | Chrome | Secondary | Desktop layout, development |
| Desktop/Laptop | Windows/Mac | Firefox | Secondary | Cross-browser compatibility |
| Desktop/Laptop | Mac | Safari | Secondary | Cross-browser compatibility |

### Key Test Scenarios

#### Session Flow Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-001 | Complete Quick Match end-to-end | Tap Quick Match → verify preload → verify 3-2-1 countdown → verify all 5 rounds play with combos → verify all breaks with circle animation and beeps → verify final bell → verify session complete screen with accurate stats | All rounds, breaks, audio, and visuals function correctly. Stats are accurate |
| T-002 | Complete a 12-round Champ session | Configure 12 rounds, 3 min each, 1 min break, Champ, constant combos, with music → Start → complete all rounds | No audio drift, timer stays accurate, combos are complex with defense calls, music loops seamlessly, stats are accurate. Session may last 45+ minutes |
| T-003 | Complete a 1-round Beginner session | Configure 1 round, 30 seconds, Beginner → Start → complete | Single round plays, no break screen shown, final bell plays, session complete shows stats for 1 round |
| T-004 | Verify difficulty differences | Run 1 round at each difficulty level, observe combos | Beginner: 2–3 punch combos, slow, 1s and 2s only. Up-and-Comer: 3–5 punches, moderate, all numbers. Champ: 4–6 punches with defensive calls, fast |

#### Audio Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-005 | All 8 voice profiles play correctly | Configure a match with each of the 8 gender+tone combinations → start 1 round each | Correct voice files play for each profile. All callouts are audible and clear |
| T-006 | Voice callouts audible over music | Start a session with Rock music and Male Gruff voice → listen on phone speaker | Voice callouts are clearly audible and "front and center" over the music at all times |
| T-007 | Music volume behavior during breaks | Start a session with music → let a round end → observe break | Music volume drops to 80% immediately when break starts. When next round starts, music fades back to full volume over 10 seconds |
| T-008 | Break countdown beeps | Let a round end → listen during final 5 seconds of break | 5 distinct beeps play, one per second, clearly audible. Round start bell follows immediately after 5th beep |
| T-009 | Warning bell timing | Configure 10-second warning → start a round → listen | Warning bell plays exactly 10 seconds before round end. Distinct sound from start bell |
| T-010 | Final championship bell | Complete all configured rounds | Multi-ring championship bell plays after final round. Distinct from single round bells. Feels celebratory |
| T-011 | Music preview on config screen | Tap preview for each music option (Rock, Metal, Rap) → tap another | Each track plays a 10–15 second sample. Only one plays at a time. Tapping another stops the current preview. Tapping same preview again stops it |
| T-012 | iOS Safari audio initialization | Open app on iOS Safari → tap Quick Match → verify audio plays | AudioContext initializes on tap. All audio (voice, bells, music) plays correctly. No silent first round |
| T-013 | No music selected | Configure match with music set to "None" → start session | Session plays with voice callouts and bells only. No background music. No errors |

#### Timer Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-014 | Timer accuracy over long session | Start a 5-round, 3-minute session → use a stopwatch to verify | Each round is within ±0.5 seconds of 3 minutes. Breaks are within ±0.5 seconds of configured length |
| T-015 | Timer displays correctly | Observe timer during a round | Shows MM:SS format, counts down smoothly (updates every second), no flickering or layout shift |
| T-016 | Break timer and circle fill sync | Observe break screen | Circle fill animation completes at the same moment the break timer reaches 0:00. They are in sync |

#### Pause / Stop Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-017 | Pause mid-round | During an active round with music and combos → tap Pause | All timers freeze. Audio stops (voice, music, no new combos). "PAUSED" overlay appears with Resume and End Session buttons |
| T-018 | Resume from pause | Pause → wait 10 seconds → tap Resume | Timer resumes from exact paused time. Music resumes from paused position. Combos resume. No audio glitches or sync issues |
| T-019 | Pause during break | During a break → tap Pause | Break timer freezes. Circle animation freezes. Music stays at break volume (paused). Resume continues break from paused point |
| T-020 | Stop mid-session | During round 3 of 5 → tap Stop → confirm "End Session" | Session ends. Session complete screen shows stats accumulated through round 3 (partial session). No crashes |
| T-021 | Stop from pause screen | Pause → tap "End Session" → confirm | Same as T-020. Session complete shows partial stats |
| T-022 | Rapid pause/resume toggling | Tap pause and resume 10 times rapidly | No crashes, no audio glitches, no timer drift. App remains stable |

#### Combo Display Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-023 | Single display mode | Set display to one-at-a-time → start session | One large number + punch name appears at a time, synced with audio callout. Animates in/out with each callout |
| T-024 | Full combo display mode | Set display to full combo highlighted → start session | Full combo string shown (e.g., "1 - 2 - 3 - 2"). Each number highlights/enlarges as it's called. Non-active numbers visible but dimmed |
| T-025 | Defensive moves display (Champ) | Start a Champ session → observe defensive callouts | "SLIP", "ROLL", "BLOCK", "STEP BACK" display with distinct styling (different color or icon). Audio calls them out clearly |

#### Responsive Layout Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-026 | Portrait active session | Hold phone vertically during a round | Timer at top, combo display centered, pause/stop at bottom. All elements visible and properly sized |
| T-027 | Landscape active session | Rotate phone horizontally during a round | Timer on left side, combo display on right side. Smooth transition. No content cut off. No interruption to session |
| T-28 | Orientation change mid-round | Start in portrait → rotate to landscape → rotate back during active round | Layout transitions smoothly each time. Timer continues. Audio continues. No glitches |
| T-029 | Smallest supported screen (iPhone SE portrait: 375×667) | Test all screens on 375px wide viewport | All content visible, no horizontal scroll, touch targets ≥44px, text readable |
| T-030 | Smallest landscape viewport | Test active session on iPhone SE landscape (667×375) | Side-by-side layout works. Timer and combo display both visible. Controls accessible |

#### Save / Load Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-031 | Save a match with custom name | Configure match → Save → enter name "Tuesday Drill" → confirm | Match saved to localStorage. Toast confirmation shown. Appears in Saved Matches with name "Tuesday Drill" |
| T-032 | Save a match without name | Configure match → Save → leave name blank → confirm | Match saved with auto-generated name (e.g., "5 rounds, 2 min rounds, 1 min break"). Appears in Saved Matches |
| T-033 | Load and start a saved match | Saved Matches → tap Start on a saved match | Session starts with all saved configuration values. Preload → countdown → round 1 |
| T-034 | Edit a saved match | Saved Matches → tap Edit → modify settings → Save | Create a Match opens pre-filled. After modification and save, the existing entry is updated (not duplicated) |
| T-035 | Delete a saved match | Saved Matches → tap Delete → confirm | Match removed from list and localStorage. Confirmation modal shown before deletion |
| T-036 | Saved Matches empty state | Delete all matches (or fresh browser) → open Saved Matches | "No saved matches yet." message displayed with "Create your first match" CTA button |
| T-037 | Data persists across browser sessions | Save a match → close browser completely → reopen app → check Saved Matches | Saved match is still present |
| T-038 | Settings persist across sessions | Change settings → close browser → reopen → check Settings | All settings retained |

#### Session Complete Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-039 | Session complete stats accuracy | Complete a 3-round Champ session → count combos manually → verify stats | Total punches matches actual callouts. Total defensive moves matches actual defense calls. Calories estimate is reasonable for duration and difficulty |
| T-040 | "Go Again" button | Complete session → tap "Go Again" | Same match configuration restarts. Preload → countdown → Round 1. Stats reset to zero |
| T-041 | "New Match" button | Complete session → tap "New Match" | Navigates to Create a Match screen. Previous config may or may not be pre-filled (either is acceptable) |
| T-042 | Early stop shows partial stats | Stop in round 2 of 5 → confirm → view session complete | Stats show punches/defense/calories for rounds 1 and partial round 2 only |

#### Edge Case Tests

| ID | Scenario | Steps | Expected Result |
|----|----------|-------|----------------|
| T-043 | Maximum configuration | 12 rounds, 5 min each, 5 min breaks, Champ, constant combos, music | App handles a potentially 2-hour session without crashes, memory leaks, or audio drift |
| T-044 | Minimum configuration | 1 round, 30 seconds, 30 second break, Beginner, no music | Session plays correctly. No break screen shown (only 1 round). Final bell plays after 30 seconds |
| T-045 | Browser back button during session | Press browser back during active round | App should handle gracefully — either ignore, show stop confirmation, or navigate away without crashing audio |
| T-046 | Phone call interrupts session | Receive a phone call during active session | Audio pauses (OS-level). On return to app, session should be paused or recoverable. No crash |
| T-047 | Low battery / power saver mode | Run session with phone in low power mode | Wake Lock may be overridden by OS. App should still function. Timer should remain accurate |
| T-048 | localStorage full | Fill localStorage near capacity → try to save a match | Graceful error message: "Storage is full. Delete some saved matches to make room." |

### Go / No-Go Criteria

**Phase 1 (MVP) — Must pass before stakeholder demo:**

- [ ] All T-001 through T-004 (session flow) pass
- [ ] All T-005, T-009, T-010, T-012 (critical audio) pass
- [ ] T-014, T-015 (timer accuracy) pass
- [ ] T-017, T-018, T-020 (pause/stop) pass
- [ ] T-023, T-024, T-025 (combo display) pass
- [ ] T-026, T-027, T-028 (responsive) pass
- [ ] No critical or high-severity bugs
- [ ] App does not crash during a complete 5-round session

**Phase 2 — Must pass before Phase 2 demo:**

- [ ] All Phase 1 criteria still pass
- [ ] T-006, T-007, T-008, T-011, T-013 (music and break audio) pass
- [ ] T-031 through T-038 (save/load) pass
- [ ] All 8 voice profiles verified (T-005 with all profiles)

**Phase 3 (Final) — Must pass before final POC review:**

- [ ] All Phase 1 and 2 criteria still pass
- [ ] T-039 through T-042 (session complete) pass
- [ ] T-029, T-030 (smallest screens) pass
- [ ] T-043, T-044 (edge cases) pass
- [ ] Offline mode functional
- [ ] PWA installs on iOS and Android
- [ ] Lighthouse accessibility score ≥ 85
- [ ] Lighthouse performance score ≥ 80
- [ ] No critical, high, or medium-severity bugs

---

## 21. Support & Operations

### Customer Support Impact

- **POC Phase:** No external customer support needed. This is an internal tool
- **Bug Reports:** Collected verbally or via email/Slack during stakeholder demos and testing
- **Issue Tracking:** GitHub Issues on the project repository. Labels: `bug`, `enhancement`, `question`, `phase-1`, `phase-2`, `phase-3`, `critical`, `high`, `medium`, `low`

### Documentation Requirements

| Document | Format | Location | Owner | Priority |
|----------|--------|----------|-------|----------|
| **README.md** | Markdown | GitHub repo root | Dev | P0 |
| — Project overview and purpose | | | | |
| — Setup instructions (clone, install, run locally) | | | | |
| — File structure explanation | | | | |
| — How to add new combos to the library | | | | |
| — How to add new voice profiles | | | | |
| — How to replace music tracks | | | | |
| — Feature flag configuration | | | | |
| — Known issues and limitations | | | | |
| — Browser support matrix | | | | |
| **In-App: How to Use** | HTML page | `/` (hash route) | Product | P1 |
| — Punch numbering system | | | | |
| — Defensive moves | | | | |
| — Match setup walkthrough | | | | |
| — Difficulty level guide | | | | |
| — Tips for training | | | | |
| **In-App: About** | HTML page | `/` (hash route) | Product | P2 |
| — App description | | | | |
| — Credits and licensing | | | | |
| — Contact info | | | | |
| **Audio Asset Guide** | Markdown | GitHub repo `/docs` | Dev | P1 |
| — File naming conventions | | | | |
| — Required format and specs (MP3, bitrate, duration) | | | | |
| — How to generate new voice profiles via AI TTS | | | | |
| — How to trim and normalize audio in Audacity | | | | |
| — Licensing info for all sourced assets | | | | |

### Runbook / Operational Procedures

**Deploying to GitHub Pages:**

1. Ensure all changes are committed and pushed to `main` branch
2. GitHub Pages auto-deploys from `main` (or `gh-pages` branch if configured)
3. Verify deployment at `https://[username].github.io/many-rounds`
4. Test critical flow (Quick Match end-to-end) on mobile after deployment

**Updating Audio Assets:**

1. Generate or source new audio file
2. Match file naming convention: `[number-or-move].mp3` (e.g., `1-jab.mp3`, `slip.mp3`, `round-7.mp3`)
3. Place in correct directory under `/audio/voices/[profile-name]/`
4. Update service worker cache version to force re-cache
5. Test playback on iOS Safari and Chrome Mobile

**Updating the Combo Library:**

1. Edit combo data file (e.g., `combo-library.js` or `combos.json`)
2. Follow existing format: `{ moves: ['1', '2', '3'], difficulty: 'beginner' }`
3. Ensure combo follows boxing logic (no illogical sequences)
4. Test at the appropriate difficulty level

**Clearing Service Worker Cache (for development):**

1. Chrome DevTools → Application → Service Workers → Unregister
2. Chrome DevTools → Application → Cache Storage → Delete all caches
3. Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Escalation Path

- Bug found → Log in GitHub Issues with severity label → Dev triages → Fix and deploy
- Critical bug (app crashes, audio broken) → Fix immediately, deploy to `main`
- Stakeholder feedback → Product owner triages → Prioritize for current or future phase

---

## 22. Legal & Regulatory Considerations

### Overview

As an internal POC with no user accounts, no PII collection, and no public distribution, legal requirements are minimal. However, the following should be addressed to ensure the POC can transition to a public product without legal debt.

### Audio Asset Licensing

| Asset Type | Licensing Requirement | Action Needed |
|-----------|----------------------|---------------|
| Voice callouts (AI-generated) | Verify TTS provider's terms allow commercial use of generated audio | Review ElevenLabs / Google Cloud TTS / Amazon Polly terms of service. Most free tiers allow commercial use but may require attribution or have usage limits |
| Voice callouts (self-recorded) | No licensing concerns — you own the recordings | Ensure any participants consent to their voice being used |
| Bell / beep sound effects | Verify royalty-free license allows commercial use | Use CC0 (public domain) assets where possible. If CC-BY, track attribution requirements. Document all sources and licenses in the Audio Asset Guide |
| Background music tracks | Verify royalty-free license allows commercial use, looping, and modification | Use tracks explicitly licensed for commercial use. Some "free" tracks require attribution — track this. Avoid tracks with "personal use only" licenses. Document all sources and licenses |

### Image Licensing

| Asset | Licensing Requirement | Action Needed |
|-------|----------------------|---------------|
| Hero boxer image | Must be licensed for commercial web use | Source from Unsplash (free commercial), Pexels (free commercial), or Pixabay (free commercial). Verify specific image license. Avoid images with identifiable people unless the license explicitly covers commercial use or model releases are included |
| Logo placeholder | No concerns if created by the team | If using any stock elements in the logo, verify their license |
| Title belt graphic | Must be licensed for commercial use | Create original SVG or source from a free commercial vector site |

### Font Licensing

| Font | License | Status |
|------|---------|--------|
| Bebas Neue | SIL Open Font License | ✅ Free for commercial web use |
| Oswald | SIL Open Font License | ✅ Free for commercial web use |
| Inter | SIL Open Font License | ✅ Free for commercial web use |
| Roboto / Roboto Mono | Apache License 2.0 | ✅ Free for commercial web use |

### Framework & Library Licensing

| Library | License | Status |
|---------|---------|--------|
| Bootstrap 5 | MIT License | ✅ Free for commercial use |
| Bootstrap Icons | MIT License | ✅ Free for commercial use |
| Phosphor Icons | MIT License | ✅ Free for commercial use |
| Workbox (Service Worker) | MIT License | ✅ Free for commercial use |

### Privacy & Compliance (POC Phase)

- **No PII collected** — no accounts, no forms collecting personal data
- **No cookies set** by the application (localStorage is not a cookie)
- **No analytics cookies** if using console-only logging (Option A)
- **No GDPR/CCPA concerns** for internal POC with no data collection
- **If transitioning to public release:** Privacy policy, terms of service, cookie consent (if adding analytics), and GDPR/CCPA compliance will be required

### Trademark Considerations

- **"Many Rounds"** — Before public release, conduct a basic trademark search to ensure the name is available
- **Not required for internal POC** but recommended before investing in public branding

### Licensing Documentation

Create a `LICENSES.md` file in the GitHub repo documenting:

- All third-party assets used (audio, images, fonts, libraries)
- Source URL for each asset
- License type for each asset
- Attribution text where required
- Date sourced

---

# Many Rounds — PRD v1.1
## Sections 23–25

---

## 23. Post-Launch Plan

### Immediate Post-POC Activities (Weeks 9–12)

#### Stakeholder Feedback Integration (Week 9)
- **Collect Feedback:** Schedule follow-up sessions with stakeholders to gather detailed feedback on the POC
- **Prioritize Issues:** Categorize feedback into bugs, enhancements, and future features
- **Bug Fixes:** Address any critical bugs discovered during demos (target: 1–2 weeks)
- **Enhancement Implementation:** Implement high-impact, low-effort improvements based on feedback

#### Go/No-Go Decision (Week 10)
- **Evaluation Criteria:**
  - Technical feasibility confirmed (audio sync, PWA offline, cross-browser compatibility)
  - Stakeholder enthusiasm and willingness to invest further
  - Market validation through competitor analysis and user persona alignment
  - POC demonstrates unique value proposition vs. existing apps
- **Decision Makers:** Product owner, key stakeholders, development team
- **Outcomes:**
  - **Go:** Proceed to public release roadmap
  - **No-Go:** Archive POC, document lessons learned, potentially repurpose components for other projects

### Public Release Roadmap (If Approved)

#### Phase 4 — MVP Public Release (Months 1–3)
- **Backend Addition:** Implement user accounts with OAuth (Google, Apple), cloud-synced saved matches, cross-device sync
- **Analytics Integration:** Replace console logging with Plausible Analytics or Google Analytics 4 with privacy consent
- **Monetization:** Add ad integration during breaks (replace placeholder banner)
- **Marketing:** App store listings, social media presence, boxing community outreach
- **Support:** Basic email support, FAQ page, user guide improvements

#### Phase 5 — Feature Expansion (Months 4–6)
- **Advanced Features:** Custom combo builder, workout history dashboard, heart rate integration
- **Content:** Video tutorials, form correction guides, additional music tracks
- **Platforms:** Native iOS/Android apps if web PWA proves insufficient
- **Community:** User forums, sharing features, leaderboards

#### Phase 6 — Scale & Optimize (Months 7–12)
- **Performance:** Optimize for global users, implement CDN for assets
- **Business Model:** Subscription tiers, premium features, partnerships with gyms/fitness brands
- **Internationalization:** Multi-language support, localized content
- **Advanced Analytics:** User behavior insights, retention metrics, A/B testing framework

### Long-Term Vision (1–2 Years)

- **Ecosystem Expansion:** Many Rounds as a platform for various training modalities (MMA, kickboxing, fitness classes)
- **Hardware Integration:** Partnerships with wearable manufacturers for seamless HR/biomarker tracking
- **AI Personalization:** Machine learning to adapt combos based on user performance and preferences
- **Community Features:** Social challenges, trainer-led virtual classes, user-generated content
- **Enterprise:** B2B solutions for gyms, boxing clubs, and training facilities

### Risk Mitigation for Public Release

- **Technical Risks:**
  - Audio sync issues at scale → Implement comprehensive audio testing suite
  - PWA limitations on iOS → Monitor adoption rates, consider hybrid app if needed
  - Performance on low-end devices → Establish minimum device requirements, optimize bundle size

- **Business Risks:**
  - Low user adoption → Focus on niche boxing community, leverage influencers
  - Competition → Differentiate through unique PWA approach and elite aesthetic
  - Monetization challenges → Start with freemium model, validate willingness to pay

- **Operational Risks:**
  - Support burden → Implement self-service resources, community forums
  - Content maintenance → Establish process for regular music/combo updates
  - Legal/compliance → Address GDPR, accessibility, content licensing upfront

### Success Metrics for Public Release

- **User Acquisition:** 10,000 downloads in first 6 months, 50% from organic search/social
- **Engagement:** Average session duration >15 minutes, retention rate >30% at 7 days
- **Monetization:** Achieve positive ROI within 12 months through ads/subscriptions
- **Technical:** <1% crash rate, >95% user satisfaction in app store reviews
- **Business:** Positive stakeholder ROI, path to profitability established

### Contingency Plans

- **If Public Release Fails:** Pivot to B2B gym software, sell as white-label solution, or open-source core components
- **If Technical Issues Persist:** Rebuild with native frameworks (React Native), abandon PWA approach
- **If Market Unresponsive:** Repurpose as internal training tool for organizations, focus on enterprise sales

---

## 24. Open Questions

### Technical Questions

1. **Web Audio API Reliability:** How consistent is Web Audio API timing across different devices and browsers? Do we need fallback mechanisms for older devices?

2. **iOS PWA Limitations:** What are the exact limitations of PWAs on iOS (push notifications, background processing, storage)? How might this impact long-term user experience?

3. **Audio File Optimization:** What's the optimal balance between audio quality and file size for voice callouts? Should we use variable bitrate encoding?

4. **Service Worker Caching Strategy:** How do we handle cache invalidation when updating audio assets? What's the best approach for lazy-loading voice profiles?

5. **Wake Lock API Compatibility:** How reliable is the Wake Lock API across Android manufacturers? Do we need device-specific handling?

6. **Performance on Low-End Devices:** What happens on devices with limited RAM/storage? How do we gracefully degrade features?

### Product Questions

7. **User Acquisition Strategy:** How do we reach boxing enthusiasts who aren't already using fitness apps? What's the most effective marketing channel?

8. **Monetization Model:** Ads during breaks vs. subscription vs. freemium? What's the user willingness to pay for premium features?

9. **Content Expansion:** Should we add more sports (kickboxing, MMA) or stick to pure boxing? How do we source additional combo libraries?

10. **Accessibility Requirements:** Do we need full screen reader support for active training sessions, or is visual/audio sufficient?

11. **International Markets:** Which languages should we prioritize for localization? How do we handle sport-specific terminology?

### Business Questions

12. **Competitive Differentiation:** Beyond the PWA approach, what unique features can we develop that competitors can't easily copy?

13. **Partnership Opportunities:** Which boxing gyms, influencers, or equipment brands would be valuable partners?

14. **Scalability Concerns:** If the app becomes popular, how do we handle increased hosting costs and support demands?

15. **Legal/Regulatory:** What additional compliance is needed for public release (privacy policies, terms of service, age ratings)?

### Operational Questions

16. **Support Model:** For a free app, what's the appropriate level of customer support? Email only, or community forums?

17. **Update Frequency:** How often should we release updates? What's the balance between new features and stability?

18. **Asset Maintenance:** Who manages ongoing content updates (new music, combos)? How do we ensure quality control?

19. **Analytics Depth:** What user data do we need to collect for product improvement vs. privacy concerns?

20. **Team Expansion:** If the POC succeeds, what roles do we need to hire first (designer, additional developer, marketer)?

### Stakeholder Questions

21. **Success Criteria:** What specific outcomes would make this POC successful in the stakeholders' eyes?

22. **Budget for Next Phase:** If approved, what's the budget available for MVP development and launch?

23. **Timeline Expectations:** What's the acceptable timeline for public release if the POC is approved?

24. **Risk Tolerance:** How much technical/business risk are stakeholders willing to accept for this venture?

25. **Success Metrics:** What KPIs matter most for evaluating the public product's success?

---

## 25. Appendix

### Calorie Estimation Formula Details

The calorie estimation uses the following MET (Metabolic Equivalent of Task) values based on exercise intensity:

- **MET Formula:** Calories = MET × Weight(kg) × Time(hours)
- **Assumed Weight:** 70kg (154 lbs) — average adult weight
- **MET Values by Difficulty:**
  - Beginner: 5.5 MET (light effort shadowboxing)
  - Up-and-Comer: 7.8 MET (moderate boxing training)
  - Champ: 9.5 MET (vigorous boxing training with defensive moves)

**Example Calculations:**

- 5 rounds × 2 minutes = 10 minutes active time at Beginner difficulty
- Calories = 5.5 × 70 × (10/60) = 64.17 ≈ 64 calories

- 3 rounds × 3 minutes = 9 minutes active time at Champ difficulty
- Calories = 9.5 × 70 × (9/60) = 99.75 ≈ 100 calories

**Notes:**
- Only active round time is counted (breaks excluded)
- Formula is an approximation and should be clearly marked as such
- Future versions could allow user weight input for more accuracy

### Combo Library Examples

**Beginner Combos (2–3 punches, simple):**
- 1-2 (Jab-Cross)
- 1-1-2 (Double Jab-Cross)
- 1-2-1 (Jab-Cross-Jab)
- 2-1-2 (Cross-Jab-Cross)

**Up-and-Comer Combos (3–5 punches, all numbers):**
- 1-2-3 (Jab-Cross-Hook)
- 1-2-3-2 (Jab-Cross-Hook-Cross)
- 1-2-5-2 (Jab-Cross-Uppercut-Cross)
- 1-6-3-2 (Jab-Rear Uppercut-Hook-Cross)
- 3-2-3 (Hook-Cross-Hook)
- 1-2-3-4 (Jab-Cross-Hook-Rear Hook)
- 5-2-3-2 (Uppercut-Cross-Hook-Cross)
- 1-1-2-3-2 (Double Jab-Cross-Hook-Cross)

**Champ Combos (4–6 moves, includes defense):**
- 1-2-SLIP-2-3 (Jab-Cross-Slip-Cross-Hook)
- 1-2-3-ROLL-2-3 (Jab-Cross-Hook-Roll-Cross-Hook)
- 1-2-BLOCK-5-6-3 (Jab-Cross-Block-Uppercut-Rear Uppercut-Hook)
- SLIP-2-3-4-STEP BACK-1 (Slip-Cross-Hook-Rear Hook-Step Back-Jab)

### Audio File Specifications

**Voice Callouts:**
- Format: MP3, 128kbps bitrate
- Sample Rate: 44.1kHz
- Channels: Mono
- Duration: 1–3 seconds per file
- Volume: Normalized to -3dB peak

**Bell Sounds:**
- Round Start Bell: Single ding, ~1.5s
- Warning Bell: Double ding or distinct tone, ~2s
- Final Bell: Multi-ring sequence, ~4–6s
- Break Beep: Short sharp beep, ~0.3s

**Background Music:**
- Format: MP3, 128–192kbps
- Duration: 3–5 minutes (loopable)
- Genre: Instrumental only (Rock, Metal, Rap)
- Volume: Mixed to complement voice callouts

### Browser Support Matrix

| Browser | Version | Status | Notes |
|---------|---------|--------|-------|
| Chrome Mobile | 88+ | ✅ Supported | Primary Android target |
| Safari iOS | 14.5+ | ✅ Supported | Primary iOS target, audio restrictions |
| Firefox Mobile | 85+ | ⚠️ Limited | PWA install not supported |
| Edge Mobile | 88+ | ✅ Supported | Same as Chrome |
| Chrome Desktop | 88+ | ✅ Supported | Development and testing |
| Safari Desktop | 14+ | ✅ Supported | Mac development |
| Firefox Desktop | 85+ | ⚠️ Limited | PWA install not supported |
| Edge Desktop | 88+ | ✅ Supported | Windows development |

### Color Palette Hex Values

| Token | Hex | Usage |
|-------|-----|-------|
| Oxblood | #4A0E0E | Primary buttons, active states |
| Deep Oxblood | #2D0808 | Hover states, dark accents |
| Warm Oxblood | #6B1A1A | Secondary buttons |
| Beige | #F5F0E8 | Text on dark, secondary surfaces |
| Warm Tan | #D4C9B8 | Borders, dividers |
| Gold | #C9A84C | CTAs, highlights, belt |
| Near Black | #1A1A1A | Primary backgrounds |
| True Dark | #0D0D0D | Gradient stops |
| Dark Gray | #2A2A2A | Cards, surfaces |
| Off White | #F5F0E8 | Primary text |
| Muted Beige | #A89F91 | Secondary text |
| Green | #4CAF50 | Success states |
| Red | #E53935 | Errors, stop button |
| Amber | #FFC107 | Warning states |

### File Structure Reference

```
many-rounds/
├── index.html                    # SPA entry point
├── manifest.json                 # PWA manifest
├── sw.js                         # Service worker
├── favicon.ico                   # Favicon
├── css/
│   ├── bootstrap-custom.css      # Bootstrap overrides
│   ├── styles.css                # App styles
│   └── animations.css            # Keyframe animations
├── js/
│   ├── app.js                    # Main app logic
│   ├── timer.js                  # Timer management
│   ├── combo-engine.js           # Combo generation
│   ├── audio-engine.js           # Web Audio API
│   ├── storage.js                # localStorage wrapper
│   ├── ui.js                     # DOM manipulation
│   └── wake-lock.js              # Wake Lock API
├── audio/
│   ├── voices/
│   │   ├── male-encouraging/
│   │   │   ├── 1-jab.mp3
│   │   │   └── ... (21 more)
│   │   └── ... (7 more profiles)
│   ├── bells/
│   │   ├── round-start.mp3
│   │   ├── warning.mp3
│   │   ├── final-bell.mp3
│   │   └── beep.mp3
│   └── music/
│       ├── rock.mp3
│       ├── metal.mp3
│       └── rap.mp3
├── img/
│   ├── logo.svg                  # Main logo
│   ├── hero-boxer.jpg            # Homepage image
│   ├── title-belt.svg            # Session complete
│   └── icons/                    # PWA icons
└── README.md                     # Documentation
```

### Development Checklist

**Pre-Development:**
- [ ] Audio assets sourced/generated
- [ ] Hero image and logo created
- [ ] Bootstrap theme customized
- [ ] GitHub repo initialized

**Phase 1 Development:**
- [ ] Homepage with branding
- [ ] Navigation menu
- [ ] Create a Match screen
- [ ] Timer engine
- [ ] Combo engine
- [ ] Audio engine (Web Audio API)
- [ ] Visual combo display
- [ ] Break screen animation
- [ ] Session complete screen
- [ ] Pause/stop functionality
- [ ] Wake Lock integration
- [ ] Responsive layouts
- [ ] Integration testing

**Phase 2 Development:**
- [ ] Background music integration
- [ ] localStorage save/load
- [ ] Saved Matches screen
- [ ] Settings page
- [ ] Punch reference popover
- [ ] All 8 voice profiles
- [ ] Integration testing

**Phase 3 Development:**
- [ ] Service worker (offline)
- [ ] PWA manifest and install
- [ ] How to Use page
- [ ] About page
- [ ] Ad placeholder
- [ ] Cross-browser testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Visual polish
- [ ] Final testing

### Stakeholder Demo Script

**Introduction (2 minutes):**
- Overview of Many Rounds concept
- POC scope and goals
- Quick demo of homepage and branding

**Core Features Demo (10 minutes):**
- Quick Match flow end-to-end
- Create a Match configuration
- Show Beginner vs. Champ difficulty differences
- Demonstrate pause/resume functionality
- Show session complete screen with stats

**Technical Highlights (5 minutes):**
- PWA offline functionality
- Responsive portrait/landscape layouts
- Audio sync and voice callouts
- Background music integration

**Q&A and Feedback (8 minutes):**
- Open discussion
- Collect feedback on UX, features, technical feasibility
- Discuss next steps

**Total Time:** 25 minutes

### Risk Assessment Matrix

| Risk | Probability | Impact | Risk Level | Mitigation |
|------|-------------|--------|------------|------------|
| iOS audio issues | High | High | Critical | Test extensively, implement fallbacks |
| Voice production delays | Medium | High | High | Start immediately, have backup plan |
| Combo engine illogical sequences | Medium | Medium | Medium | Curated library, user testing |
| Audio sync drift | Medium | High | High | Web Audio API scheduling |
| Music masking voice | Medium | Medium | Medium | Gain mixing, testing |
| Animation performance | Low | Medium | Low | GPU acceleration, fallbacks |
| localStorage loss | Medium | Low | Low | User education, graceful handling |
| Poor music quality | Medium | Medium | Medium | Multiple sources, auditioning |
| Service worker stale cache | Low | Medium | Low | Versioning, update prompts |
| Landscape layout issues | Medium | Low | Low | Extensive device testing |
| SPA routing on GitHub Pages | Medium | Low | Low | Hash-based routing |
| Inaccurate calorie estimates | Low | Low | Low | Clear disclaimers |
| Slow audio preloading | Medium | Medium | Medium | Progress indicators, caching |
| Web Audio API unsupported | Low | High | Medium | Feature detection, fallbacks |
| Stakeholder expectations | Medium | Medium | Medium | Clear scope communication |

### Version History

- **v1.0:** Initial PRD draft with core sections 1–14
- **v1.1:** Added sections 15–25, comprehensive technical architecture, testing plan, and post-launch roadmap

---

*End of Product Requirements Document v1.1*


