import { readFile, getFormat } from './utils.js';
import buildTree from './tree.js';
import format from './format/index.js';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = readFile(filepath1);

  const file2 = readFile(filepath2);

  const data1 = parse(file1, getFormat(filepath1));

  const data2 = parse(file2, getFormat(filepath2));

  const tree = buildTree(data1, data2);

  return format(tree, formatName);
};

export default genDiff;
