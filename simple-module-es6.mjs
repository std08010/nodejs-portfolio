/* A simple ES6 module */

let count = 0; //private, not exported

export function next() {
  return ++count;
}

function squared() {
  return Math.pow(count, 2);
}

export function hello() {
  return "Hello, world!";
}

//this is called by default when you access the module object itself.
//const simple = require('./simple-module-es6');
//simple.default();
export default function () {
  return count;
}

export const meaning = 42;
export let nocount = -1;

//here we export the private function squared.
//it is similar as if we exported it in the declaration
export { squared };

//You can use this module like this:
//import * as simple from './simple-module-es6.mjs';
//simple.hello();
//simple.default();
//console.log(simple.meaning);

//OR

//import { default as simple, hello, next, meaning } from './simple-module-es6.mjs';
//hello();
//simple();
//console.log(meaning);
