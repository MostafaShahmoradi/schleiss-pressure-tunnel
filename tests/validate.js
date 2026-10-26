// Regression test: compares the engine in index.html with the reference spreadsheets.
// Usage:  node tests/validate.js      (exit code 1 if any check fails)
const fs = require("fs"), path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const i = src.indexOf("/* ========== Structure mode"), j = src.indexOf("/* ========== Main calculation");
const E = new Function("const document={getElementById:()=>null};" + src.slice(i, j) +
  "return {calculateUncracked,computeCrackedExcel,calculateCrackedPhase,reinfRatioPct,resolveStructMode};")();
const base = { ri: 5.075, ra: 5.675, rs: 5.175, Ec: 20000, Er: 5000, Es: 200000, vc: .2, vr: .2, Kr: 1e-6, Kc: 1e-8,
  Bz: 1, Bw: 30, s: 20, ds: 20, n_layers: 1, R_over_ra: 2, Rra_cracked: 10 };
const cases = {
  ABOGWL: { ...base, b: 0, struct_mode: "above" },
  BELGWL: { ...base, b: 100, struct_mode: "below" },
  VSHAFT: { ...base, ri: 10.5, ra: 11, rs: 10.6, b: 100, struct_mode: "shaft" }
};
// [case, Pi, seriesIndex, field, spreadsheet value, relative tolerance]
const ref = [
  ["ABOGWL", 5, 0, "ss2", 73.6943, 3e-3], ["ABOGWL", 5, 0, "two_a", 0.042010, 3e-3], ["ABOGWL", 5, 0, "Pa_cracked", 3.8134, 3e-3],
  ["ABOGWL", 20, 0, "ss2", 291.505, 3e-3], ["ABOGWL", 20, 0, "two_a", 0.166175, 3e-3],
  ["ABOGWL", 27, 1, "ss2", 201.680, 3e-3], ["ABOGWL", 27, 1, "two_a", 0.114969, 3e-3], ["ABOGWL", 27, 1, "n", 188, 0],
  ["ABOGWL", 100, 1, "ss2", 753.22, 3e-3], ["ABOGWL", 100, 1, "two_a", 0.429382, 3e-3],
  ["ABOGWL", 100, 2, "ss2", 605.23, 3e-3], ["ABOGWL", 100, 2, "two_a", 0.215636, 3e-3], ["ABOGWL", 100, 2, "n", 376, 0],
  ["BELGWL", 15, 0, "ss2", 77.374, 3e-3], ["BELGWL", 15, 0, "two_a", 0.042307, 3e-3], ["BELGWL", 15, 0, "Pa_cracked", 14.2356, 3e-3], ["BELGWL", 15, 0, "n", 99, 0],
  ["BELGWL", 40, 1, "ss2", 225.168, 3e-3], ["BELGWL", 40, 1, "n", 198, 0],
  ["VSHAFT", 15, 0, "ss2", 74.612, 3e-3], ["VSHAFT", 15, 0, "two_a", 0.038384, 3e-3], ["VSHAFT", 15, 0, "Pa_cracked", 14.3736, 3e-3], ["VSHAFT", 15, 0, "n", 215, 0],
  ["VSHAFT", 36, 1, "ss2", 185.382, 3e-3], ["VSHAFT", 36, 1, "n", 430, 0]
];
let fail = 0;
const line = (ok, t) => { console.log((ok ? "PASS " : "FAIL ") + t); if (!ok) fail++; };
const crit = { ABOGWL: 2.827408, BELGWL: 12.352547, VSHAFT: 12.16901 };
const U = {}, D = {};
for (const k in cases) {
  U[k] = E.calculateUncracked(cases[k]);
  D[k] = E.computeCrackedExcel({ ...cases[k], Pi: U[k].Pi_crit }, U[k].Pi_crit, 0, null).d;
  const e = Math.abs(U[k].Pi_crit - crit[k]) / crit[k];
  line(e < 1e-4, `${k} Pi_crit app=${U[k].Pi_crit.toFixed(5)} ref=${crit[k]} err=${(e * 100).toFixed(4)}%`);
}
for (const [k, Pi, si, f, r, tol] of ref) {
  const v = E.computeCrackedExcel({ ...cases[k], Pi }, Pi, si, D[k])[f];
  const e = r === 0 ? Math.abs(v) : Math.abs(v - r) / Math.abs(r);
  line(e <= tol, `${k} Pi=${Pi} S${si + 1} ${f} app=${(+v).toPrecision(6)} ref=${r} err=${(e * 100).toFixed(3)}%`);
}
// Spreadsheet convergence: typed d / Pa / R must reproduce themselves in rows 53 / 60 / 65 (ABOGWL sample)
{
  const b = cases.ABOGWL, Pc = U.ABOGWL.Pi_crit;
  const fc = E.computeCrackedExcel({ ...b, Pi: Pc }, Pc, 0, null);
  const x = E.computeCrackedExcel({ ...b, Pi: Pc, __probe: { Pa: fc.Pa_cracked, R: fc.R_used || fc.R_calc } }, Pc, 0, fc.d);
  const e = Math.max(Math.abs(x.d_calc / fc.d - 1), Math.abs(x.Pa_new / fc.Pa_cracked - 1), Math.abs(x.R_calc / (fc.R_used || fc.R_calc) - 1));
  line(e < 5e-4, `ABOGWL first column converged in spreadsheet logic: d ${fc.d.toFixed(5)}/${x.d_calc.toFixed(5)}, Pa ${fc.Pa_cracked.toFixed(5)}/${x.Pa_new.toFixed(5)}, R ${(fc.R_used || fc.R_calc).toFixed(4)}/${x.R_calc.toFixed(4)} (max err ${(e * 100).toFixed(3)}%)`);
}
// Behaviour checks added in v2.0
const unc = E.calculateCrackedPhase({ ...cases.ABOGWL, Pi: 1 }, U.ABOGWL.Pi_crit);
line(unc.uncrackedState === true && unc.two_a === 0, "Pi < Pi_crit -> reported as uncracked (no crack quantities)");
const sw = E.calculateCrackedPhase({ ...cases.ABOGWL, Pi: 25.8 }, U.ABOGWL.Pi_crit);
line(sw.currentSeries === 1, "series switch only when sigma_c1 >= Bz (Pi=25.8 still series 1)");
// v2.0.3: if the first seepage reach R comes out smaller than ra, R is taken as 2*ra
{
  const w = { ri: 1.9, ra: 2.4, rs: 2.15, Ec: 25740, Er: 15000, Es: 200000, vc: .2, vr: .29, Kr: 2e-6, Kc: 1e-8, Bz: 1, Bw: 30,
    s: 16, ds: 15, n_layers: 2, R_over_ra: 2, Rra_cracked: 10, b: 0, struct_mode: "above" };
  const uw = E.calculateUncracked(w);
  const rw = E.computeCrackedExcel({ ...w, Pi: uw.Pi_crit }, uw.Pi_crit, 0, null);
  line(Math.abs(rw.R_calc - 2 * w.ra) < 1e-6 && rw.R_rule === true, `R < ra -> R = 2*ra (R=${rw.R_calc.toFixed(3)}, 2ra=${(2 * w.ra).toFixed(3)})`);
  line(Math.abs(U.ABOGWL.Pi_crit - 2.827408) < 1e-3 && D.ABOGWL > 0, "ABOGWL sample unaffected by the R rule");
}
// v2.1.0: reinforcement ratio mu = As / (thickness x 1 m)
{
  const mu = E.reinfRatioPct(base);                       // s=20 mm, ds=20 cm, t=0.6 m -> As=1570.8 mm2/m
  line(Math.abs(mu - 0.26180) < 1e-4, `mu (s=20, ds=20 cm, t=0.6 m) = ${mu.toFixed(5)} % (expected 0.26180)`);
  const mu2 = E.reinfRatioPct({ ...base, n_layers: 2 });
  line(Math.abs(mu2 / mu - 2) < 1e-9, "mu doubles with two layers");
  const mu3 = E.reinfRatioPct({ ...base, s: 32, ds: 10 });  // As=8042.5 mm2/m
  line(mu3 >= 0.5 && mu < 0.5, `0.5 % limit: s=20/ds=20 fails (${mu.toFixed(3)} %), s=32/ds=10 passes (${mu3.toFixed(3)} %)`);
}
console.log(fail ? `\n${fail} check(s) FAILED` : "\nAll checks passed");
process.exit(fail ? 1 : 0);
