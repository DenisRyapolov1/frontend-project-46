#!/usr/bin/env node

import { Command } from 'commander';
import { pathFile } from '../src/index.js';
// import { genDiff } from '../src/index.js';

const program = new Command();

program
 .name('gendiff')
 .arguments('<filepath1> <filepath2>')
 .version('0.0.1', '-V, --version', 'output the version number')
 .description('Compares two configuration files and shows a difference.')
 .option('-f, --format [type]', 'output format') 
 .action((one, two) => {
   console.log(pathFile(one, two));
    //genDiff(one, two)
 });

 program.parse();