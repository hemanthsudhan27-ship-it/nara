# Website Changes Report
A detailed list of all changes, adjustments, and tweaks made to the website since the initial commit.

### Global, SEO, and Styling Tweaks
* **Font Change:** Changed the main "TEAM NARA" font to `Montserrat`.
* **Styling Removal:** Removed glassmorphism (frosted glass) visual effects from background components.
* **SEO Data:** Added comprehensive SEO metatags, a `robots.txt` file, and a `sitemap.xml`.
* **Accessibility:** Added `alt` text to images and JSON-LD schemas for better search engine readability.
* **Internal Routing:** Added internal links between pages and set up 301 redirects so `/what-we-do` and `/community` URLs automatically redirect to the `/about` page.
* **File Tracking:** Ignored test uploads in the repository.

### Navigation and Footer Adjustments
* **Logo Tweak:** Removed the word "Calicut" from the navbar logo.
* **Link Reductions:** Reduced the main navigation links from 7 down to 4 (Sessions, About, Gallery, Contact), and later removed the "Sessions" link entirely for a cleaner look.
* **Gallery Link:** Removed access to the Gallery page from both the top navigation bar and the footer.
* **Footer Clean-up:** Removed a large block of SEO keyword text ("SEO keyword dump") from the bottom of the footer.

### Home and Landing Page Modifications
* **Splash Screen:** Removed the initial splash screen that used to appear when the website loaded.
* **Hero Image & Text:** Updated the main hero landing image, adjusted the hero layout, and tweaked the hero text. Left-aligned the text that sits over the background image.
* **Hero Slimming:** Removed the repeated statistics strip and the "How It Works" block directly from the Hero section.
* **Component Swap:** Replaced the `WhoCanJoin` component with a new, reusable `TestimonialsStrip` (which supports dark and light themes).
* **Content Reordering:** Reordered the flow of the homepage to: Hero -> Sessions -> WhatWeDo -> Community -> Testimonials -> Gallery -> CTA.
* **Button Clean-up:** Removed repetitive Call-to-Action (CTA) buttons scattered across the homepage.

### Registration and Trial Session Flow
* **Pricing:** Introduced a Trial Session workflow with the fee explicitly set to ₹500.
* **Form Fields:** Added an "Age" field and a mandatory "risk awareness" checkbox to the registration modal.
* **Payment Step:** Removed the UPI/payment step directly from the initial Register modal, marking those fields as legacy/optional in the code.
* **Redirect Logic:** Changed the submit action so it redirects users directly to WhatsApp instead of showing a confirmation.
* **API Tweaks:** Removed the "see you in class" text from the backend API route and fixed a bug regarding missing `FormData` properties.

### Contact and Payment Details
* **Number Update:** Updated the phone and WhatsApp number to `+91 85939 12936`.
* **QR Modal:** Added a click-to-expand modal for the Contact QR code.
* **UPI Details:** Updated the UPI payment QR code asset and the VPA address.

### About, Coaches, and Sessions Pages
* **About Page Overhaul:** Expanded the About page into a 3-tab layout (absorbing the old "What We Do" and "Community" content) and added a new background image layout.
* **Trainer Titles:** Updated the coach title from "Certified Trainer" to "Experienced Trainer" and streamlined coach branding.
* **Coaches Page:** Added a dedicated Coaches page highlighting Coach Renjith (Batch 1: Wandru) and Coach Nithin.
* **Positioning Tweaks:** Adjusted the positioning and layout of photos and text specifically within the Coaches section.
* **Sessions Page Refinements:** Removed redundant 3-icon stat cards at the bottom, added a "How It Works" section, compacted the "Training Spots" view, and inserted testimonials before the FAQ.
* **Image Update:** Changed the Outdoor Calicut location image specifically to `IMG_2993`.

### Gallery
* **Redesign:** Completely replaced the previous gallery image carousel with a 3x3 Instagram-style image grid.
* **Scroll Interactions:** Added a floating "Join" pill that appears when scrolling down the gallery.
* **Link Upgrade:** Upgraded the cross-link in the gallery to act as a modal trigger rather than a standard link.

### Mobile Responsiveness Fixes
* Fixed specific mobile layout and spacing bugs in the `AboutClient` component.
* Fixed mobile responsiveness in the `CommunityClient` section.
* Adjusted the width and spacing of the `RegisterModal` for small screens.
* Fixed mobile alignment issues in the `Hero` and `WhatWeDo` sections.
