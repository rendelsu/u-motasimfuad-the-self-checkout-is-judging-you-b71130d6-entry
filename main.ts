import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, "One cucumber, two batteries, and a sympathy card — I don't judge, I just keep the receipts.", "utf8");
chmodSync(outFile, 0o644);
