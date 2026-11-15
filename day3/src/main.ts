import { buildReport } from "./report.ts";

const lines = await buildReport();
for (const line of lines) {
  console.log(line);
}
