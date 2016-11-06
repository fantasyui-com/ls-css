#!/usr/bin/env node

process.stdin.setEncoding('utf8');
const fs = require('fs');
const path = require('path');
const setup = require('commander');
const listCssClasses = require('list-css-classes');
setup
  .version('1.0.0')
  .usage('[options] <old.css> <new.css>')
  .option('-r, --reporter <type>', 'reporter name [json|text]', 'text');
setup.parse(process.argv);
let cssFilename = path.resolve(setup.args[0]);
let cssString = fs.readFileSync(cssFilename, { encoding: 'utf8' });
listCssClasses({ css: cssString }).then(result => {
  result.classNames.forEach(name => {
    console.log(name);
  });
});
