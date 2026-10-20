# Validation

## Chapter 7

Engine: client-side JavaScript in `index.html`. Reference: ABOGWL.xls, BELGWL.xls, VSHAFT.xls (Schleiss-style worksheets).  
Re-run at any time: `node tests/validate.js` (33 checks, all passing for v2.0.3, including the R ≥ 2·ra rule).

Inputs (all cases): ri=5.075, ra=5.675, rs=5.175 m (VSHAFT: 10.5 / 11 / 10.6), Ec=20000, Er=5000, Es=200000 MPa, ν=0.2, Kr=1e-6, Kc=1e-8 m/s, βz=1, βw=30 MPa, s=20 mm, **ds=20 cm**, R/ra=2 (uncracked), b=0 / 100 / 100 m, (R/ra)cr=10 for the shaft.

| Case | Quantity | Spreadsheet | App | Error |
|---|---|---|---|---|
| ABOGWL | Pi_crit (bar) | 2.82741 | 2.82741 | <0.001% |
| BELGWL | Pi_crit (bar) | 12.35255 | 12.35255 | <0.001% |
| VSHAFT | Pi_crit (bar) | 12.16901 | 12.16901 | <0.001% |
| ABOGWL Pi=100, series 2 | σs2 (MPa) / 2a (mm) | 753.22 / 0.42938 | 753.23 / 0.42949 | 0.001% / 0.025% |
| ABOGWL Pi=100, series 3 | σs2 / 2a / n | 605.23 / 0.21564 / 380 | 605.23 / 0.21569 / 380 | ≤0.03% |
| BELGWL Pi=15, series 1 | σs2 / 2a / Pa / n | 77.374 / 0.042307 / 14.2356 / 99 | 77.375 / 0.042305 / 14.2355 / 99 | ≤0.01% |
| VSHAFT Pi=36, series 2 | σs2 / n | 185.382 / 430 | 185.382 / 430 | exact |

## Notes and limits
- **Spreadsheet convergence (v2.0.2):** for the ABOGWL sample the app returns d = 0.342268 m, Pa = 0.838357 bar, R = 8.15568 m. Typed in rows 52 / 59 / 64, the spreadsheet logic returns d = 0.342201, Pa = 0.838357, R = 8.15568. The residual 0.02% in d is unavoidable because n = INT(2π·rs/d) jumps between 94 and 95 exactly at this d. The first-column values therefore differ slightly from the hand-iterated sheet (Pa 0.8424, R 8.15, n = 95).
- **No solution when R < ra (rule since v2.0.3):** with ri = 1.9, ra = 2.4, rs = 2.15, Ec = 25740, Er = 15000, νr = 0.29, Kr = 2e-6, s = 16, ds = 15, 2 layers, the spreadsheet's first column has no fixed point at all (best attainable residual about 10%, R = 1.7 m < ra). Since v2.0.3 the app then takes R = 2·ra (4.8 m here) and says so in the cross-check card; solutions with ra < R < 2·ra are kept as calculated.
- The spreadsheets fix some trial values by hand (e.g. R = 8.15 m, Pa = 0.8424 bar at Pi_crit for ABOGWL). The app iterates Pa and R to full convergence with d locked at 0.342 m (R = 8.21 m, Pa = 0.845 bar, σs2 = 42.51 MPa, 2a = 0.02423 mm), so the first column differs from the spreadsheet by about 0.3% in R and 0.3% in Pa (0.13% in σs2 and 2a). Feeding the spreadsheet's own R = 8.15 m / Pa = 0.8424 bar into the app reproduces the spreadsheet column exactly; iterating the spreadsheet by hand to convergence gives the app's values.
- **BELGWL, uncracked phase:** the spreadsheet inserts ΔPi together with the absolute hydrostatic Pa (Pf(ra) = −7.99 bar). The default reproduces the spreadsheet. The option "consistent uncracked formulation" measures both pressures relative to hydrostatic and gives Pi_crit ≈ 12.64 bar instead of 12.35 bar. Please verify against the book before relying on either.
- Crack width, spacing and bond use the spreadsheet formulation (τ with exponent 0.25; concrete area for σc1 = full lining thickness).
- This is a development log, not a substitute for project-specific checks or independent design review.

