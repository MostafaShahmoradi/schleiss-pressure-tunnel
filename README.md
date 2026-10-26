# Schleiss Pressure Tunnel Design Calculator — Reinforced Concrete Lining (Ch. 7) & External Water Pressure (Ch. 8)

## ماشین‌حساب طراحی تونل تحت فشار نفوذپذیر — پوشش بتن مسلح و فشار آب خارجی (نظریه اشلایس، فصل ۷ و ۸)

**Short name:** Schleiss Pressure Tunnel Design  
**Developer / توسعه‌دهنده:** Mostafa Shahmoradi / مصطفی شاهمرادی  
**Version:** 2.1.0

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/)
[![Version](https://img.shields.io/badge/version-2.1.0-green)](https://github.com/MostafaShahmoradi/schleiss-pressure-tunnel/releases)
[![License: proprietary](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey)](LICENSE)

**Free online calculator for pressure tunnels and shafts of hydropower plants**, based on A. J. Schleiss, *Design of Pressure Tunnels and Shafts for Hydropower Plants*. It runs in the browser (no installation, no login) and has two tabs:

- **Chapter 7 (Section 7.4) — reinforced concrete lining under internal water pressure:** first-cracking pressure, crack series (Birkenmaier), crack width, crack spacing, steel stress, seepage loss, reinforcement optimization.
- **Chapter 8 — external water pressure on the lining during dewatering and down-surges:** effective groundwater pressure on a horizontal tunnel or vertical shaft, seepage through rock, loosened or grouted rock zone and cracked lining, compressive-stress check of the concrete, charts like Figures 8.5–8.7.

**ماشین‌حساب آنلاین و رایگان برای طراحی تونل و شفت تحت فشار نیروگاه‌های برق‌آبی** بر اساس کتاب Design of Pressure Tunnels and Shafts for Hydropower Plants نوشته‌ی اشلایس. بدون نصب و بدون ثبت‌نام در مرورگر اجرا می‌شود و دو تب دارد:

- **فصل ۷ (بخش ۷٫۴) — پوشش بتن مسلح تحت فشار داخلی:** فشار بحرانی شروع ترک، سری‌های ترک، عرض ترک، فاصله‌ی ترک‌ها، تنش فولاد، دبی نشت و بهینه‌سازی آرماتور.
- **فصل ۸ — فشار آب خارجی مؤثر بر پوشش هنگام تخلیه‌ی تونل و افت ناگهانی تراز آب:** تونل افقی و شفت قائم، نشت از سنگ، ناحیه‌ی سست‌شده یا تزریق‌شده، کنترل تنش فشاری بتن، نمودارهای مشابه شکل‌های ۸٫۵ تا ۸٫۷.

## Live demo / اجرای آنلاین
**https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/**

Help / Manual (راهنما): https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/help.html

## Search keywords / کلمات کلیدی
**English:** pressure tunnel design calculator · hydropower tunnel lining · reinforced concrete tunnel lining design · permeable pressure tunnel · pressure shaft design · Schleiss theory · Schleiss Design of Pressure Tunnels and Shafts · tunnel lining crack width calculation · crack spacing and steel stress · seepage through cracked concrete lining · external water pressure on tunnel lining · tunnel dewatering · rapid drawdown / down-surge · groundwater pressure on lining · compressive stress check concrete lining · rock mass permeability · consolidation grouting · drainage holes · loosened rock zone · Birkenmaier crack model · Bouvard seepage · headrace tunnel · surge tank lining · civil engineering calculator · free online tool.

**فارسی:** طراحی تونل تحت فشار · تونل تحت فشار نفوذپذیر · پوشش بتن مسلح تونل · طراحی پوشش بتنی تونل نیروگاه برق‌آبی · نظریه اشلایس · کتاب اشلایس فصل ۷ و ۸ · محاسبه عرض ترک پوشش تونل · فاصله ترک و تنش فولاد · نشت از ترک‌های پوشش بتنی · فشار آب خارجی روی پوشش تونل · تخلیه تونل (Dewatering) · افت ناگهانی تراز آب · فشار آب زیرزمینی روی پوشش · کنترل تنش فشاری بتن · نفوذپذیری توده سنگ · تزریق تحکیمی · زهکشی پوشش · ناحیه سست‌شده سنگ · شفت قائم · تونل انتقال آب · مخزن تعادل · ماشین‌حساب مهندسی عمران · سازه‌های آبی · نرم‌افزار آنلاین رایگان.

## What it calculates / چه چیزی محاسبه می‌شود

| | Chapter 7 · فصل ۷ | Chapter 8 · فصل ۸ |
|---|---|---|
| Load · بار | Internal water pressure · فشار آب داخلی | External groundwater pressure when the tunnel is emptied · فشار آب زیرزمینی هنگام تخلیه |
| Main results · نتایج اصلی | Pi,crit, crack width 2a, spacing d, steel stress σs2, seepage q, R | Effective head pa/ρg, pa, pg, seepage q, σt,max, safety factor, allowable head |
| Structures · سازه‌ها | Above GWL, below GWL, vertical shaft · بالا/زیر سطح آب، شفت | Horizontal tunnel, vertical shaft · تونل افقی، شفت قائم |
| Equations · معادلات | Schleiss §7.4 | Eq. 8.1 – 8.17 |

## Features / امکانات
### Chapter 8
- Horizontal tunnel (Eq. 8.1, 8.10, 8.12) and vertical shaft (Eq. 8.2, 8.11, 8.13); optional loosened / grouted rock zone (Eq. 8.3, 8.14)
- Lining conductivity from intact concrete, longitudinal cracks and perpendicular cracks (Eq. 8.4–8.9); crack roughness C43 / C45 (Eq. 8.6, 8.8) selectable: off / auto / on
- **Crack-width sliders limited to the ranges of Table 8.1** (unreinforced / reinforced / custom)
- Compressive-stress check, linear and logarithmic gradient (Eq. 8.15–8.17), safety factor, allowable head, buckling slenderness, drainage / grouting advice
- Charts similar to Figures 8.5, 8.6, 8.7, CSV export, printable notebook (`report.html?ch=8`)
- **One-click import from Chapter 7:** ri, ra, Kr, Kc, νc, βw, structure type, b, R/ra and the crack width and number of the Chapter 7 result; imported cells are highlighted
### Chapter 7
- Uncracked and cracked phases (Birkenmaier series), structure modes ABOGWL / BELGWL / VSHAFT
- Detailed per-formula results with units and tooltips, charts with crack-series markers
- Reinforcement optimization, multi-layer reinforcement, CSV export, sensitivity analysis
- If the first seepage reach R is smaller than ra, R = 2·ra is used
### New in 2.1.0
- Explicit units next to every Chapter 7 input and a units table in Help
- "Summary of the method" panel inside the Chapter 7 tab
- Minimum reinforcement ratio μ (default 0.5 %, editable) in the design check and in the reinforcement optimization
- Scope note: rock masses only; warning when Er < 500 MPa (soil or very weak rock)
- Not available yet: optimization of the lining thickness (only bar diameter / spacing are optimized)

### Both tabs / هر دو تب
- Persian / English interface, light / dark theme, colour-coded buttons and tabs
- Save / Open projects (`.schleiss.json`, Ctrl+S / Ctrl+O), design-check summary cards, input validation
- Printable calculation notebooks and a full user manual (Help); works offline (Chart.js is bundled in `vendor/`)

## How to use / نحوه استفاده
1. Open the [live demo](https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/) or open `index.html` locally.
2. Choose the tab: **Chapter 7** (internal pressure) or **Chapter 8** (external pressure).
3. Load a sample or enter geometry, materials and groundwater data, then click **Calculate** / **محاسبه**. Chapter 7: `s` in mm, `ds` in cm, pressures in bar. Chapter 8: radii and `b` in m, permeabilities in m/s, crack widths in mm.
4. In Chapter 8, press **Import from Chapter 7** after calculating Chapter 7 to reuse its inputs and crack results.
5. Use **Save** / **Save As** to keep the project; open **Help** for theory and worked examples.

## FAQ / پرسش‌های متداول
**How do I calculate the external water pressure on a tunnel lining during dewatering?**
Use the *Chapter 8* tab: enter radii, groundwater head b, rock and concrete permeability and the crack widths (sliders follow Table 8.1). The tool applies the seepage continuity of Schleiss Eq. 8.10–8.13 and returns the effective pressure pa and the compressive-stress check.

**How do I calculate crack width and steel stress in a pressure tunnel lining?**
Use the *Chapter 7* tab (Schleiss §7.4): enter lining geometry, reinforcement (bar diameter s in mm, spacing ds in cm) and the internal pressure Pi; the tool gives 2a, d, σs2 and the seepage loss for every crack series.

**فشار آب خارجی روی پوشش تونل هنگام تخلیه را چگونه حساب کنم؟**
در تب «فصل ۸» شعاع‌ها، ارتفاع آب زیرزمینی b، نفوذپذیری سنگ و بتن و عرض ترک‌ها را وارد کنید (نوارهای لغزان از جدول ۸٫۱ کتاب پیروی می‌کنند). برنامه با پیوستگی جریان نشت (معادلات ۸٫۱۰ تا ۸٫۱۳) فشار مؤثر pa و کنترل تنش فشاری را می‌دهد.

**عرض ترک و تنش فولاد در پوشش تونل تحت فشار را چگونه حساب کنم؟**
در تب «فصل ۷» هندسه، آرماتور (قطر s بر حسب mm و فاصله ds بر حسب cm) و فشار داخلی Pi را وارد کنید؛ برنامه عرض ترک 2a، فاصله d، تنش σs2 و دبی نشت هر سری ترک را می‌دهد.

## Why a static HTML app? / چرا برنامه‌ی HTML ایستا؟
It runs on **GitHub Pages with zero backend cost**, needs no install or build step, and the whole source can be archived with the project. All calculations are client-side JavaScript; no data leaves your browser.

## Validation / اعتبارسنجی
See **[VALIDATION.md](VALIDATION.md)**. Run `node tests/validate.js` (Chapter 7 against the ABOGWL / BELGWL / VSHAFT spreadsheets, within 0.03%) and `node tests/validate-ch8.js` (Chapter 8 against the worked example and Figures 8.5–8.7 of the book).

## Repository layout
| File | Role |
|------|------|
| `index.html` | Main calculator (Chapter 7 and Chapter 8 tabs) |
| `help.html` | User manual (FA/EN) |
| `report.html` | Printable calculation notebook (Chapter 7; `?ch=8` for Chapter 8) |
| `vendor/` | Bundled Chart.js 4.4.1 (MIT) so charts work offline |
| `tests/validate.js` | Chapter 7 regression test (+ R ≥ 2·ra rule) |
| `tests/validate-ch8.js` | Chapter 8 regression test |
| `VALIDATION.md` | Numeric checks vs. references |
| `RELEASE_v2.1.0.md` | Release notes of the current version |
| `CHANGELOG.md` | Version history |
| `sitemap.xml`, `robots.txt` | Search-engine files for GitHub Pages |
| `LICENSE` | © 2026 Mostafa Shahmoradi |
| `.nojekyll` | GitHub Pages |

## Suggested GitHub "About" text and Topics
**About:** Free online Schleiss pressure tunnel & shaft design calculator: reinforced concrete lining (Ch. 7) and external water pressure during dewatering (Ch. 8). ماشین‌حساب آنلاین طراحی تونل تحت فشار (اشلایس).  
**Website:** https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/  
**Topics:** `hydropower` · `tunnel-engineering` · `pressure-tunnel` · `tunnel-lining` · `civil-engineering` · `geotechnical-engineering` · `schleiss` · `reinforced-concrete` · `crack-width` · `seepage` · `groundwater` · `dewatering` · `engineering-calculator` · `hydraulic-structures` · `persian` · `farsi`

## Reference
Anton J. Schleiss — *Design of Pressure Tunnels and Shafts for Hydropower Plants*, Section 7.4 (Reinforced Concrete Linings) and Chapter 8 (Design of Concrete Linings for External Water Pressure during Dewatering and Down-Surges).

## License
© 2026 Mostafa Shahmoradi (مصطفی شاهمرادی). **All rights reserved.**

Personal and educational use with attribution is allowed.  
**Redistribution, rehosting, or rebranding without written permission is prohibited.**

This is intentional for a specialized engineering calculator (IP protection). It is **not** an MIT/Apache open-source grant. See [LICENSE](LICENSE). The bundled Chart.js library keeps its own MIT license (`vendor/LICENSE-chart.js.txt`).

**Scope / محدوده:** rock masses only; not validated for soil. / فقط توده‌ی سنگ؛ برای خاک اعتبارسنجی نشده است.

This is a study tool and does not replace project-specific checks or independent design review. / این ابزار برای مطالعه است و جایگزین کنترل‌های ویژه‌ی پروژه و بازبینی مستقل طراحی نیست.
