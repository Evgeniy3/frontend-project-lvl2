import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import buildTree from '../src/buildTree.js';
import format from '../src/formatters/index.js';
import { getFormat } from '../src/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (file) => resolve(__dirname, '..', '__fixtures__', file);
const readFile = (file) => readFileSync(getFixturePath(file), 'utf-8');

const tests = [
  {
    file1: 'file1.json', file2: 'file2.json', output: 'stylishOutput.txt', formatName: 'stylish',
  },
];

test.each(tests)('gendiff stylish, plain and json tests', ({
    file1, file2, output, formatName,
  }) => {
    const filepath1 = getFixturePath(file1);
    const filepath2 = getFixturePath(file2);
    const expected = readFile(output);
    const result = genDiff(filepath1, filepath2, formatName);
    expect(result).toEqual(expected);
  });