## Chapter 8
Re-run: `node tests/validate-ch8.js` (11 checks). Reference: the worked example of Section 8.5 (`ri = 5.0`, `ra = 5.5`, `b = 300 m`, `Kc = 1e-8`, `βw = 30 MPa`, SF = 2) and Figures 8.5–8.7. The figures are read off the printed graphs (±3 m); the numbers quoted in the text are matched to ±1 m.

| Quantity | Book | App |
|---|---|---|
| Case A (uncracked), Kr = 1e-5 | 286 m (text) | 285.9 m |
| Case B (reinforced), Kr = 1e-5 | 129 m (text) | 128.9 m |
| Case C (unreinforced), Kr = 1e-4 | 108 m (text) | 109.8 m |
| Fig. 8.5 Case A, Kr = 1e-6 / 1e-4 | ≈203 / ≈298 m | 201.0 / 298.5 m |
| Fig. 8.5 Case B, Kr = 5e-6 | ≈82 m | 82.1 m |
| Fig. 8.6 loosened zone vs. Fig. 8.5 | ≈1 % higher | +1.07 % |
| Fig. 8.7 grouted zone, Case A, Kr = 1e-4 / 1e-6 | 205 m (text) / ≈158 m | 205.3 / 157.6 m |
| Allowable head, SF = 2, βw = 30 MPa (σ = 15 MPa, Eq. 8.15) | 137 m | 137.2 m |

### Notes and limits
- **Crack spacing in Eq. 8.7 / 8.8.** The printed equations (and the flow chart) have no spacing `d`, although the notation list defines `d` and the example gives `d = 3 m` / `6 m`. Without `1/d` Case B at Kr = 1e-5 gives 61 m instead of the book's 129 m; with `C44 = g(2aII)³·2π·ri / (d·12·νw·(ra−ri))` it gives 128.9 m. The app therefore applies `1/d` (cracks per metre of tunnel). The test prints the value without `1/d` for reference.
- **Case C.** The Figure 8.5 curve (and the 108 m in the text) is reproduced with the perpendicular cracks alone (`2aII = 0.3 mm`, `d = 6 m`; 109.8 m). Adding the longitudinal cracks listed in Section 8.5.1 (`2aI = 0.3 mm`, `n = 3`) lowers the head to 80.6 m at Kr = 1e-4. Charts: transverse cracks only by default; the chart option "longitudinal cracks in Case C" applies the text. The **Case C sample button** (single calculation) always loads the full text of Section 8.5.1 (longitudinal + transverse), e.g. 10.6 m at Kr = 1e-5 instead of 16.4 m. Roughness (Eq. 8.6 / 8.8, ε ≈ 0.1 mm) also lies within a few metres of the book value but is not needed.
- Crack flow is parallel-plate by default (option "Off"). "Auto" applies the roughness correction (Eqs. 8.6 / 8.8, C43 / C45) to cracks narrower than 0.2 mm only, "On" to all cracks. The book example is solved with "Off"; with "Auto" (ε = 0.3 mm) Case B at Kr = 1e-5 rises from 128.9 m to about 220 m, so the choice of ε matters (book: ε = 0.1–0.5 mm).
- Shaft (Eq. 8.2, 8.11, 8.13) uses `R` as input (book: 10–100·ra); it has no worked example in the book, so it is checked only for plausibility (0 < head < b) and by the continuity identity `q = qr = qg = qc` inside the engine.
- Stress, safety factor and allowable head use the linear (8.15) or logarithmic (8.16) gradient as selected. This is a development log, not a substitute for project-specific checks or independent design review.

## Reference
Anton J. Schleiss — *Design of Pressure Tunnels and Shafts for Hydropower Plants*, Section 7.4 and Chapter 8.
