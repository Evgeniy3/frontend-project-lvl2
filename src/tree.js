import _ from 'lodash';

const getTree = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);

  const sortKeys = _.sortBy(_.union(keys1, keys2));

  const result = sortKeys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        key,
        type: 'nested',
        children: getTree(value1, value2),
      };
    }
    if (!_.has(data1, key)) {
      return {
        key,
        type: 'deleted',
        value: value2,
      };
    }
    if (!_.has(data2, key)) {
      return {
        key,
        type: 'added',
        value: value1,
      };
    }
    if (!_.isEqual(value1, value2)) {
      return {
        key,
        type: 'changed',
        value1,
        value2,
      };
    }
    return {
      key,
      type: 'unchanged',
      value: value1,
    };
  });

  return result;
};

const buildTree = (data1, data2) => ({ type: 'root', children: getTree(data1, data2) });

export default buildTree;
