/* eslint-disable no-console */
const locale = require('../src/locales/zh-CN.json');

let chars = [];

Object.keys(locale).forEach((key) => {
  chars.push(...locale[key].split(''));
});

chars = Array.from(new Set(chars));

console.log(chars.join(''));
