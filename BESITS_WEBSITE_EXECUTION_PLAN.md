# BESITS Website — Structured Execution Plan

**Client:** BESITS — Berntecho Electronic Security & I.T Solutions
**Slogan:** *Anything IT, We fix it.*
**Location:** Afienya, Ghana | **Phone:** +233 243 543 893 | **Email:** berntechco.boa@gmail.com
**Builder:** Namecheap Website Builder
**Last Updated:** 2026-03-27

---

## PHASE 0 — Brand Foundation

### Revised Color Palette
> Derived from the actual BESITS logo (orange + black bear, not blue).

| Role | Color | Hex |
|---|---|---|
| Background (dark) | Near-black charcoal | `#111827` |
| Background (light sections) | Off-white | `#F9FAFB` |
| Primary accent | BESITS Orange | `#E8591A` |
| Hover / highlight | Amber orange | `#F97316` |
| Body text (dark bg) | Light gray | `#D1D5DB` |
| Body text (light bg) | Dark gray | `#374151` |
| Headings | White / near-black | `#FFFFFF` / `#111827` |
| Borders / dividers | Subtle gray | `#374151` |

> **Note:** Avoid deep blue — it conflicts with the orange/black logo identity. Use charcoal dark sections and clean white sections alternately for contrast rhythm (see scr3.webp inspiration).

### Typography
- **Headings:** Inter Bold / Poppins Bold (700–800 weight)
- **Subheadings:** Inter SemiBold (600)
- **Body:** Inter Regular (400), line-height 1.7
- **Accent labels / tags:** Inter Medium, uppercase, letter-spacing 0.1em

### Logo Usage
| Context | File |
|---|---|
| Navbar (compact) | `MEDIA/BESITS LOGO.png` |
| Footer / wide contexts | `MEDIA/FULL LOGO.png` |

---

## PHASE 1 — Global Layout Components

### 1.1 Top Info Bar
- Thin bar above navbar (~36px height)
- Background: `#E8591A` (orange) OR `#111827` (charcoal)
- Left: `📞 +233 243 543 893` · `✉ berntechco.boa@gmail.com` · `📍 Afienya, Ghana`
- Right: Slogan — *"Everything IT, We fix it."* (italic, white)
- Hide on mobile (collapses into hamburger menu footer)

### 1.2 Sticky Navigation Bar
- Background: White with bottom shadow on scroll
- Logo: `MEDIA/BESITS LOGO.png` (left)
- Nav links: Home · About · Services · Shop · Training · FAQ · Contact
- CTA button: **"Get a Quote"** — orange fill, white text
- Mobile: Hamburger menu, full-screen slide-in drawer
- Active link: orange underline indicator

### 1.3 Footer
- 4-column layout:
  1. **Brand** — Full logo + tagline + short description (1 sentence)
  2. **Quick Links** — Home, About, Services, Training, Shop, FAQ, Contact
  3. **Contact Info** — Phone, email, address, business hours
  4. **Stay Connected** — Social icons (Facebook, Instagram, WhatsApp, LinkedIn) + newsletter email field
- Bottom bar: `© 2024 BESITS — Berntecho Electronic Security & I.T Solutions. All rights reserved.`
- Background: `#111827`, text: light gray

---

## PHASE 2 — Page-by-Page Build

---

### PAGE 1: HOME

#### Section 1 — Hero Slider
- Full-width, min-height 90vh
- 4 slides, auto-rotate every 5s, fade or slide transition
- Overlay: dark gradient (left to right) over image for text legibility
- Each slide structure:
  - **Tag label** (orange pill): e.g., "Security Solutions"
  - **Headline** (60–72px, bold white)
  - **Subtext** (18px, light gray, max 2 lines)
  - **CTA buttons**: Primary (orange fill) + Secondary (white outline)

| Slide | Headline | Subtext | CTA 1 | CTA 2 | Image |
|---|---|---|---|---|---|
| 1 | Protect What Matters Most | Professional CCTV & security installations for homes and businesses. | Explore Services | Get a Quote | Web image: CCTV camera on building |
| 2 | Smart Homes, Smarter Living | Automate, monitor, and secure your space from anywhere. | Smart Home Solutions | Contact Us | Web image: modern smart home |
| 3 | Join Our Hands-On Training | Real installations. Real skills. Certified results. | Join Training | Learn More | Web image: technician installing equipment |
| 4 | Your One-Stop IT Partner | From networks to POS systems — we fix it all. | Shop Now | Our Services | `MEDIA/CCTV.jpg` |

