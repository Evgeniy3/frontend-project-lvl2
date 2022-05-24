import { test, expect } from '@jest/globals';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import buildTree from '../src/tree.js';
import format from '../src/format/index.js';
import { getFormat } from '../src/utils.js';
import parse from '../src/parsers.js';
import plain from '../src/format/plain.js';
import stylish from '../src/format/stylish.js';

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

test('generate tree with wrong format test', () => {
  const { file1 } = tests[0];
  const { file2 } = tests[0];
  const fileContent1 = readFile(file1);
  const fileContent2 = readFile(file2);
  const parsedFile1 = parse(fileContent1, getFormat(file1));
  const parsedFile2 = parse(fileContent2, getFormat(file2));
  const tree = buildTree(parsedFile1, parsedFile2);
  const wrongFormat = 'xml';
  expect(() => format(tree, wrongFormat)).toThrow(`Unknown format to generate a tree: '${wrongFormat}'!`);
});

test('gendiff with wrong extension test', () => {
  const file1 = 'file1.xml';
  const { file2 } = tests[0];
  const filepath1 = getFixturePath(file1);
  const filepath2 = getFixturePath(file2);
  const wrongExtension = getFormat(file1);
  expect(() => genDiff(filepath1, filepath2)).toThrow(`Unknown format to parse: '${wrongExtension}'!`);
});

test('build tree with wrong type of node test', () => {
  const file = 'wrongTypeOfNode.txt';
  const fileContent = readFile(file);
  const wrongTypeOfNode = 'undefined';
  expect(() => plain(fileContent)).toThrow(`Unknown type: '${wrongTypeOfNode}' of node!`);
  expect(() => stylish(fileContent)).toThrow(`Unknown type: '${wrongTypeOfNode}' of node!`);
});
