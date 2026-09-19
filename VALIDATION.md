# Validation

Numerical checks of **Schleiss Pressure Tunnel Design** against the reference spreadsheets shipped with Schleiss-style worksheets (ABOGWL / BELGWL / VSHAFT).

Engine: client-side JavaScript in `index.html` (uncracked + cracked Birkenmaier series).  
Developer: Mostafa Shahmoradi / مصطفی شاهمرادی  
App version documented: **v1.1.0**

> Relative error = `|app − ref| / max(|ref|, ε)`. Values below were reproduced on the live engine (browser evaluation).

---

## 1. ABOGWL — tunnel above groundwater

**Inputs:**  
`ri=5.075 m`, `ra=5.675 m`, `rs=5.175 m`, `Ec=20000 MPa`, `Er=5000 MPa`, `Es=200000 MPa`,  
`νc=νr=0.2`, `Kr=1e-6 m/s`, `Kc=1e-8 m/s`, `βz=1 MPa`, `βw=30 MPa`,  
`s=20 mm`, `ds=20 mm`, `n_layers=1`, `b=0`, `R/ra=2`, mode = **above**, design `Pi ≈ Pi_crit`.

| Parameter | Reference (ABOGWL.xls) | App | Rel. error |
|-----------|------------------------|-----|------------|
| Pi_crit (bar) | ≈ 2.827 | 2.8274 | < 0.1% |
| Pa cracked at crit (bar) | ≈ 0.845 | 0.8453 | < 0.1% |
| σs2 (MPa) | ≈ 42.5 | 42.50 | < 0.1% |
| 2a (mm) | ≈ 0.0242 | 0.02424 | < 0.5% |
| R (m) | ≈ 8.2 | 8.21 | < 0.5% |
| n cracks | ≈ 95 | 95 | exact |

**How to reproduce:** open the app → sample **above GWL** → Calculate.

---

## 2. BELGWL — tunnel below groundwater

**Inputs:** same geometry/materials as §1 with `b=100 m`, mode = **below**, `Pi ≈ 12.35 bar`.

| Parameter | Reference (BELGWL.xls) | App | Rel. error |
|-----------|------------------------|-----|------------|
| Pi_crit absolute (bar) | ≈ 12.35 | 12.3525 | < 0.1% |
| Pa (bar) | ≈ 10.95 | 10.9463 | < 0.1% |
| σs2 (MPa) | ≈ 40.1 | 40.13 | < 0.2% |
| 2a (mm) | ≈ 0.022 | 0.02194 | < 0.5% |
| R (m) | 100 (= b) | 100 | exact |

**How to reproduce:** sample **below GWL** → Calculate.

---

## 3. VSHAFT — vertical shaft

**Inputs:**  
`ri=10.5 m`, `ra=11 m`, `rs=10.6 m`, same material defaults, `b=100 m`,  
`(R/ra)_cr=10`, `s=ds=20 mm`, mode = **shaft**, `Pi ≈ 12.17 bar`.

| Parameter | Reference (VSHAFT.xls) | App | Rel. error |
|-----------|------------------------|-----|------------|
| Pi_crit absolute (bar) | ≈ 12.169 | 12.169 | < 0.1% |
| Pa (bar) | ≈ 10.92 | 10.9189 | < 0.1% |
| σs2 (MPa) | ≈ 37.0 | 36.98 | < 0.1% |
| R (m) | 110 | 110 | exact |
| n cracks | ≈ 215 | 215 | exact |

**How to reproduce:** sample **vertical shaft** → Calculate.

---

## 4. Multi-layer reinforcement (sanity)

Same ABOGWL geometry at first crack; `n_layers=2` doubles `As` and reduces steel stress / crack width as expected:

| n_layers | As (mm²/m) | σs2 (MPa) | 2a (mm) |
|----------|------------|-----------|---------|
| 1 | 1570.8 | 42.50 | 0.02424 |
| 2 | 3141.6 | 33.40 | 0.01593 |

---

## 5. Notes & limits

- Excel worksheets often converge outer pressure / reach by **manual trial** on selected rows; the app uses **closed-form or bisection** equivalents intended to match those targets.
- Crack spacing `d` is **locked at series 1** and halved in later series (Birkenmaier / Schleiss recurrence for `m` and `p`).
- Series end pressures depend on the analysis ceiling (`Pi_hist_max`) and the condition `σc1 ≥ βz`.
- This file is a **development validation log**, not a substitute for project-specific code checks, site data, or independent design review.

## Reference

Anton J. Schleiss — *Design of Pressure Tunnels and Shafts for Hydropower Plants*, Section 7.4.  
Companion spreadsheets: ABOGWL.xls, BELGWL.xls, VSHAFT.xls.