> **Images needed (web-sourced or generated):** Slides 1–3. Use Unsplash/Pexels: search "CCTV installation", "smart home automation", "security technician training".

---

#### Section 2 — Trusted Brands / Partner Logos
- Title: **"Brands We Work With"**
- Subtitle: *"We install and support only certified, industry-leading equipment."*
- Horizontal auto-scrolling logo strip (infinite loop)
- All logos available in MEDIA folder:

| Logo | File |
|---|---|
| Hikvision | `MEDIA/HIKVISION.png` |
| Dahua Technology | `MEDIA/DAHUA.png` |
| Grenton | `MEDIA/GRENTON.png` |
| Trikidis | `MEDIA/TRIKIDIS.png` |
| Yonusa | `MEDIA/YONUSA.png` |
| Camect | `MEDIA/CAMECT.png` |

- Style: grayscale logos, orange tint on hover, white background strip

---

#### Section 3 — About Preview
- 2-column: Left = image, Right = text
- **Image:** Web image — professional team or office tech environment
- **Text:**
  - **Tag:** "About BESITS"
  - **Headline:** "Ghana's Trusted Security & IT Partner Since 2017"
  - **Body:** We are a dedicated team of security and IT professionals based in Afienya, Ghana. Since our founding in 2017, we've been delivering reliable, affordable, and professional solutions to homes, businesses, and organizations across the region.
  - **Stat pills** (3 icons): `7+ Years Experience` · `500+ Installations` · `100% Certified`
  - **CTA:** "Learn More About Us" (orange button)

---

#### Section 4 — Services Preview
- Section tag: "What We Do"
- Headline: **"Comprehensive Security & IT Solutions"**
- 3×2 card grid (6 cards), dark card on light background
- Each card: Icon (SVG/Font Awesome) + Service name + 1-line description + "Learn More" link

| # | Service | Icon |
|---|---|---|
| 1 | CCTV Installation | Camera icon |
| 2 | Electric Fencing | Zap/fence icon |
| 3 | GPS Tracking | Map pin icon |
| 4 | Smart Home Solutions | Home + wifi icon |
| 5 | Solar Systems | Sun icon |
| 6 | General IT Services | Monitor icon |

- Bottom CTA: **"View All Services →"** (orange text link + button)

---

#### Section 5 — Training Preview
- Dark background section (`#111827`)
- 2-column: Left = text, Right = image
- **Image:** `MEDIA/FAQ.jpg` or web image of training session
- **Text:**
  - **Tag:** "Hands-On Training"
  - **Headline:** "Learn From Real Installations"
  - 3 checkpoints:
    - ✓ Practical, real-world training
    - ✓ Certified on completion
    - ✓ Expert instructors with field experience
  - **CTA:** "View Training Programs" (orange button)

---

#### Section 6 — Shop Preview
- Light background
- Tag: "Our Shop"
- Headline: **"Buy Directly From Us"**
- 3 product cards (placeholder or from `MEDIA/SHOP.jpg` cropped):
  - Product image + Name + Price (GHS) + "Add to Cart" button
- Example products: CCTV Starter Kit, GPS Tracker, Electric Fence Kit
- **CTA:** "Visit Our Full Shop →"

---

#### Section 7 — FAQ Preview (Accordion)
- Dark section
- Headline: **"Frequently Asked Questions"**
- 3 accordion items (collapsed by default):
  1. What services does BESITS offer?
  2. Do you provide installation after purchase?
  3. How can I register for training?
- **CTA:** "See All FAQs →"

---

#### Section 8 — Call to Action Banner
- Full-width, orange background (`#E8591A`) OR dark with orange gradient
- **Headline:** "Ready to Secure Your Home or Business?"
- **Subtext:** "Get in touch today for a free consultation and quote."
- **Buttons:**
  - "Contact Us" (white fill, orange text)
  - "Get a Quote" (white outline)
- Optional: background pattern — diagonal lines or circuit-board SVG overlay at low opacity

---

### PAGE 2: ABOUT

| Section | Content |
|---|---|
| Page Hero | Title: "About BESITS" · Breadcrumb · Background: dark + orange overlay or `MEDIA/CCTV.jpg` |
| Company Overview | Founded 2017 · Afienya, Ghana · Mission to deliver reliable, affordable security & IT solutions |
| Mission | "To provide accessible, world-class security and IT solutions that protect lives, assets, and businesses across Ghana." |
| Vision | "To become West Africa's most trusted security and technology company — reducing crime, preventing losses, and building digital confidence." |
| Core Values | 4 icon cards: **Integrity** · **Reliability** · **Customer Satisfaction** · **Affordability** |
| Why Choose Us | 4 feature tiles: Licensed & Certified · Affordable Pricing · 24/7 Support · Experienced Team |
| Stats Strip | 7+ Years · 500+ Clients · 11+ Services · 2 Training Programs |
| Team / CEO (Optional) | Photo + Name + Role + short bio. Use placeholder if not ready. |

