# 💨 Vaper

[![Greenkeeper badge](https://badges.greenkeeper.io/rohmanhm/vaper.svg)](https://greenkeeper.io/)
 [![Build Status](https://travis-ci.org/rohmanhm/vaper.svg?branch=master)](https://travis-ci.org/rohmanhm/vaper)

Convert from `x` value from any type of value to `z` value.

## Install
Using **NPM**
```bash
npm install --save vaper
```
or you may consider using **Yarn**
```bash
yarn add vaper
```

## Usage
```javascript
vaper(defaultValue, newValue)(source)
```

## Example
```javascript
// es6
import vaper from 'vaper';

vaper('foo', 'bar')('foo') // return 'bar'
```

> it also support object and array recursively

## Related

* [Nullfined](https://github.com/rohmanhm/nullfined) - Convert any null value to undefined

## License
MIT © [Roman Masyhar](https://github.com/rohmanhm)
