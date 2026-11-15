import { readFile } from "node:fs/promises";
import type { Project } from "./types.ts";
import { activeProjects, budgetByUnit, sortByStartDate, findInvalid } from "./report.ts";

const text = await readFile(new URL("../data/projects.json", import.meta.url), "utf-8");
const projects: Project[] = JSON.parse(text);

console.log(`Total rows: ${projects.length}`);

const invalid = findInvalid(projects);
console.log(`\nInvalid rows: ${invalid.length}`);
for (const p of invalid) console.log(`  ${p.id}: ${p.errors.join(", ")}`);

console.log(`\nActive projects: ${activeProjects(projects).length}`);

console.log("\nBudget by unit (RM):");
for (const [unit, total] of Object.entries(budgetByUnit(projects))) {
  console.log(`  ${unit.padEnd(5)} ${total.toLocaleString("en-MY")}`);
}

const sorted = sortByStartDate(projects);
console.log(`\nOldest: ${sorted[0]?.id} (${sorted[0]?.startDate})`);
console.log(`Newest: ${sorted[sorted.length - 1]?.id} (${sorted[sorted.length - 1]?.startDate})`);
