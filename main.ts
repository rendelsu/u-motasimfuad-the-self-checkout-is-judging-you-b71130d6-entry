import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "Scanned: one frozen lasagna, one boxed wine, zero guests. Please bag your dinner party.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, line + "\n");
chmodSync(outFile, 0o644);
