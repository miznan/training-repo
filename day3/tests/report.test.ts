import { test } from "node:test";
import assert from "node:assert/strict";
import { average, hasMark, validMarks } from "../src/stats.ts";
import { finalScore, formatStudent, buildReport } from "../src/report.ts";
import type { Student } from "../src/types.ts";

const aina: Student = { id: "S01", name: "Aina", marks: [70, 80, 90], bonus: "5" };
const badrul: Student = { id: "S02", name: "Badrul", marks: [60, "", 0], bonus: "0" };

test("average", () => {
  assert.equal(average([70, 80, 90]), 80);
  assert.equal(average([]), 0);
});

test("hasMark / validMarks", () => {
  assert.equal(hasMark(0), true);
  assert.equal(hasMark(""), false);
  assert.deepEqual(validMarks([60, "", 0]), [60, 0]);
});

test("finalScore", () => {
  assert.equal(finalScore(aina), 85);
  assert.equal(finalScore(badrul), 30);
});

test("formatStudent", () => {
  assert.equal(formatStudent(aina), "S01 AINA - final: 85");
});

test("buildReport", async () => {
  const lines = await buildReport();
  assert.deepEqual(lines, [
    "S01 AINA - final: 85",
    "S02 BADRUL - final: 30",
    "S03 CHONG - final: 67",
    "S04 DEVI - final: 0",
  ]);
});
