# Design of permeable pressure tunnels for reinforced concrete linings under internal pressure using Schleiss theory

**Chapter 7:** reinforced concrete linings under internal pressure · **Chapter 8:** external water pressure during dewatering and down-surges

**Short name:** Schleiss Pressure Tunnel Design  
**فارسی:** طراحی تونل تحت فشار نفوذپذیر — پوشش بتن مسلح (نظریه اشلایس) — فصل ۷ و فصل ۸  
**Developer:** Mostafa Shahmoradi / مصطفی شاهمرادی  
**Version:** 2.1.0

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/)
[![Version](https://img.shields.io/badge/version-2.1.0-green)](https://github.com/MostafaShahmoradi/schleiss-pressure-tunnel/releases)
[![License: proprietary](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey)](LICENSE)

Online calculator for **permeable pressure tunnels and vertical shafts**, based on **Schleiss theory**. Two tabs:

- **Chapter 7 (Section 7.4)** – reinforced concrete linings under **internal pressure** (cracking, crack width, steel stress, seepage).
- **Chapter 8** – **effective external water pressure** on the lining during dewatering / down-surges (horizontal tunnel and vertical shaft), compressive-stress check, effect of loosened or grouted rock zones, charts like Figures 8.5–8.7.

## Live demo
https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/

**Help / Manual:** https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/help.html

## Why a static HTML app (not Streamlit / React)?

The original brief mentioned frameworks such as Streamlit or React. For this tool the deliberate choice is a **static single-page application** (HTML/CSS/JS + Chart.js) because:

- It runs on **GitHub Pages with zero backend cost**
- No install, no Python runtime, no build step for end users
- Fast load for engineers who only need a browser
- Full source is easy to archive with the project

Calculation logic is implemented in client-side JavaScript and checked against the ABOGWL / BELGWL / VSHAFT reference spreadsheets (chapter 7) and against the worked example and figures of Section 8.5 (chapter 8); see [VALIDATION.md](VALIDATION.md).

## Features
### Chapter 8 (new in 2.1.0)
- Horizontal tunnel (Eq. 8.1, 8.10, 8.12) and vertical shaft (Eq. 8.2, 8.11, 8.13)
- Optional loosened / grouted rock zone (Eq. 8.3, 8.14)
- Lining conductivity from intact concrete, longitudinal and perpendicular cracks (Eq. 8.4–8.9, roughness 8.6 / 8.8 → C43 / C45 selectable: off / auto / on)
- **Crack-width sliders limited to the ranges of Table 8.1** (unreinforced / reinforced / custom)
- Compressive-stress check, linear and logarithmic gradient (Eq. 8.15–8.17), safety factor, allowable head, buckling slenderness, drainage / grouting advice
- Charts similar to Figures 8.5, 8.6, 8.7, CSV export of the curves, printable chapter-8 notebook (`report.html?ch=8`)
- Same project file (`.schleiss.json`), language, theme and tooltips as chapter 7

### Chapter 7
- Uncracked and cracked phases (Birkenmaier series)
- Structure modes: ABOGWL (above GWL), BELGWL (below GWL), VSHAFT (vertical shaft)
- Detailed per-formula results with units and tooltips
- Charts with crack-series markers
- Reinforcement optimization under designer constraints
- Multi-layer reinforcement, CSV export, sensitivity analysis
- **Save / Open projects** (New, Open, Save, Save As; Ctrl+S / Ctrl+O) as `.schleiss.json` files
- **Design-check summary card** (pass/fail for 2a, σs2, q, R) and input validation with plain-language messages
- Bilingual UI (Persian / English), light / dark themes
- Printable calculation notebook and full user manual (Help)

## Validation
See **[VALIDATION.md](VALIDATION.md)**. Run `node tests/validate.js` (chapter 7, spreadsheets, within 0.03%) and `node tests/validate-ch8.js` (chapter 8, book example and figures).

## How to use
1. Open the [live demo](https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/) or open `index.html` locally.
2. Load a sample or enter geometry, materials and groundwater data.
3. Click **Calculate** / **محاسبه** in the tab of the chapter you need (chapter 7: `s` in **mm**, `ds` in **cm**, pressures in **bar**; chapter 8: radii and `b` in **m**, permeabilities in **m/s**, crack widths in **mm**).
4. Use **Save** / **Save As** to keep the project and **Open** to restore it later.
5. Optionally run optimization, CSV export or sensitivity tools.
6. Open **Help** for theory, usage and worked examples.

## Repository layout
| File | Role |
|------|------|
| `index.html` | Main calculator |
| `help.html` | User manual (FA/EN) |
| `report.html` | Printable calculation notebook (chapter 7; `?ch=8` for chapter 8) |
| `tests/validate.js` | Chapter 7 regression test vs. spreadsheets (+ R ≥ 2·ra rule) |
| `tests/validate-ch8.js` | Chapter 8 regression test vs. the book's example and figures |
| `VALIDATION.md` | Numeric checks vs Excel references |
| `CHANGELOG.md` | Version history |
| `RELEASE_v2.1.0.md` | Release notes of this version |
| `LICENSE` | © 2026 Mostafa Shahmoradi |
| `.nojekyll` | GitHub Pages |

## Suggested GitHub Topics
`hydropower` · `tunnel-engineering` · `civil-engineering` · `geotechnical-engineering` · `pressure-tunnel` · `schleiss` · `reinforced-concrete` · `external-water-pressure` · `dewatering`

## Reference
Anton J. Schleiss — *Design of Pressure Tunnels and Shafts for Hydropower Plants*, Section 7.4 – Reinforced Concrete Linings, and Chapter 8 – Design of Concrete Linings for External Water Pressure during Dewatering and Down-Surges.

## License
© 2026 Mostafa Shahmoradi (مصطفی شاهمرادی). **All rights reserved.**

Personal and educational use with attribution is allowed.  
**Redistribution, rehosting, or rebranding without written permission is prohibited.**

This is intentional for a specialized engineering calculator (IP protection). It is **not** an MIT/Apache open-source grant. See [LICENSE](LICENSE).
