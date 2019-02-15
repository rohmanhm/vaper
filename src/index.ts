import isArray from 'lodash.isarray'
import isObject from 'lodash.isobject'

class Vaper {
  public parseArray = (replaceFrom: any, replaceWith: any) => (array: any) =>
    array.map((v: any) => {
      if (isArray(v)) {
        return this.parseArray(replaceFrom, replaceWith)(v)
      }
      if (isObject(v)) {
        return this.parseObject(replaceFrom, replaceWith)(v)
      }

      return this.valueReplacer(replaceFrom, replaceWith)(v)
    })

  public parseObject = (replaceFrom: any, replaceWith: any) => (
    object: any
  ) => {
    /**
     * Recursive function that change object deeply.
     * @param {Object} child data object child value to convert.
     */
    const recursive = (child: any) => {
      const newObject: { [key: string]: any } = {}

      Object.keys(child).map((k) => {
        const value = child[k]

        if (isArray(value)) {
          newObject[k] = this.parseArray(replaceFrom, replaceWith)(value)
        } else if (isObject(value)) {
          newObject[k] = recursive(value)
        } else {
          newObject[k] = this.valueReplacer(replaceFrom, replaceWith)(value)
        }

        return true
      })

      return newObject
    }

    return recursive(object)
  }

  public valueReplacer = (replaceFrom: any, replaceWith: any) => (
    value: any
  ) => {
    if (value === replaceFrom) return replaceWith
    return value
  }
}

const vaper = new Vaper()

export default (replaceFrom: any, replaceWith: any) => (data: any) => {
  if (isArray(data)) return vaper.parseArray(replaceFrom, replaceWith)(data)
  if (isObject(data)) return vaper.parseObject(replaceFrom, replaceWith)(data)

  return vaper.valueReplacer(replaceFrom, replaceWith)(data)
}
