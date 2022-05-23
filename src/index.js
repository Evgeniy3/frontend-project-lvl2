import { readFile } from './utils.js';
import buildTree from './tree.js';
import format from './format/index.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1 = readFile(filepath1);

  const file2 = readFile(filepath2);

  const data1 = JSON.parse(file1);

  const data2 = JSON.parse(file2);

  const tree = buildTree(data1, data2);

  return format(tree, formatName);
};

export default genDiff;
