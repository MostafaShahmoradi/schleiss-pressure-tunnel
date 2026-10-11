# Changelog

All notable changes to **Schleiss Pressure Tunnel Design** are documented in this file.

## [2.0.2] – 2026-10-11
### Changed
- **ABOGWL first column now converges in the spreadsheet itself.** The app solves d, Pa and R together (Newton on the spreadsheet equations, integer crack count n respected). The values shown in the new "Cross-check with ABOGWL spreadsheet" card can be typed into rows 52, 59 and 64; rows 53, 60 and 65 then return the same numbers (sample: Pa and R exact, d within 0.02%, limited only by the INT() jump of n).
- Sample now uses n = 94 (d = 0.3423 m) instead of the hand-typed 0.342 (n = 95); series 2 / 3 give n = 188 / 376.
- Pa/R outer loop tolerance tightened (1e-6 / 1e-7).
- If the spreadsheet equations have no solution (e.g. R < ra at first cracking), the card says so and explains why; the app keeps R ≥ 1.05·ra there.

## [2.0.1] – 2026-10-11
Includes everything listed under 2.0.0 below, plus the ABOGWL convergence fix (first-crack spacing d locked at 1 mm; Pa and R now converge deterministically).

## [2.0.0] – 2026-10-11

### Fixed
- **Units:** bar spacing `ds` is in **cm** (as in the spreadsheets). Labels/tooltips/report said mm, which made As ten times too small for users who followed the label.
- Optimizer filter compared `ds` (cm) with `s` (mm) and wrongly discarded 39 of 99 default combinations; now `10·ds ≥ s`.
- Pi below Pi_crit is reported as **uncracked** instead of fake crack values (2a, σs2, negative q). Optimizer stops with an explanation if max Pi < Pi_crit.
- Number of cracks now doubles with each series (n, 2n, 4n …) like the spreadsheets (was recomputed with floor(), e.g. 431 instead of 430).
- Series switch uses σc1 ≥ βz in both the calculation and the series history (a 0.98·βz threshold made them disagree).
- Above-GWL (ABOGWL) Pa/R loop did not converge: the integer crack count n=INT(2π·rs/d) made it oscillate between n=94 and n=95 and it stopped after 60 iterations on an arbitrary state. First-crack spacing d is now solved with a continuous n, rounded to 1 mm (0.342 m, as in the spreadsheet) and locked; Pa and R are then iterated to convergence.
- Removed the hard-coded "matches Excel ✓" badge (it only compared a few inputs, not results).
- Sensitivity analysis skips cases where Pi ≤ ρgb instead of showing meaningless numbers.
- Default seepage limit `q` changed from 1e-3 to 5e-4 m³/s/m; default max R from 50 to 100 m.

### Added
- New / Open / Save / Save As for projects (`.schleiss.json`), keyboard shortcuts, unsaved-changes marker.
- Design-check summary card, quick-start guide, input validation with clear messages, unit labels.
- Optional "consistent uncracked formulation" for BELGWL (the spreadsheet mixes ΔPi with an absolute Pa; default stays spreadsheet-identical).
- `tests/validate.js` regression test.

## [1.1.0] – 2026-09-19

### Added
- `VALIDATION.md` with ABOGWL / BELGWL / VSHAFT numerical checks vs reference spreadsheets
- `CHANGELOG.md`
- `og:url` and corrected canonical URL for GitHub Pages path

### Changed
- Canonical URL set to `https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/`
- README: architecture note, badges, Topics, live demo link for renamed repository
- Branding: full SEO name + short UI title (FA/EN)

### Fixed
- Incorrect canonical pointing at domain root (SEO)

## [1.0.0] – 2026-09-19

### Added
- First public release of the static calculator (Schleiss §7.4)
- Uncracked + cracked phases, ABOGWL / BELGWL / VSHAFT
- Charts, reinforcement optimization, multi-layer As, CSV, sensitivity
- Bilingual UI, themes, printable report, Help manual
- LICENSE (© 2026 Mostafa Shahmoradi)
