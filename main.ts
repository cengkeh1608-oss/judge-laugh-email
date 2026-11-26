import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line, 200 characters or fewer. The judge reads entries two
// at a time and picks the funnier one, so the line has to land in a
// single read: a plain statement, one concrete detail, twist at the end.
const line =
  "The agent summarised the meeting in one line: 'Nobody knew why we were there, including the person who called it.'";

// The sealed scorer only accepts 1-200 characters of non-blank UTF-8
// text, so refuse to write anything outside that window instead of
// shipping an entry the gate would list with 0.
if (line.length < 1 || line.length > 200 || line.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
