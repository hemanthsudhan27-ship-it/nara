# Website Build Prompt: Team NARA

Copy everything below into your AI coding agent (Claude Code, Cursor, v0, etc.).

---

## Prompt

Build a single-page, responsive marketing website for **Team NARA**, a Parkour / Freerunning / Tricking community based in Calicut, Kerala. Use HTML/CSS/JS (or React + Tailwind if that's your default stack) — one clean, production-ready site, mobile-first, with smooth scroll and subtle hover/scroll-reveal animations.

### Brand & Design System

- **Vibe:** Gritty, athletic, editorial street-sport brand. High-contrast photography, bold condensed headlines, handwritten annotations as accents.
- **Colors:**
  - Orange accent: `#F4571E` (primary CTA/highlight color)
  - Near-black: `#141414` (dark section backgrounds, footer)
  - Off-white/cream: `#F5F3EF` (light section backgrounds)
  - White: `#FFFFFF` and near-black text `#141414` for body copy
- **Typography:**
  - Headlines: bold, tight-tracking, condensed/grotesk sans-serif (e.g. Archivo Black, Anton, or similar) — used huge and heavy (e.g. "TEAM NARA")
  - Body: clean grotesk sans-serif (e.g. Inter, Helvetica Neue)
  - Eyebrow labels: small, uppercase, letter-spaced, orange (e.g. "TRAIN WITH US", "WHAT WE DO")
  - Handwritten/script accent font for callout notes (e.g. "MOVEMENT PEOPLE A BETTER TOMORROW"), each underlined with a loose hand-drawn orange squiggle/line
- **Buttons:** solid orange with white text + arrow icon (primary), and black-outline transparent (secondary)
- **Imagery:** moody, slightly desaturated action/lifestyle photography of people training outdoors — promenades, beaches, sunset/dusk light, urban Calicut backdrops. Use placeholder images (unsplash-style sports/parkour/silhouette photos) where real photos aren't supplied.

### Site Structure

**1. Header (sticky/transparent-over-hero)**
- Logo "NARA" (orange, bold) top-left
- Nav: Home, About, Sessions, Community, Contact
- Orange "Join a Session" button top-right
- Collapse to hamburger menu on mobile

**2. Hero Section**
- Full-bleed dark background photo of a group doing parkour on a seaside plaza at sunset
- Small uppercase label stack top-left: "PARKOUR / FREERUNNING / TRICKING / CALICUT, KERALA"
- Massive headline: "TEAM" (white) / "NARA" (orange) stacked
- Tagline: "ADAPT. EVOLVE. KEEP MOVING." (letter-spaced caps)
- Two buttons: "Join a Session →" (solid orange), "Contact Us" (outline)
- Handwritten accent text on the right: "MOVEMENT PEOPLE A BETTER TOMORROW" with underline

**3. "Outdoor Parkour Sessions" (light section)**
- Eyebrow: "TRAIN WITH US"
- Headline: "OUTDOOR PARKOUR SESSIONS"
- Two short paragraphs: sessions run outdoors in Calicut, open to anyone who wants to learn parkour, build strength and movement skill; no experience required, they meet people where they're at
- Orange button: "Register for a Session"
- Right: photo of a person running along a palm-lined seaside path, foggy morning light
- Handwritten accent: "CALICUT MOVES DIFFERENTLY"
- Row of 3 icon + label stats below: Location — Calicut Beach · Sessions — Regular outdoor sessions · Level — Beginners to experienced practitioners

**4. "What We Do" (dark section)**
- Eyebrow: "WHAT WE DO", right-aligned label "MOVEMENT IN MANY FORMS"
- 5-column grid (stack on mobile), each with a photo, number tag (01–05), title, one-line description:
  1. **Parkour** — Learn to move through your environment with better control, strength, coordination and awareness.
  2. **Freerunning** — Explore movement through flow, creativity, style and expression.
  3. **Tricking** — A dynamic combination of kicks, spins, flips and martial-arts-inspired movement.
  4. **Workshops** — Special training sessions conducted for groups, schools, communities and events.
  5. **Community** — A place to train, meet people, learn together and keep moving.

**5. "A Community That Moves" (light section)**
- Eyebrow: "MORE THAN JUST TRAINING"
- Headline: "A COMMUNITY THAT MOVES"
- Body copy: NARA started as a simple idea — people coming together to move; grew into a community connected by parkour, freerunning, tricking and a shared love of movement; you don't need a fancy facility, just a little space, the right people and a reason to try
- Right: photo of 4 people from behind, silhouetted, looking out at the ocean at sunset
- Handwritten accent: "SAME CITY BIGGER MOVEMENT"

**6. "Who Can Join?" (split 3-column band)**
- Left: dark photo, one person carrying another piggyback-style near the water at dusk
- Center: headline "WHO CAN JOIN?", copy explaining anyone willing to learn can join — no prior strength/flexibility needed, sessions are progression-based, come as you are — orange "Join a Session" button
- Right: dark textured photo/wall with bold white graffiti-style text "PROGRESS TOGETHER"

**7. Gallery (dark section)**
- Eyebrow: "GALLERY"
- Headline: "MOVEMENT IN CALICUT" (white, underlined accent)
- Horizontal row of 5 square action-shot thumbnails (grid/scroll on mobile)
- "View More →" link, bottom right

**8. CTA Banner (full-width solid orange)**
- Small label: "JOIN A SESSION"
- Large headline: "START MOVING WITH US." with arrow icon
- Right side: list — Calicut Beach / Real People / Real Movement — plus Instagram icon + handle "@teamnara.in"

**9. Footer (dark)**
- "NARA" logo (orange)
- Tagline: "Parkour • Freerunning • Tricking / Calicut, Kerala"
- Nav links repeated: Home, About, Sessions, Community, Contact
- Small tagline: "Adapt. Evolve. Keep Moving."
- Copyright line: "© 2026 Team NARA. All rights reserved."

### Interaction & Responsive Notes

- Smooth-scroll anchor navigation from header links to sections
- Subtle fade/slide-up reveal on scroll for section content
- Buttons have hover states (slight scale/darken)
- Fully responsive: stack all multi-column sections to single column on mobile, hamburger nav, gallery becomes horizontal scroll or 2-column grid
- Use semantic HTML5 and accessible markup (alt text, proper heading hierarchy, focus states)

Build it as a complete, ready-to-run project with all sections populated using the placeholder copy above, ready to swap in real photography later.