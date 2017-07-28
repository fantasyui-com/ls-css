#!/usr/bin/env node

process.stdin.setEncoding('utf8');
const fs = require('fs');
const path = require('path');
const setup = require('commander');
const listCssClasses = require('list-css-classes');
const getStdin = require('get-stdin');

setup
  .version('1.0.0')
  .usage('<file> or pipe')
  setup.parse(process.argv);

let cssString = "";

function run(cssString){
  listCssClasses({ css: cssString }).then(result => {
    result.classNames.forEach(name => {
      console.log(name);
    });
  });

}

if(setup.args[0]){
  let cssFilename = path.resolve(setup.args[0]);
  cssString = fs.readFileSync(cssFilename, { encoding: 'utf8' });
  run(cssString)
}else{
  cssString = getStdin().then(i=>run(i));
}
