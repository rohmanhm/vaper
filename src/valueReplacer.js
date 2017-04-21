/**
 * Replace value
 * @param {Any} value data value
 * @param {Any} replaceFrom value that want to replaced
 * @param {Any} replaceWith value final after replaced
 */
const valueReplacer = (replaceFrom, replaceWith) => (value) => {
  if (value === replaceFrom) return replaceWith;
  return value;
};

export default valueReplacer;
