# Day 4 (Thu): Working with data

`data/projects.json` has 50 **fake** research projects. Some rows are **invalid** on purpose.

## Learn
- Arrays of objects; `map`, `filter`, `reduce`, `sort` (and why `sort` changes the original array)
- JSON, TypeScript `interface`
- `async` / `await`, reading a file with `fs/promises`
- Sources: javascript.info "Array methods", "Async/await"; TypeScript Handbook "Object Types"

## Validation rules (a project is valid only if ALL are true)
| Field | Rule | Error message (use the `ERRORS` constants) |
|---|---|---|
| title | not empty (after trimming spaces) | `ERRORS.title` |
| unit | one of `UNITS` | `ERRORS.unit` |
| status | one of `STATUSES` | `ERRORS.status` |
| budget | a **number** (not text) and ≥ 0 | `ERRORS.budget` |
| startDate | format `YYYY-MM-DD` **and** a real calendar date | `ERRORS.startDate` |

## Task
Finish the 5 functions in `src/report.ts`. Then `npm start` prints a report using them.
```bash
npm install
npm test
npm start
```
Rules: invalid projects are **excluded** from `activeProjects`, `budgetByUnit` and `sortByStartDate`.
`sortByStartDate` must **not** change the original array.

## Done when
- `npm test` all pass and `npm start` prints the report.
- At check-in you can explain **why each invalid row is invalid** and walk through one of `filter` / `reduce` / `sort` line by line.
