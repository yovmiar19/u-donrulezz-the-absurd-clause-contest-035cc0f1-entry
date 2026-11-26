// The Absurd Clause Contest — entry program.
// Writes exactly one absurd contract clause to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The Company reserves the right to replace your username with a small decorative gourd at any time, with or without notice, and without liability.";

// Gate: a single line, 1-200 chars.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
