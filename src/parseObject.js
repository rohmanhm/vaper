import isObject from 'lodash.isobject';
import isArray from 'lodash.isarray';
import parseArray from './parseArray';
import valueReplacer from './valueReplacer';

/**
 * Recursively change object.
 * @param {Object} object data object value to convert.
 */
const parseObject = (replaceFrom, replaceWith) => (object) => {
  /**
   * Recursive function that change object deeply.
   * @param {Object} child data object child value to convert.
   */
  const recursive = (child) => {
    const newObject = {};

    Object.keys(child).map((k) => {
      const value = child[k];

      if (isArray(value)) {
        newObject[k] = parseArray(replaceFrom, replaceWith)(value);
      } else if (isObject(value)) {
        newObject[k] = recursive(value);
      } else {
        newObject[k] = valueReplacer(replaceFrom, replaceWith)(value);
      }

      return true;
    });

    return newObject;
  };

  return recursive(object);
};

export default parseObject;
