import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import parseArray from './parseArray';
import parseObject from './parseObject';
import valueReplacer from './valueReplacer';

export default (replaceFrom, replaceWith) => (data) => {
  if (isArray(data)) return parseArray(replaceFrom, replaceWith)(data);
  if (isObject(data)) return parseObject(replaceFrom, replaceWith)(data);

  return valueReplacer(replaceFrom, replaceWith)(data);
};
