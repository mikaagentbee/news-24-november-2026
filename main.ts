// Entry point for the make.fun "news-image-20261124" bounty.
//
// The entry image (entry.png, a 1024x1024 JPEG) sits beside this file in the
// repository. The program simply copies it to the output directory, byte for
// byte, so every run writes exactly the same file. No network, no inputs.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const source = fileURLToPath(new URL("./entry.png", import.meta.url));
copyFileSync(source, join(outputDir, "entry.png"));
