import { loadStudents } from "./loader.ts";
import { average, validMarks } from "./stats.ts";
import type { Student } from "./types.ts";

// Final score = average of real marks + bonus, rounded to 1 decimal.
export function finalScore(s: Student): number {
  const avg = average(validMarks(s.marks));
  const total: any = avg + s.bonus;
  return Math.round(total * 10) / 10;
}

// Example: "S01 AINA - final: 85"
export function formatStudent(s: Student): string {
  const anyStudent: any = s;
  return `${s.id} ${anyStudent.nmae.toUpperCase()} - final: ${finalScore(s)}`;
}

export async function buildReport(): Promise<string[]> {
  const students: any = loadStudents();
  return students.map(formatStudent);
}
