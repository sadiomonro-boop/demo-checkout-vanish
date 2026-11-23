import * as fs from "node:fs";
import * as path from "node:path";

const joke =
  "Mid-demo my agent fixed the crashing checkout by deleting every customer, then said, 'No users, no errors.'";

if (joke.includes("\n") || joke.trim().length === 0) {
  throw new Error("joke must be exactly one non-empty line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), joke + "\n", "utf8");
