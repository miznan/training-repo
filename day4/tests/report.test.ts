import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { ERRORS, type Project } from "../src/types.ts";
import { validateProject, activeProjects, budgetByUnit, sortByStartDate, findInvalid } from "../src/report.ts";

const projects: Project[] = JSON.parse(
  await readFile(new URL("../data/projects.json", import.meta.url), "utf-8"),
);

test("validateProject: valid project has no errors", () => {
  const ok: Project = { id: "X1", title: "Test", unit: "IMR", status: "Active", budget: 0, startDate: "2024-02-29" };
  assert.deepEqual(validateProject(ok), []);
});

test("validateProject: every rule", () => {
  const bad = { id: "X2", title: "  ", unit: "ABC", status: "Done", budget: "100", startDate: "2023-02-29" } as unknown as Project;
  assert.deepEqual(validateProject(bad), [ERRORS.title, ERRORS.unit, ERRORS.status, ERRORS.budget, ERRORS.startDate]);
});

test("findInvalid finds the 6 bad rows", () => {
  assert.deepEqual(findInvalid(projects).map((p) => p.id), ["P007", "P013", "P021", "P034", "P042", "P046"]);
});

test("activeProjects", () => {
  assert.deepEqual(activeProjects(projects).map((p) => p.id), ["P001", "P002", "P003", "P005", "P006", "P009", "P010", "P012", "P016", "P017", "P018", "P019", "P022", "P023", "P025", "P026", "P027", "P029", "P030", "P033", "P035", "P038", "P041", "P043", "P045", "P047"]);
});

test("budgetByUnit", () => {
  const result = budgetByUnit(projects);
  assert.deepEqual(result, {"ICR": 720500, "IHBR": 1293500, "IHM": 1518000, "IHSR": 575500, "IMR": 630000, "IPH": 1040500});
  assert.deepEqual(Object.keys(result), ["ICR", "IHBR", "IHM", "IHSR", "IMR", "IPH"]);
});

test("sortByStartDate", () => {
  const before = projects.map((p) => p.id);
  const result = sortByStartDate(projects);
  assert.deepEqual(result.map((p) => p.id), ["P003", "P043", "P001", "P038", "P022", "P041", "P031", "P047", "P006", "P044", "P036", "P009", "P004", "P029", "P014", "P002", "P037", "P028", "P032", "P011", "P015", "P027", "P016", "P018", "P030", "P017", "P035", "P012", "P024", "P033", "P010", "P008", "P025", "P039", "P020", "P049", "P026", "P019", "P045", "P005", "P040", "P048", "P050", "P023"]);
  assert.deepEqual(projects.map((p) => p.id), before, "original array must not change");
});