---

### PAGE 3: SERVICES

- Page hero: "Our Services" + subtitle
- Intro paragraph
- 11 service cards in 3-column grid:

| Service | Image/Icon | Description |
|---|---|---|
| CCTV Installation | `MEDIA/CCTV.jpg` / icon | Supply & install HD/IP surveillance systems for homes and businesses |
| Electric Fencing | Web image | High-voltage perimeter security systems with alarm integration |
| GPS Tracking | Web image | Real-time vehicle and asset tracking solutions |
| Smart Home Solutions | Web image | Lighting, locks, cameras, and appliances controlled from your phone |
| Gate Automation | Web image | Automated sliding and swing gate systems |
| Solar Installation | Web image | Off-grid and hybrid solar systems for homes and offices |
| Access Control | Web image | Biometric, card, and PIN-based access systems |
| POS Systems | Web image | Point-of-sale hardware and software setup for retail businesses |
| Intruder Detection | Web image | Motion sensors, alarm panels, and siren systems |
| Electrical Wiring | Web image | Safe, code-compliant electrical installations |
| General IT Services | Web image | Networking, hardware repair, software, and support |

Each card: Image top → Service name → Description → **"Request Service"** orange button

> **Web images needed:** Electric fence, GPS tracker device, smart home, gate automation, solar panels, access control keypad, POS terminal, intruder alarm, electrical wiring, IT/networking.
> Search Unsplash/Pexels with those terms.

---

### PAGE 4: SHOP

- Store categories (tabs or sidebar):
  - CCTV Kits
  - Electric Fence Kits
  - GPS Devices
  - Access Control
  - Solar Accessories
  - IT Accessories
- Product card template: Image · Name · Price (GHS) · Short description · "Add to Cart" / "Request Quote"
- Use Namecheap's built-in store module
- Hero banner: `MEDIA/SHOP.jpg`
- Note: Enable "Request a Quote" as checkout fallback if payment gateway not set up yet

---

### PAGE 5: TRAINING

#### Overview Section
- Headline: "Practical Training for Security Professionals"
- Subtext: Build real skills with hands-on, certified training programs led by experienced field technicians.

#### Training Cards (2 programs)

**Program 1 — GPS Tracking Training**
| Field | Detail |
|---|---|
| Duration | TBD (fill in) |
| Location | Afienya, Ghana |
| Fee | TBD (fill in) |
| Certificate | Yes — on completion |
| Description | Learn to install, configure, and manage GPS tracking devices for vehicles and assets. |

**Program 2 — Electric Fencing Training**
| Field | Detail |
|---|---|
| Duration | TBD (fill in) |
| Location | Afienya, Ghana |
| Fee | TBD (fill in) |
| Certificate | Yes — on completion |
| Description | Hands-on installation of electric fence systems including energizers, wiring, and alarm integration. |

#### Registration Form
Fields:
- Full Name (required)
- Phone Number (required)
- Email Address (required)
- Training Type (dropdown: GPS Tracking / Electric Fencing)
- Preferred Start Date (date picker)
- Message / Special Requirements (textarea)
- Submit button: **"Register Now"** (orange)

---

### PAGE 6: FAQ

- Page hero: "Frequently Asked Questions"
- Full accordion layout, grouped into categories:

**General**
1. What services does BESITS offer?
2. Where are you located?
3. What are your business hours?

**Installations & Support**
4. Do you provide installation after purchase?
5. Do you offer support or maintenance after installation?
6. How long does a typical installation take?

**Shop & Products**
7. Do you sell devices and equipment?
8. Can I get a product demonstration before buying?

**Training**
9. How do I register for training?
10. Is a certificate issued after training?
11. Do I need prior experience to join?

- Use `MEDIA/FAQ.jpg` as section background or side image

---

### PAGE 7: CONTACT

| Section | Content |
|---|---|
| Page Hero | "Get In Touch" · dark background with orange accent line |
| Contact Info Strip | 3 cards: Phone (`+233 243 543 893`) · Email (`berntechco.boa@gmail.com`) · Location (`Afienya, Ghana`) |
| Contact Form | Full Name · Phone · Email · Subject · Message · "Send Message" (orange button) |
| Business Hours | Mon–Fri: 8:00 AM – 6:00 PM · Sat: 9:00 AM – 3:00 PM · Sun: Closed |
| Map Embed | Google Maps embed for Afienya, Ghana (search: "Afienya, Greater Accra, Ghana") |
| WhatsApp CTA | "Chat with us on WhatsApp" floating button or inline CTA |

