1|# ELEMENTOR PRO CONVERSION GUIDE
2|## Sumayah Islam Portfolio — WordPress + Elementor Pro
3|## EXACT Ramond Holdings Design System
4|
5|> **Prerequisites:** WordPress 6.x, Elementor Pro 3.x+, Custom CSS enabled
6|> **Theme:** Hello Elementor (recommended) or any lightweight theme
7|> **Design:** Dark luxury · Editorial · Anti-Gravity · Orange accent (#f97316) · Near-black (#050505)
8|> **Fonts:** Cinzel (headings) + Inter (body)
9|
10|---
11|
12|## TABLE OF CONTENTS
13|
14|1. [Phase 1: Global Setup](#phase-1-global-setup)
15|2. [Phase 2: Google Fonts & CSS](#phase-2-google-fonts--css)
16|3. [Phase 3: Header (Theme Builder)](#phase-3-header-theme-builder)
17|4. [Phase 4: Build Each Page](#phase-4-build-each-page)
18|5. [Phase 5: Footer (Theme Builder)](#phase-5-footer-theme-builder)
19|6. [Phase 6: Animations & Interactivity](#phase-6-animations--interactivity)
20|7. [Phase 7: Responsive Testing](#phase-7-responsive-testing)
21|8. [Widget Reference Map](#widget-reference-map)
22|9. [Copy-Paste CSS Library](#copy-paste-css-library)
23|
24|---
25|
26|## PHASE 1: GLOBAL SETUP
27|
28|### Step 1: Install Required Plugins
29|```
30|Required:
31|- Elementor Pro (active license for Theme Builder, Loop Grid, etc.)
32|- Hello Elementor theme (or your preferred theme)
33|
34|Recommended:
35|- WP Rocket or LiteSpeed Cache (performance)
36|- Rank Math or Yoast SEO (SEO)
37|- ShortPixel or Imagify (image optimization)
38|```
39|
40|### Step 2: Elementor Settings
41|Navigate to **Elementor > Settings**:
42|
43|**General tab:**
44|- Post Types: Enable for Pages
45|- Allow SVG: Yes
46|
47|**Integrations tab:**
48|- Google Maps API Key: (if needed)
49|- reCAPTCHA: (for contact form)
50|
51|**Advanced tab:**
52|- Enable: "CSS Variables" — ON
53|- Editor Loader: Enable Loading Method "Improved Asset Loading"
54|
55|### Step 3: Elementor Theme Style
56|Navigate to **Elementor > Site Settings > Theme Style**:
57|
58|```
59|Body:
60|  Font: Inter | Weight: 300 | Size: 16px
61|  Line Height: 1.6
62|  Color: #d6d3d1
63|
64|H1:
65|  Font: Cinzel | Weight: 600
66|  Size: 128px (use clamp via custom CSS — see below)
67|  Line Height: 0.9
68|  Letter Spacing: -0.025em
69|  Color: #f5f5f4
70|
71|H2:
72|  Font: Cinzel | Weight: 600
73|  Size: 80px (use clamp via custom CSS)
74|  Line Height: 0.9
75|  Color: #f5f5f4
76|
77|H3:
78|  Font: Cinzel | Weight: 500
79|  Size: 48px (use clamp via custom CSS)
80|  Line Height: 1
81|  Color: #f5f5f4
82|
83|H4:
84|  Font: Cinzel | Weight: 500
85|  Size: 18px
86|  Line Height: 1.3
87|  Color: #f5f5f4
88|
89|Links:
90|  Color: inherit
91|  Hover: #f97316
92|```
93|
94|### Step 4: Global Colors
95|Navigate to **Elementor > Site Settings > Global Colors**:
96|
97|| Name | Hex | Usage |
98||------|-----|-------|
99|| Primary | #f5f5f4 | Headings, bright text |
100|| Secondary | #d6d3d1 | Body text |
101|| Text | #78716c | Muted text, labels |
102|| Accent | #f97316 | Burnt orange accent, CTAs, labels |
103|| Background | #050505 | Page background (near-black) |
104|| Background Alt | #080808 | Alternate sections |
105|| Background Card | #0a0a0a | Card backgrounds |
106|| Footer | #0c0a09 | Footer background |
107|| Ghost | #292524 | Ghost text (barely visible) |
108|| Border | rgba(255,255,255,0.05) | Subtle borders |
109|| Border Light | rgba(255,255,255,0.10) | Lighter borders |
110|
111|### Step 5: Create Custom Fonts (Optional)
112|If you want Cinzel/Inter in Elementor's font picker:
113|1. Go to **Elementor > Custom Fonts > Add New**
114|2. Upload Cinzel (weights: 300, 400, 500, 600, 700)
115|3. Upload Inter (weights: 300, 400, 500, 600)
116|4. Or rely on Google Fonts loaded via Additional CSS
117|
118|---
119|
120|## PHASE 2: GOOGLE FONTS & CSS
121|
122|### Step 1: Add Google Fonts Import
123|Go to **Appearance > Customize > Additional CSS** (or Elementor > Custom CSS):
124|
125|```css
126|@import url('https://fonts.googleapis.com/css2?family=Cinzel:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap');
127|```
128|
129|### Step 2: Paste ALL Custom CSS
130|Copy the ENTIRE contents of `css/style.css` into **Additional CSS**.
131|Then copy `css/animations.css` below it.
132|
133|**IMPORTANT:** Also paste these Elementor-specific overrides (see Section 9 below for the full CSS).
134|
135|---
136|
137|## PHASE 3: HEADER (THEME BUILDER)
138|
139|### Step 1: Create Header Template
140|1. Go to **Elementor > Theme Builder > Header > Add New**
141|2. Set to **Full Width**
142|3. Section settings:
143|   - Layout: Full Width
144|   - Position: Fixed (in Advanced tab)
145|   - Z-Index: 9999
146|   - Custom CSS:
147|   ```css
148|   selector {
149|     mix-blend-mode: difference;
150|   }
151|   ```
152|
153|### Step 2: Add Nav Widget
154|Use Elementor's **Navigation Menu** widget OR **HTML widget** with this code:
155|
156|```html
157|<nav class="custom-navbar" id="site-header">
158|  <a href="/" class="custom-logo">SUMAYAH</a>
159|  <ul class="custom-nav-links">
160|    <li><a href="#about">ABOUT</a></li>
161|    <li><a href="#services">SERVICES</a></li>
162|    <li><a href="#projects">PROJECTS</a></li>
163|    <li><a href="#speaking">SPEAKING</a></li>
164|    <li><a href="#blog">BLOG</a></li>
165|    <li><a href="#contact">CONTACT</a></li>
166|  </ul>
167|  <button class="custom-menu-btn" onclick="document.querySelector('.custom-mobile-menu').classList.toggle('open')">
168|    <span class="menu-text">MENU</span>
169|    <span class="menu-lines"><span></span><span></span></span>
170|  </button>
171|</nav>
172|```
173|
174|### Step 3: Header Custom CSS (in Section > Advanced > Custom CSS)
175|```css
176|selector {
177|  mix-blend-mode: difference;
178|  color: white;
179|  padding: 24px 48px;
180|  display: flex;
181|  justify-content: space-between;
182|  align-items: center;
183|  position: fixed;
184|  top: 0;
185|  left: 0;
186|  right: 0;
187|  z-index: 9999;
188|}
189|
190|/* Logo */
191|.custom-logo {
192|  font-family: 'Cinzel', serif;
193|  font-size: 20px;
194|  font-weight: 600;
195|  letter-spacing: -1px;
196|  color: white !important;
197|  text-decoration: none;
198|}
199|
200|/* Nav Links */
201|.custom-nav-links {
202|  display: flex;
203|  gap: 32px;
204|  list-style: none;
205|}
206|
207|.custom-nav-links a {
208|  font-size: 12px;
209|  font-weight: 500;
210|  text-transform: uppercase;
211|  letter-spacing: 0.3em;
212|  color: white !important;
213|  text-decoration: none;
214|  transition: opacity 300ms ease;
215|}
216|
217|.custom-nav-links a:hover {
218|  opacity: 0.5;
219|}
220|
221|/* Menu Button */
222|.custom-menu-btn {
223|  display: none;
224|  align-items: center;
225|  gap: 12px;
226|  background: none;
227|  border: none;
228|  color: white;
229|  cursor: pointer;
230|  font-family: 'Inter', sans-serif;
231|}
232|
233|.custom-menu-btn .menu-text {
234|  font-size: 12px;
235|  text-transform: uppercase;
236|  letter-spacing: 0.3em;
237|}
238|
239|.menu-lines {
240|  display: flex;
241|  flex-direction: column;
242|  gap: 4px;
243|}
244|
245|.menu-lines span {
246|  display: block;
247|  height: 1px;
248|  background: white;
249|  width: 16px;
250|  transition: width 300ms ease;
251|}
252|
253|/* Mobile */
254|@media (max-width: 767px) {
255|  .custom-nav-links { display: none; }
256|  .custom-menu-btn { display: flex; }
257|}
258|```
259|
260|### Step 4: Display Condition
261|Set display condition: **Entire Site**
262|
263|---
264|
265|## PHASE 4: BUILD EACH PAGE
266|
267|### PAGE 1: HOME (/)
268|
269|Create a new Page > Edit with Elementor > Use **Elementor Full Width** page template.
270|
271|#### Section 1: Hero
272|```
273|Section:
274|  - Layout: Full Width
275|  - Height: 100vh (Custom CSS: min-height: 100vh)
276|  - Background Color: #050505
277|  - Padding: 128px top, 48px sides, 48px bottom
278|
279|  Column 1:
280|    - Width: 100%
281|
282|    Widget: Heading (Eyebrow)
283|      - Text: "Available for Projects"
284|      - Size: 12px
285|      - Color: #78716c
286|      - Style: Uppercase, Letter Spacing: 0.3em
287|      - Before this, add an Icon or HTML widget with:
288|        <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#f97316;margin-right:16px;animation:pulse 2s infinite;"></span>
289|
290|    Widget: Heading (H1)
291|      - Text: "Building Websites," (line break) "Careers &" (line break) "Communities."
292|      - Size: clamp(48px, 8vw, 128px) — use CSS
293|      - Color: #f5f5f4
294|      - Custom CSS for line-height: 0.9
295|
296|    Widget: Text Editor
297|      - Content: Hero subtitle paragraph
298|      - Size: 16px, Weight: 300
299|      - Color: #78716c
300|      - Max Width: 520px
301|
302|    Widget: Button Group
303|      Button 1: "Work With Me" — Background: #f97316, Color: white
304|      Button 2: "Book Me As A Speaker" — Border: 1px solid rgba(255,255,255,0.10), Color: #f5f5f4
305|```
306|
307|**Hero Custom CSS (in Section > Advanced > Custom CSS):**
308|```css
309|selector {
310|  position: relative;
311|  overflow: hidden;
312|}
313|
314|/* Glow Effects */
315|selector::before {
316|  content: '';
317|  position: absolute;
318|  top: 0;
319|  right: 0;
320|  width: 500px;
321|  height: 500px;
322|  background: rgba(59, 130, 246, 0.08);
323|  border-radius: 50%;
324|  filter: blur(120px);
325|  pointer-events: none;
326|}
327|
328|selector::after {
329|  content: '';
330|  position: absolute;
331|  bottom: 0;
332|  left: 0;
333|  width: 600px;
334|  height: 600px;
335|  background: rgba(249, 115, 22, 0.06);
336|  border-radius: 50%;
337|  filter: blur(150px);
338|  pointer-events: none;
339|}
340|```
341|
342|#### Section 2: Marquee Ticker
343|Use an **HTML Widget** with this code:
344|```html
345|<div class="marquee-section-wp">
346|  <div class="marquee-track-wp">
347|    <span>WORDPRESS</span><span>SHOPIFY</span><span>ELEMENTOR</span><span>WOOCOMMERCE</span><span>WEB DEVELOPMENT</span><span>SEO</span><span>FREELANCING</span><span>COMMUNITY</span>
348|    <span>WORDPRESS</span><span>SHOPIFY</span><span>ELEMENTOR</span><span>WOOCOMMERCE</span><span>WEB DEVELOPMENT</span><span>SEO</span><span>FREELANCING</span><span>COMMUNITY</span>
349|  </div>
350|</div>
351|```
352|
353|**Section CSS:**
354|```css
355|selector {
356|  border-bottom: 1px solid rgba(255,255,255,0.05);
357|  padding: 16px 0;
358|  overflow: hidden;
359|  background: #050505;
360|}
361|
362|.marquee-track-wp {
363|  white-space: nowrap;
364|  animation: marquee 40s linear infinite;
365|  display: flex;
366|  align-items: center;
367|  gap: 64px;
368|  font-family: 'Inter', monospace;
369|  font-size: 12px;
370|  text-transform: uppercase;
371|  letter-spacing: 0.3em;
372|  color: #1e293b;
373|}
374|```
375|
376|#### Section 3: About Me
377|```
378|Section:
379|  - Background: #050505
380|  - Padding: 96px
381|  - Border Bottom: 1px solid rgba(255,255,255,0.05)
382|
383|  Inner Section (2 columns):
384|    Left Column (50%):
385|      Widget: Heading
386|        - Text: "My Journey"
387|        - Size: 12px, Uppercase
388|        - Color: #f97316
389|        - Letter Spacing: 0.3em
390|
391|      Widget: Heading
392|        - Text: "From Freelancer to Founder"
393|        - Size: clamp(32px, 4vw, 56px)
394|        - Color: #f5f5f4
395|        - For "Founder" word: wrap in <span style="color:#f97316;">Founder</span>
396|
397|      Widget: Text Editor
398|        - Two paragraphs of About content
399|        - Size: 15px, Weight: 300
400|        - Color: #d6d3d1
401|
402|      Widget: Callout (for key message)
403|        - Text: "Success is not only about technical skills..."
404|        - Border Left: 2px solid #f97316
405|        - Background: rgba(249, 115, 22, 0.15)
406|
407|    Right Column (50%):
408|      Widget: Image
409|        - Your professional photo
410|        - Custom CSS: filter: grayscale(100%); transition: filter 700ms ease;
411|        - On hover: grayscale(0%)
412|```
413|
414|#### Section 4: Stats
415|```
416|Section:
417|  - Background: #080808
418|  - Padding: 96px
419|  - Border Bottom: 1px solid rgba(255,255,255,0.05)
420|
421|  Inner Section (6 columns):
422|    Each column:
423|      Widget: Counter (Pro)
424|        - Starting Number: 0
425|        - Ending Number: 5 / 100 / 20 / 50 / 15 / 50
426|        - Prefix: ""
427|        - Suffix: "+"
428|        - Duration: 2000
429|
430|      Widget: Heading
431|        - "Years Experience" / etc.
432|        - Size: 11px, Uppercase
433|        - Color: #78716c
434|```
435|
436|**Stats Section CSS:**
437|```css
438|selector {
439|  position: relative;
440|  overflow: hidden;
441|}
442|
443|selector .elementor-counter-number-wrapper {
444|  font-family: 'Cinzel', serif;
445|  font-size: 48px;
446|  font-weight: 600;
447|  color: #f5f5f4;
448|}
449|
450|selector .elementor-counter-title {
451|  font-size: 11px !important;
452|  text-transform: uppercase !important;
453|  letter-spacing: 0.2em !important;
454|  color: #78716c !important;
455|}
456|```
457|
458|#### Section 5: Services
459|```
460|Section:
461|  - Background: #050505
462|  - Padding: 96px
463|
464|  Widget: Heading (section title)
465|    - "What I Do" label + "Services" heading
466|
467|  Inner Section (3 columns):
468|    Each column:
469|      Widget: Icon Box
470|        - Icon: (choose appropriate icons)
471|        - Title: "Web Development" / "Digital Growth" / "Mentorship"
472|        - Description: service descriptions
473|        - List: service items
474|```
475|
476|**Service Card CSS:**
477|```css
478|selector .elementor-icon-box-wrapper {
479|  padding: 40px 32px;
480|  border: 1px solid rgba(255,255,255,0.05);
481|  background: rgba(13, 20, 36, 0.3);
482|  transition: all 400ms ease;
483|  position: relative;
484|}
485|
486|selector .elementor-icon-box-wrapper:hover {
487|  border-color: rgba(249, 115, 22, 0.2);
488|  background: rgba(249, 115, 22, 0.05);
489|  transform: translateY(-4px);
490|}
491|```
492|
493|#### Section 6: Featured Projects
494|```
495|Section:
496|  - Background: #050505
497|  - Padding: 96px
498|
499|  Option A: Loop Grid (Elementor Pro)
500|    - Create a Custom Post Type for "Projects"
501|