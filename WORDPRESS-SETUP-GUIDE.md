# WORDPRESS + ELEMENTOR PRO — Complete Setup Guide
## Sumayah Islam Portfolio — sumayahislam.com
## CSS Design Awards Style Layout

> **Theme:** Hello Elementor
> **Plugins:** Elementor Pro, Elementor (free)
> **Design:** Dark luxury · Anti-Gravity · Orange accent (#f97316) · Near-black (#050505)
> **Fonts:** Cinzel (headings) + Inter (body)

---

## PHASE 1: WORDPRESS GLOBAL SETTINGS

### Step 1: Hello Elementor Theme Settings
Go to **Appearance > Customize**:

```
Site Identity:
  - Site Title: Sumayah Islam
  - Tagline: Web Developer · Founder of Xixify · WordPress Speaker
  - Upload favicon (your logo or headshot)

Homepage Settings:
  - Your homepage displays: A static page
  - Homepage: Home (create this page first)
  - Posts page: Blog (create this page first)

Additional CSS: (leave empty — we'll add via Elementor)
```

### Step 2: WordPress Reading Settings
Go to **Settings > Reading**:

```
Your homepage displays: A static page
Homepage: Home
Posts page: Blog
Search engine visibility: UNCHECKED (important for SEO!)
```

### Step 3: WordPress Permalinks
Go to **Settings > Permalinks**:

```
Common Settings: Post name
Custom structure: /%postname%/
```

### Step 4: WordPress General Settings
Go to **Settings > General**:

```
Site Title: Sumayah Islam
Tagline: Web Developer · Founder of Xixify · WordPress Speaker
Timezone: (your timezone)
Date Format: Custom — M j, Y
```

---

## PHASE 2: ELEMENTOR GLOBAL SETTINGS

### Step 1: Elementor > Settings > General
```
Post Types: Pages ✅, Posts ✅
Allow SVG: Yes
Widget Snapshots: Enable
Improved Asset Loading: Enable
Optimized DOM Output: Enable
Improved Loading: Enable
```

### Step 2: Elementor > Settings > Style
```
Content Width: 1536
Stretch Section: Full Width
Page Title Selector: h1.entry-title
```

### Step 3: Elementor > Settings > Advanced
```
CSS Variables: Enable
Default Generic Fonts: Disable
```

### Step 4: Elementor > Theme Style > Global Colors
Go to **Elementor > Site Settings > Global Colors**:

| Name | Hex | Usage |
|------|-----|-------|
| Primary | #f5f5f4 | Headings, bright text |
| Secondary | #d6d3d1 | Body text |
| Text | #78716c | Muted text, labels |
| Accent | #f97316 | Orange accent, CTAs |
| Background | #050505 | Page background |
| Background Alt | #080808 | Alternate sections |
| Background Card | #0a0a0a | Card backgrounds |
| Footer | #0c0a09 | Footer background |
| Ghost | #292524 | Ghost text |
| Border | rgba(255,255,255,0.05) | Subtle borders |
| Border Light | rgba(255,255,255,0.10) | Lighter borders |

### Step 5: Elementor > Theme Style > Typography
Go to **Elementor > Site Settings > Typography**:

```
Body:
  Font Family: Inter
  Size: 16px
  Weight: 300
  Line Height: 1.6
  Color: #d6d3d1

H1:
  Font Family: Cinzel
  Size: 128px (use clamp via CSS)
  Weight: 400
  Line Height: 0.9
  Letter Spacing: -0.025em
  Color: #f5f5f4

H2:
  Font Family: Cinzel
  Size: 80px (use clamp via CSS)
  Weight: 400
  Line Height: 0.9
  Color: #f5f5f4

H3:
  Font Family: Cinzel
  Size: 48px (use clamp via CSS)
  Weight: 400
  Line Height: 1
  Color: #f5f5f4

H4:
  Font Family: Cinzel
  Size: 18px
  Weight: 400
  Line Height: 1.3
  Color: #f5f5f4

H5:
  Font Family: Inter
  Size: 14px
  Weight: 500
  Color: #f5f5f4

H6:
  Font Family: Inter
  Size: 12px
  Weight: 500
  Text Transform: Uppercase
  Letter Spacing: 0.2em
  Color: #78716c

Links:
  Color: #f97316
  Hover: #ea580c
```

### Step 6: Elementor > Custom Fonts
Go to **Elementor > Custom Fonts > Add New**:

**Font 1: Cinzel**
- Name: Cinzel
- Weight 400: Upload Cinzel-Regular.woff2
- Weight 600: Upload Cinzel-SemiBold.woff2

**Font 2: Inter**
- Name: Inter
- Weight 300: Upload Inter-Light.woff2
- Weight 400: Upload Inter-Regular.woff2
- Weight 500: Upload Inter-Medium.woff2

Download from: https://fonts.google.com/specimen/Cinzel and https://fonts.google.com/specimen/Inter

---

## PHASE 3: ADD GLOBAL CSS

Go to **Elementor > Site Settings > Custom CSS** (or **Appearance > Customize > Additional CSS**):

```css
/* ============================================
   GLOBAL CSS — Paste this entire block
   ============================================ */

/* Google Fonts fallback (if custom fonts not uploaded) */
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Inter:wght@300;400;500&display=swap');

/* ============================================
   BASE RESET
   ============================================ */
* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background-color: #050505 !important;
  color: #d6d3d1 !important;
  font-family: 'Inter', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

a { color: #f97316 !important; text-decoration: none; transition: color 300ms ease; }
a:hover { color: #ea580c !important; }

::selection {
  background-color: rgba(120, 53, 15, 0.30);
  color: rgb(254, 226, 226);
}

/* ============================================
   SCROLLBAR
   ============================================ */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: #0c0a09; }
::-webkit-scrollbar-thumb { background: #44403c; border-radius: 2px; }
::-webkit-scrollbar-thumb:hover { background: #78716c; }
html { scrollbar-width: thin; scrollbar-color: #44403c #0c0a09; }

/* ============================================
   ELEMENTOR OVERRIDES
   ============================================ */
.elementor-section.elementor-section-boxed > .elementor-container {
  max-width: 1536px;
}

.elementor-widget-heading .elementor-heading-title {
  font-family: 'Cinzel', serif !important;
}

.elementor-section {
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

/* Button Styles */
.elementor-button {
  font-family: 'Inter', sans-serif !important;
  font-size: 12px !important;
  font-weight: 500 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  border-radius: 0 !important;
  padding: 16px 32px !important;
  transition: all 300ms ease !important;
}
.elementor-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(249, 115, 22, 0.2);
}
.elementor-button-primary {
  background-color: #f97316 !important;
}
.elementor-button-primary:hover {
  background-color: #ea580c !important;
}

/* Form Input Styles */
.elementor-field-textual,
.elementor-field input,
.elementor-field textarea {
  background: rgba(10, 10, 10, 0.5) !important;
  border: 1px solid rgba(255,255,255,0.05) !important;
  color: #f5f5f4 !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 14px !important;
  font-weight: 300 !important;
  border-radius: 0 !important;
  transition: border-color 300ms ease !important;
}
.elementor-field-textual:focus,
.elementor-field input:focus,
.elementor-field textarea:focus {
  border-color: #f97316 !important;
  outline: none !important;
}

/* ============================================
   NAVIGATION (Header via Theme Builder)
   ============================================ */
.site-header,
.elementor-location-header {
  mix-blend-mode: difference;
}

/* ============================================
   ANIMATIONS
   ============================================ */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes pulse {
  50% { opacity: 0.5; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(-25%); }
  50% { transform: none; }
}

@keyframes fadeSlideIn {
  0% { opacity: 0; transform: translateY(30px); filter: blur(8px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Scroll reveal */
[data-animate] {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-animate].in-view {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================
   MARQUEE TICKER
   ============================================ */
.marquee-section {
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 16px 0;
  overflow: hidden;
  background: #050505;
}
.marquee-track {
  white-space: nowrap;
  animation: marquee 40s linear infinite;
  display: flex;
  align-items: center;
  gap: 64px;
  font-family: ui-monospace, 'SF Mono', Menlo, monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: #292524;
}

/* ============================================
   GHOST TEXT EFFECT
   ============================================ */
.ghost-text-elementor {
  color: #292524 !important;
}

/* ============================================
   IMAGE B&W TREATMENT
   ============================================ */
.img-bw {
  filter: grayscale(100%) brightness(0.6) contrast(1.1);
  transition: filter 700ms ease;
}
.img-bw:hover {
  filter: grayscale(0%) brightness(0.8);
}

/* ============================================
   CASE STUDY LAYOUT (CSS Design Awards Style)
   ============================================ */
.cs-award {
  width: 100px;
  height: 100px;
  border: 2px solid rgba(249,115,22,0.4);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  position: relative;
}
.cs-award::before {
  content: '';
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(249,115,22,0.2);
  border-radius: 50%;
}

.metric-card {
  text-align: center;
  padding: 24px 16px;
  border: 1px solid rgba(255,255,255,0.05);
  transition: all 300ms ease;
}
.metric-card:hover {
  border-color: rgba(249,115,22,0.15);
}

.metric-icon {
  width: 48px;
  height: 48px;
  border: 2px solid rgba(249,115,22,0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 20px;
  color: #f97316;
}

/* ============================================
   FOOTER
   ============================================ */
.site-footer,
.elementor-location-footer {
  background: #0c0a09 !important;
  border-top: 1px solid rgba(255,255,255,0.10);
}
```

---

## PHASE 4: BUILD HEADER (Theme Builder)

Go to **Elementor > Theme Builder > Header > Add New**:

### Section Settings:
```
Layout: Full Width
Position: Fixed
Z-Index: 9999
Custom CSS:
  selector {
    mix-blend-mode: difference;
    background: transparent !important;
  }
```

### Add HTML Widget with this code:
```html
<div style="display:flex;justify-content:space-between;align-items:center;padding:24px 48px;width:100%;">
  <a href="/" style="font-family:'Cinzel',serif;font-size:20px;font-weight:600;letter-spacing:-1px;color:white;text-decoration:none;">SUMAYAH</a>
  <div style="display:flex;gap:32px;align-items:center;">
    <a href="/about" style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:white;text-decoration:none;">ABOUT</a>
    <a href="/services" style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:white;text-decoration:none;">SERVICES</a>
    <a href="/projects" style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:white;text-decoration:none;">PROJECTS</a>
    <a href="/speaking" style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:white;text-decoration:none;">SPEAKING</a>
    <a href="/blog" style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:white;text-decoration:none;">BLOG</a>
    <a href="/contact" style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.3em;color:white;text-decoration:none;">CONTACT</a>
  </div>
</div>
```

### Display Condition: **Entire Site**

---

## PHASE 5: BUILD FOOTER (Theme Builder)

Go to **Elementor > Theme Builder > Footer > Add New**:

### Section Settings:
```
Background: #0c0a09
Padding: 96px top, 48px sides, 32px bottom
Border Top: 1px solid rgba(255,255,255,0.10)
```

### Add HTML Widget with footer content (use the HTML from the prototype files)

### Display Condition: **Entire Site**

---

## PHASE 6: BUILD PAGES

### Page List to Create:
1. **Home** (front page)
2. **About**
3. **Services**
4. **Projects**
5. **Speaking**
6. **Blog** (posts page)
7. **Contact**
8. **Media Kit** (optional)

For each page:
1. Go to **Pages > Add New**
2. Enter title
3. Click **"Edit with Elementor"**
4. Set page template to **"Elementor Full Width"**
5. Build content using the HTML/CSS from the prototype files

---

## PHASE 7: PROJECTS PAGE — CSS Design Awards Layout

This is the key layout from the screenshot. Here's how to build it in Elementor:

### Section 1: Featured Project Hero
```
Section:
  - Layout: Full Width
  - Min Height: 70vh
  - Background: #050505

  Inner Section (2 columns):
    Left Column (70%):
      Widget: Image
        - Upload Partylagret screenshot
        - Custom CSS: filter: grayscale(100%) brightness(0.35);
        - On hover: filter: grayscale(0%) brightness(0.5);

    Right Column (30%):
      Widget: HTML (for award badge)
        <div style="width:100px;height:100px;border:2px solid rgba(249,115,22,0.4);border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-bottom:24px;position:relative;">
          <div style="position:absolute;inset:4px;border:1px solid rgba(249,115,22,0.2);border-radius:50%;"></div>
          <span style="font-size:24px;color:#f97316;">🏆</span>
          <span style="font-size:7px;text-transform:uppercase;letter-spacing:0.15em;color:#f97316;text-align:center;line-height:1.3;">LIVE<br>SITE</span>
        </div>

      Widget: Heading
        - Text: "Partylagret"
        - Size: 36px
        - Color: #f5f5f4
        - Font: Cinzel

      Widget: Text Editor
        - "partylagret.com"
        - Size: 14px
        - Color: #78716c

      Widget: Text Editor
        - "Sweden's largest party supplies store — 9,500+ products..."
        - Size: 15px
        - Color: #d6d3d1
        - Style: Italic

      Widget: Button
        - Text: "VIEW LIVE SITE →"
        - Color: #f97316
        - Size: 13px
        - Uppercase
```

### Section 2: Metrics (4 columns)
```
Section:
  - Background: rgba(10,10,10,0.5)
  - Border Top: 1px solid rgba(255,255,255,0.05)
  - Padding: 40px

  Inner Section (4 columns):
    Each column:
      Widget: HTML
        <div style="text-align:center;padding:24px 16px;border:1px solid rgba(255,255,255,0.05);">
          <div style="width:48px;height:48px;border:2px solid rgba(249,115,22,0.3);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;font-size:20px;color:#f97316;">🛒</div>
          <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#78716c;margin-bottom:4px;">PRODUCTS</div>
          <div style="font-family:'Cinzel',serif;font-size:24px;color:#f5f5f4;">9,500+</div>
          <div style="font-size:10px;color:#44403c;margin-top:2px;">Active SKUs</div>
        </div>
```

### Section 3: All Projects Grid
```
Section:
  - Background: #080808
  - Padding: 96px
  - Border Bottom: 1px solid rgba(255,255,255,0.05)

  Widget: Heading
    - "All Projects"
    - Size: 48px
    - Font: Cinzel
    - Color: #f5f5f4

  Inner Section (3 columns):
    Each column = 1 project card:
      Widget: Image Box
        - Image: project screenshot
        - Title: project name
        - Description: project description
        - Custom CSS for B&W treatment
```

---

## PHASE 8: ADD JAVASCRIPT

Go to **Appearance > Theme File Editor > footer.php** (or use **WPCode** plugin):

```html
<script>
document.addEventListener("DOMContentLoaded", function() {
  // Scroll reveal
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll("[data-animate]").forEach(function(el) {
    observer.observe(el);
  });

  // Nav scroll effect
  window.addEventListener("scroll", function() {
    var header = document.querySelector(".elementor-location-header");
    if (header) {
      if (window.scrollY > 100) {
        header.style.mixBlendMode = "normal";
        header.style.background = "rgba(5,5,5,0.85)";
        header.style.backdropFilter = "blur(20px)";
      } else {
        header.style.mixBlendMode = "difference";
        header.style.background = "transparent";
        header.style.backdropFilter = "none";
      }
    }
  });
});
</script>
```

---

## PHASE 9: SEO SETUP

### Install Rank Math or Yoast SEO:
```
Focus Keyword: Sumayah Islam
Meta Title: Sumayah Islam — Web Developer, Founder of Xixify, WordPress Speaker
Meta Description: I help businesses build better websites while helping freelancers build better lives. WordPress, Shopify, Elementor Pro expert.
```

### Create XML Sitemap:
- Rank Math: Settings > Sitemap > Enable
- Submit to Google Search Console

### Open Graph Tags:
```
Title: Sumayah Islam — Web Developer, Founder of Xixify
Description: I help businesses build better websites while helping freelancers build better lives.
Image: Upload your headshot (1200x630px)
```

---

## PHASE 10: PERFORMANCE

### Install WP Rocket or LiteSpeed Cache:
```
File Optimization:
  - Minify CSS: ✅
  - Minify JavaScript: ✅
  - Combine CSS: ❌ (can break Elementor)
  - Load JavaScript deferred: ✅

Media:
  - Lazy load images: ✅
  - Convert to WebP: ✅
  - Optimize images: ✅

Preload:
  - Preload key requests: ✅
  - Fonts: Preload Cinzel, Inter
```

### Image Optimization:
- Install ShortPixel or Imagify
- Compress all images to < 200KB
- Convert to WebP format
- Use lazy loading for below-fold images

---

## QUICK REFERENCE — CSS Variables

```css
:root {
  --color-bg: #050505;
  --color-bg-alt: #080808;
  --color-bg-card: #0a0a0a;
  --color-bg-footer: #0c0a09;
  --color-text: #d6d3d1;
  --color-text-bright: #f5f5f4;
  --color-text-muted: #78716c;
  --color-text-faint: #44403c;
  --color-text-ghost: #292524;
  --color-accent: #f97316;
  --color-border: rgba(255,255,255,0.05);
  --color-border-light: rgba(255,255,255,0.10);
  --font-display: 'Cinzel', serif;
  --font-body: 'Inter', sans-serif;
}
```

---

## FILES REFERENCE

All HTML/CSS/JS files are in:
`C:\Users\USER\workspace\sumayah-portfolio\`

| File | Purpose |
|------|---------|
| `index.html` | Homepage prototype |
| `about.html` | About page prototype |
| `services.html` | Services page prototype |
| `projects.html` | Projects page prototype |
| `speaking.html` | Speaking page prototype |
| `blog.html` | Blog page prototype |
| `contact.html` | Contact page prototype |
| `css/style.css` | Main design system |
| `css/animations.css` | All animations |
| `css/typography.css` | Font imports |
| `css/subpage.css` | Subpage styles |
| `css/casestudy.css` | CSS Design Awards layout |
| `js/main.js` | Scroll effects |
| `images/` | All images and screenshots |

---

*Generated for sumayahislam.com — WordPress + Elementor Pro + Hello Elementor*
