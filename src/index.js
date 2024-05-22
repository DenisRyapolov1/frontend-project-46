#!/usr/bin/env node

import * as path from 'node:path'
import process from 'node:process';
import fs from 'fs';

export function pathik(filepath1, filepath2) {
    const onefile = path.resolve(process.cwd(),filepath1);
    const twofile = path.resolve(process.cwd(),filepath2);
    console.log(onefile, twofile)

    const fileone = JSON.parse(fs.readFileSync(onefile));
    const filetwo = JSON.parse(fs.readFileSync(twofile))

    console.log(fileone, filetwo);
}