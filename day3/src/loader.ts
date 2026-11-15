import { readFile } from "node:fs/promises";
import type { Student } from "./types.ts";

export async function loadStudents(): Promise<Student[]> {
  const text = await readFile(new URL("./students.json", import.meta.url), "utf-8");
  return JSON.parse(text) as Student[];
}
