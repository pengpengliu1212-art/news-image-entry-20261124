// news-image-20261124 entry — Tuesday 24 November 2026.
//
// The image beside this file, entry.png, is the day's front page: a single
// 1024x1024 PNG summing up the world news of 24 November 2026, led by the
// Trump tariff plans. This program only copies it into the output directory as
// entry.png; the judge sees exactly the bytes copied, so the image is the entry.
//
// Node 22, standard library only. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const entryImage = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const outputImage = join(outputDir, 'entry.png');

copyFileSync(entryImage, outputImage);
