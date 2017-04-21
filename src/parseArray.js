import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import parseObject from './parseObject';
import valueReplacer from './valueReplacer';

/**
 * Parse array
 * @param {Any} replaceFrom value you want to replace
 * @param {Any} replaceWith final value after replaced
 */
const parseArray = (replaceFrom, replaceWith) => array => array.map((v) => {
  if (isArray(v)) {
    return parseArray(replaceFrom, replaceWith)(v);
  } else if (isObject(v)) {
    return parseObject(replaceFrom, replaceWith)(v);
  }

  return valueReplacer(replaceFrom, replaceWith)(v);
});

export default parseArray;
