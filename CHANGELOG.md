# Changelog

All notable changes to **Schleiss Pressure Tunnel Design** are documented in this file.

## [2.1.0] – 2026-10-26
Changes following review comments by an academic reviewer.

### Added
- **Explicit units** next to every Chapter 7 input (badges such as [m], [MPa], [bar], [m/s]) and a units table in Help (FA/EN). Bar diameter and spacing keep their units in the label (mm, cm).
- **"Summary of the method" panel** at the top of the Chapter 7 tab (collapsible, FA/EN): uncracked phase, crack series, seepage iteration, design check, optimization, units.
- **Minimum reinforcement ratio μ** = As / (lining thickness × 1 m) × 100. New input "Min. reinforcement ratio μ" (default 0.5 %, 0 = disabled) in the designer constraints; checked in the design summary card and in the reinforcement optimization (new column in the table, included in the feasibility test). The 0.5 % default should be verified against the project code.
- **Scope note** (Chapter 7 and 8 tabs, report): rock masses only, not validated for soil. Non-blocking warning when Er < 500 MPa (approximate threshold).
- Hint under the buttons explaining what the reinforcement optimization does (and that lining-thickness optimization is not available yet).
- Help sections 13 (units) and 14 (scope, minimum reinforcement); μ row in the calculation notebook.
- Tests: three checks for μ in `tests/validate.js` (36 checks in total).

### Changed
- With the default μ ≥ 0.5 % the built-in ABOGWL sample (s = 20 mm, ds = 20 cm, t = 0.6 m → μ = 0.26 %) is flagged ✗ in the summary card and the optimizer proposes heavier reinforcement. Set μ to 0 to reproduce the earlier behaviour.

## [2.0.4] – 2026-10-20
### Fixed
- **"Import from Chapter 7" did not transfer crack width and number** (message "no Chapter 7 calculation yet") when the charts library could not be loaded from the CDN (blocked or slow network): the chart error stopped the calculation before its results were stored. The results are now stored before the charts are drawn, a missing charts library no longer interrupts a calculation (the status line says that charts are unavailable), and the calculation notebook data is saved as well.
- Chart.js 4.4.1 is now bundled in `vendor/` (MIT, license included) and loaded locally first, with the CDN only as a fallback; charts and notebooks work offline.

### Added
- SEO: bilingual (English / Persian) README with keywords, FAQ, About text and Topics; extended meta keywords; `sitemap.xml` and `robots.txt` for GitHub Pages.

## [2.0.3] – 2026-10-20
### Added
- **Import from Chapter 7:** a button in the Chapter 8 tab copies ri, ra, Kr, Kc, νc, βw, structure type, b (if above ra), R/ra (shaft) and, from the last Chapter 7 calculation, the crack width 2a and number n (as 2aI and n; lining type is set to "custom"). Imported cells are shown in a separate colour with a ⇩ mark until edited. If Chapter 7 has not been calculated, or its inputs changed after the calculation, only the inputs are imported and a warning is shown.
- **Colour-coded interface:** file buttons (green), help (purple), language (amber), theme (grey) and the chapter tabs (blue for Chapter 7, teal for Chapter 8).
- **Chapter 8 tab** (Schleiss, Design of Concrete Linings for External Water Pressure during Dewatering and Down-Surges): effective external water pressure `pa`/`pg`, seepage rate `q`, conductivities C1–C4 (Eq. 8.1–8.9), pressure formulas 8.10–8.14, compressive-stress check 8.15–8.17, buckling slenderness, drainage / grouting advice.
- Horizontal tunnel **and** vertical shaft; optional loosened / grouted rock zone; optional crack roughness (Eq. 8.6 / 8.8).
- **Crack-width sliders** limited to the ranges of Table 8.1 (unreinforced / reinforced / custom, with number boxes).
- Charts similar to Figures 8.5, 8.6 and 8.7 (Cases A, B, C, current lining, allowable head, design point), CSV export of the curves.
- Chapter-8 calculation notebook (`report.html?ch=8`), chapter-8 section in the help manual (FA/EN), `tests/validate-ch8.js`.
- Project files store the chapter-8 inputs and the active tab; the help button opens the chapter-8 section when that tab is active.

### Changed
- **Chapter 7 (ABOGWL):** if the first value of the seepage reach `R` is smaller than `ra`, `R = 2·ra` is used (previously `R` was held at 1.05·`ra`). Samples with a valid solution are unaffected.
- Eq. 8.7 / 8.8: the conductivity of cracks perpendicular to the axis is divided by the crack spacing `d` (missing in the printed equations; required to reproduce the book's example, see VALIDATION.md).
- Page title, meta tags and structured data now describe both chapters.
- **Crack roughness effect** is now a three-way option: Off (parallel flow, default), Auto (roughness only for cracks < 0.2 mm, as in the book) and On (all cracks). Older project files with the former checkbox are converted (checked → Auto).
- Chapter 8 results and notebook now show the roughness conductivities under their book names **C43** (Eq. 8.6) and **C45** (Eq. 8.8) when the roughness option is active (with the reduction factor), and state explicitly when roughness is not applied (default: parallel-plate flow, C42 / C44).

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
