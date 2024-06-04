#!/usr/bin/env node

import fs from 'fs';
import _ from 'lodash';
import * as path from 'node:path';
import process from 'node:process';

function readFile(filepath) {
  const pathF = path.resolve(process.cwd(), filepath);
  return JSON.parse(fs.readFileSync(pathF));
}

export function pathFile(filepath1, filepath2) {
  const one = readFile(filepath1);
  const two = readFile(filepath2);
  // console.log(one, two); // return [file1, file2]

  const keys = _.union(_.keys(one), _.keys(two)).sort();
  const diffObj = keys.map((key) => {
    if (_.has(one, key) && !_.has(two, key)) {
      return `  - ${key}: ${one[key]}`;
    }

    if (_.has(two, key) && !_.has(one, key)) {
      return `  + ${key}: ${two[key]}`;
    }

    if (one[key] !== two[key]) {
      return `  - ${key}: ${one[key]}\n  + ${key}: ${two[key]}`;
    }

    return `    ${key}: ${one[key]}`;
  });

  return `{\n${diffObj.join('\n')}\n}`;
}
