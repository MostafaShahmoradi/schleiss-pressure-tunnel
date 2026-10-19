# v2.1.0

## Chapter 8 added: external water pressure during dewatering and down-surges

**Developer:** Mostafa Shahmoradi / مصطفی شاهمرادی

### Highlights
- New **Chapter 8** tab: effective external water pressure on the lining of a horizontal tunnel or vertical shaft, loosened / grouted rock zone, compressive-stress check (Eq. 8.1–8.17).
- **Crack-width sliders** limited to the ranges of Table 8.1.
- Charts similar to **Figures 8.5, 8.6, 8.7**, CSV export, printable chapter-8 notebook, help manual section (FA/EN).
- **Chapter 7:** if the first seepage reach R is smaller than ra, R = 2·ra.
- All existing features kept (FA/EN, light/dark, save/open projects, tooltips with units, optimization, sensitivity).

### Validation
`node tests/validate.js` (chapter 7) and `node tests/validate-ch8.js` (chapter 8) – see VALIDATION.md and CHANGELOG.md.

### Live demo
https://mostafashahmoradi.github.io/schleiss-pressure-tunnel/

### License
© 2026 Mostafa Shahmoradi. All rights reserved. See LICENSE.
