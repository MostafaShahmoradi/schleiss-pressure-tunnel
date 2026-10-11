# Validation

Engine: client-side JavaScript in `index.html`. Reference: ABOGWL.xls, BELGWL.xls, VSHAFT.xls (Schleiss-style worksheets).  
Re-run at any time: `node tests/validate.js` (27 numeric checks + 3 behaviour checks, all passing for v2.0.2).

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
- **No solution when R < ra:** with ri = 1.9, ra = 2.4, rs = 2.15, Ec = 25740, Er = 15000, νr = 0.29, Kr = 2e-6, s = 16, ds = 15, 2 layers, the spreadsheet's first column has no fixed point at all (best attainable residual about 10%, R = 1.7 m < ra). The app keeps R ≥ 1.05·ra there and says so in the cross-check card.
- The spreadsheets fix some trial values by hand (e.g. R = 8.15 m, Pa = 0.8424 bar at Pi_crit for ABOGWL). The app iterates Pa and R to full convergence with d locked at 0.342 m (R = 8.21 m, Pa = 0.845 bar, σs2 = 42.51 MPa, 2a = 0.02423 mm), so the first column differs from the spreadsheet by about 0.3% in R and 0.3% in Pa (0.13% in σs2 and 2a). Feeding the spreadsheet's own R = 8.15 m / Pa = 0.8424 bar into the app reproduces the spreadsheet column exactly; iterating the spreadsheet by hand to convergence gives the app's values.
- **BELGWL, uncracked phase:** the spreadsheet inserts ΔPi together with the absolute hydrostatic Pa (Pf(ra) = −7.99 bar). The default reproduces the spreadsheet. The option "consistent uncracked formulation" measures both pressures relative to hydrostatic and gives Pi_crit ≈ 12.64 bar instead of 12.35 bar. Please verify against the book before relying on either.
- Crack width, spacing and bond use the spreadsheet formulation (τ with exponent 0.25; concrete area for σc1 = full lining thickness).
- This is a development log, not a substitute for project-specific checks or independent design review.

## Reference
Anton J. Schleiss — *Design of Pressure Tunnels and Shafts for Hydropower Plants*, Section 7.4.
