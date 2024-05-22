#!/usr/bin/env node

import { Command } from 'commander';
import { pathik } from '../src/index.js'
import fs from 'fs';

const program = new Command();

program
 .name('gendiff')
 .arguments("<filepath1> <filepath2>")
 .version('0.0.1', '-V, --version', 'output the version number')
 .option('-f, --format [type]', 'output format')
 .description('Compares two configuration files and shows a difference.')
 .action((onefile, twofile) => {
    pathik(onefile, twofile)
 });

 program.parse();  