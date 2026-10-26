# v2.1.0

**Developer:** Mostafa Shahmoradi / مصطفی شاهمرادی

### Added
- Explicit units next to every Chapter 7 input and a units table in Help.
- "Summary of the method" panel in the Chapter 7 tab.
- Minimum reinforcement ratio μ (default 0.5 %, editable, 0 = off) in the design check and in the reinforcement optimization.
- Scope note (rock masses only) in both tabs and the notebook; warning when Er < 500 MPa.
- Hint explaining the reinforcement optimization.

### Limits
- Only bar diameter and spacing are optimized; lining thickness optimization is not available yet.
- Not validated for soil.
- With μ ≥ 0.5 % the default ABOGWL sample (μ = 0.26 %) fails the check; set μ = 0 to disable.

Everything from v2.0.4 is included.

### Live demo
https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/

### License
© 2026 Mostafa Shahmoradi. All rights reserved. See LICENSE.
