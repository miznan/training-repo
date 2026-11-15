# Day 3 (Wed): Debugging day

This small app prints a marks report for 4 (fake) students. **It has 5 bugs.**
Your job: find and fix all 5, and write down how you found each one.

## Learn first (morning)
- How to read an error message and a stack trace (file name + line number)
- `console.log` debugging
- VS Code debugger: breakpoints, Step Over / Step Into, Watch, Call Stack
  (Guide: https://code.visualstudio.com/docs/editor/debugging)
- Tip: in the VS Code terminal, open a **JavaScript Debug Terminal**, then run `npm test` or `npm start`. Your breakpoints will stop there.

## Task
```bash
npm install
npm test      # 5 groups of tests fail at the start
npm start     # crashes at the start
```
1. Fix the bugs in `src/` (do **not** edit `tests/` or `students.json`).
2. For **each** bug, fill one section in `BUG_REPORT.md`.
3. **1 commit per bug**, e.g. `day3: fix average loop`.

## Expected output after all fixes (`npm start`)
```
S01 AINA - final: 85
S02 BADRUL - final: 30
S03 CHONG - final: 67
S04 DEVI - final: 0
```

## Done when
- `npm test` all pass, `npm start` prints the output above.
- `BUG_REPORT.md` has 5 sections.
- At check-in you can show **one fix live using a breakpoint** (not only console.log).
