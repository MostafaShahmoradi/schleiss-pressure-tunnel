# Design of permeable pressure tunnels for reinforced concrete linings under internal pressure using Schleiss theory

**Short name:** Schleiss Pressure Tunnel Design  
**فارسی:** طراحی تونل تحت فشار نفوذپذیر — پوشش بتن مسلح (نظریه اشلایس)  
**Developer:** Mostafa Shahmoradi / مصطفی شاهمرادی  
**Version:** 1.1.0

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue)](https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/)
[![Version](https://img.shields.io/badge/version-1.1.0-green)](https://github.com/MostafaShahmoradi/schleiss-pressure-tunnel/releases)
[![License: proprietary](https://img.shields.io/badge/license-All%20Rights%20Reserved-lightgrey)](LICENSE)

Online calculator for **permeable pressure tunnels and vertical shafts** with **reinforced concrete linings** under **internal pressure**, based on **Schleiss theory** (Section 7.4).

## Live demo
https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/

**Help / Manual:** https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/help.html

## Why a static HTML app (not Streamlit / React)?

The original brief mentioned frameworks such as Streamlit or React. For this tool the deliberate choice is a **static single-page application** (HTML/CSS/JS + Chart.js) because:

- It runs on **GitHub Pages with zero backend cost**
- No install, no Python runtime, no build step for end users
- Fast load for engineers who only need a browser
- Full source is easy to archive with the project

Calculation logic is implemented in client-side JavaScript and checked against the ABOGWL / BELGWL / VSHAFT reference spreadsheets (see [VALIDATION.md](VALIDATION.md)).

## Features
- Uncracked and cracked phases (Birkenmaier series)
- Structure modes: ABOGWL (above GWL), BELGWL (below GWL), VSHAFT (vertical shaft)
- Detailed per-formula results with units and tooltips
- Charts with crack-series markers
- Reinforcement optimization under designer constraints
- Multi-layer reinforcement, CSV export, sensitivity analysis
- Bilingual UI (Persian / English), light / dark themes
- Printable calculation notebook and full user manual (Help)

## Validation
See **[VALIDATION.md](VALIDATION.md)** for side-by-side numeric checks (typical relative error **&lt; 0.5%** on key parameters for the three sample regimes).

## How to use
1. Open the [live demo](https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/) or open `index.html` locally.
2. Load a sample or enter geometry, materials and groundwater data.
3. Click **Calculate** / **محاسبه**.
4. Optionally run optimization, CSV export or sensitivity tools.
5. Open **Help** for theory, usage and worked examples.

## Repository layout
| File | Role |
|------|------|
| `index.html` | Main calculator |
| `help.html` | User manual (FA/EN) |
| `report.html` | Printable calculation notebook |
| `VALIDATION.md` | Numeric checks vs Excel references |
| `CHANGELOG.md` | Version history |
| `LICENSE` | © 2026 Mostafa Shahmoradi |
| `.nojekyll` | GitHub Pages |

## Suggested GitHub Topics
`hydropower` · `tunnel-engineering` · `civil-engineering` · `geotechnical-engineering` · `pressure-tunnel` · `schleiss` · `reinforced-concrete`

## Reference
Anton J. Schleiss — *Design of Pressure Tunnels and Shafts for Hydropower Plants*, Section 7.4 – Reinforced Concrete Linings.

## License
© 2026 Mostafa Shahmoradi (مصطفی شاهمرادی). **All rights reserved.**

Personal and educational use with attribution is allowed.  
**Redistribution, rehosting, or rebranding without written permission is prohibited.**

This is intentional for a specialized engineering calculator (IP protection). It is **not** an MIT/Apache open-source grant. See [LICENSE](LICENSE).
