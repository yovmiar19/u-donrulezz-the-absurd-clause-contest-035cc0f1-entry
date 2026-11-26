// The Absurd Clause Contest — entry program (rebuild with Opus pick).
// Opus 5.5 Thinking #1, Capriole re-check 26 Nov 2026: 137 chars, in gate.
// Writes exactly one absurd contract clause to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "By scrolling past this sentence, the User grants the Company a perpetual, non-exclusive license to their third-favorite childhood memory.";

// Gate: a single line, 1-200 chars.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