---

## PHASE 3 — Assets Checklist

### Available in MEDIA folder
- [x] `BESITS LOGO.png` — navbar logo
- [x] `FULL LOGO.png` — footer / wide logo
- [x] `HIKVISION.png` — brand slider
- [x] `DAHUA.png` — brand slider
- [x] `GRENTON.png` — brand slider
- [x] `TRIKIDIS.png` — brand slider
- [x] `YONUSA.png` — brand slider
- [x] `CAMECT.png` — brand slider
- [x] `CCTV.jpg` — hero slide 4, services page
- [x] `SHOP.jpg` — shop page hero
- [x] `FAQ.jpg` — training/FAQ section image

### Web Images Needed (source from Unsplash / Pexels — free commercial use)
- [ ] Hero Slide 1: CCTV camera on building exterior → search "CCTV surveillance camera building"
- [ ] Hero Slide 2: Smart home interior with devices → search "smart home automation interior"
- [ ] Hero Slide 3: Security technician installing equipment → search "security technician installation"
- [ ] About section: Professional team or tech office → search "African IT professionals office"
- [ ] Services: Electric fence installation
- [ ] Services: GPS tracker device
- [ ] Services: Smart home app control
- [ ] Services: Gate automation motor
- [ ] Services: Solar panel installation
- [ ] Services: Access control keypad
- [ ] Services: POS terminal retail
- [ ] Services: Alarm panel intruder detection
- [ ] Services: Electrical wiring work
- [ ] Services: Network IT setup
- [ ] Training: Hands-on technical training session

### Generated / Custom Images (if web search unavailable)
- [ ] Orange-tinted hero background overlays
- [ ] Service icons (SVG set — can use Font Awesome free)
- [ ] Circuit board or tech pattern for CTA section background

---

## PHASE 4 — Build Order (Namecheap Builder Sequence)

Follow this order to avoid rework:

1. **Set up global styles** — colors, fonts, button styles in the theme editor
2. **Build Top Info Bar + Navbar** — replicate on all pages via global header
3. **Build Footer** — replicate on all pages via global footer
4. **HOME page** — build all 8 sections
5. **ABOUT page**
6. **SERVICES page**
7. **CONTACT page**
8. **FAQ page**
9. **TRAINING page** (registration form setup)
10. **SHOP page** — configure store, add categories and products
11. **Cross-link all CTA buttons** — verify every button links correctly
12. **Mobile QA** — check every page at 375px and 768px widths
13. **Final review** — spelling, spacing, broken links, image optimization

---

## PHASE 5 — Content Gaps (Fill Before Launch)

Items that need client input before the site can go live:

| # | Item | Notes |
|---|---|---|
| 1 | Training dates and fees | For both GPS and Electric Fencing programs |
| 2 | Shop products list | Names, prices (GHS), images, descriptions |
| 3 | Team / CEO photo and bio | Optional but recommended for About page |
| 4 | Social media links | Facebook, Instagram, WhatsApp Business, LinkedIn |
| 5 | Google Maps embed URL | Exact business location pin |
| 6 | Business registration / certifications | Optional trust badges for About page |
| 7 | Client testimonials (3–5) | For a future Testimonials section |

---

## PHASE 6 — Post-Launch Checklist

- [ ] Custom domain connected (e.g., `besits.com` or `berntechco.com`)
- [ ] SSL certificate active (HTTPS)
- [ ] All forms tested (contact, training registration)
- [ ] Google Analytics or Namecheap analytics connected
- [ ] WhatsApp Business chat widget enabled
- [ ] SEO: page titles, meta descriptions, alt text on all images
- [ ] Site speed check (compress images before upload — target <200KB per image)
- [ ] Submit sitemap to Google Search Console

---

## Design Reference

| Reference | Takeaway |
|---|---|
| `MEDIA/WEBSITE SCREENSHOTS/scr3.webp` | Clean IT company site: orange accents on white, card-based services, bold headings, structured content blocks — **primary inspiration** |
| `MEDIA/WEBSITE SCREENSHOTS/scr2.png` | Dark hero with large bold typography and orange gradient — apply to hero section |
| `MEDIA/WEBSITE SCREENSHOTS/PEWBEAM.png` | Dark themed with warm glow — apply to CTA sections and footer |

---

*Plan version 1.0 — Ready for build.*
