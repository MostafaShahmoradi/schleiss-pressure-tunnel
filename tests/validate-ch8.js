// Regression test for the Chapter 8 engine (CH8 in index.html) vs. the worked example of Section 8.5 and Figs 8.5-8.7.
// Usage: node tests/validate-ch8.js   (exit code 1 if any check fails)
const fs = require("fs"), path = require("path");
const src = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const a = src.indexOf("const CH8 = (function"), b = src.indexOf("/* ===== CH8 ENGINE END");
const CH8 = new Function(src.slice(a, b) + ";return CH8;")();
const base = { type: "tunnel", ri: 5, ra: 5.5, b: 300, Kc: 1e-8, nu_w: 1e-6, vc: 0.2, bw: 30, SF: 2, gradient: "lin", eps_mm: 0.1, useRough: false, zone: "none" };
const cs = { A: { a1_mm: 0, n: 0, a2_mm: 0, d: 3 }, B: { a1_mm: 0, n: 0, a2_mm: 0.1, d: 3 }, C: { a1_mm: 0, n: 0, a2_mm: 0.3, d: 6 }, Clong: { a1_mm: 0.3, n: 3, a2_mm: 0.3, d: 6 } };
const zn = { none: { zone: "none" }, loose: { zone: "loosened", rg: 6.5 }, grout: { zone: "grouted", rg: 8.5, Kg: 1e-7 } };
const head = (c, Kr, z) => { const i = { ...base, ...cs[c], ...zn[z], Kr }; if (z === "loose") i.Kg = CH8.autoKg("loosened", Kr); return CH8.compute(i).ha; };
let fail = 0;
const chk = (name, v, ref, tol) => { const ok = Math.abs(v - ref) <= tol; console.log((ok ? "PASS " : "FAIL ") + name + " app=" + v.toFixed(2) + " book=" + ref + " (±" + tol + ")"); if (!ok) fail++; };
chk("Sec 8.5.2 Case B, Kr=1e-5 (text 129 m)", head("B", 1e-5, "none"), 129, 1);
chk("Sec 8.5.2 Case A, Kr=1e-5 (text 286 m; uncracked)", head("A", 1e-5, "none"), 286, 1);
chk("Sec 8.5.2 Case C, Kr=1e-4 (text 108 m; transverse cracks)", head("C", 1e-4, "none"), 108, 3);
chk("Fig 8.5 Case A, Kr=1e-6 (~203 m)", head("A", 1e-6, "none"), 203, 3);
chk("Fig 8.5 Case B, Kr=5e-6 (~82 m)", head("B", 5e-6, "none"), 82, 3);
chk("Fig 8.5 Case A, Kr=1e-4 (~298 m)", head("A", 1e-4, "none"), 298, 3);
chk("Fig 8.6 loosened zone, Case A Kr=1e-6 (~1 % above Fig 8.5)", (head("A", 1e-6, "loose") / head("A", 1e-6, "none") - 1) * 100, 1, 0.5);
chk("Fig 8.7 grouted zone, Case A Kr=1e-4 (text 205 m)", head("A", 1e-4, "grout"), 205, 1);
chk("Fig 8.7 grouted zone, Case A Kr=1e-6 (~158 m)", head("A", 1e-6, "grout"), 158, 3);
const r = CH8.compute({ ...base, ...cs.B, ...zn.none, Kr: 1e-5 });
chk("Sec 8.5.2 allowable head, SF=2, beta_w=30 (text 137 m)", r.ha_allow, 137, 1);
// Without the 1/d factor Case B would not match: documents why d is applied in Eqs 8.7/8.8
const wrong = CH8.compute({ ...base, ...cs.B, ...zn.none, d: 1, Kr: 1e-5 }).ha;
console.log("INFO Eq. 8.7 without 1/d would give " + wrong.toFixed(1) + " m for Case B (book: 129 m)");
const sh = CH8.compute({ ...base, ...cs.B, type: "shaft", b: 150, R: 55, Kr: 1e-6, ...zn.none });
chk("Shaft path (Eqs 8.2/8.13): 0 < head < b", sh.ha > 0 && sh.ha < 150 ? 1 : 0, 1, 0);
console.log(fail ? `\n${fail} check(s) FAILED` : "\nAll checks passed");
process.exit(fail ? 1 : 0);
