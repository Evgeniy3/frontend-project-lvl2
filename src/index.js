import { readFile, getPath } from './utils.js';
import buildTree from './tree.js';

const getDiff = (filepath1, filepath2) => {
  const file1 = readFile(filepath1);

  const file2 = readFile(filepath2);

  const data1 = JSON.parse(file1, getPath(filepath1));

  const data2 = JSON.parse(file2, getPath(filepath2));

  const tree = buildTree(data1, data2);

  return (tree);
};

export default getDiff;
