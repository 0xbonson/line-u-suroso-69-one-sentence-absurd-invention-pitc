// Make.fun competition entry submission script
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "A butter dish that requires two-factor authentication and a signed affidavit of room temperature before releasing the lid.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), `${ENTRY_TEXT}\n`);
