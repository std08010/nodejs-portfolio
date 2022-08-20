/* A simple CommonJS module */

//this variable is private to the module because is not attached to module.exports variable
var count = 0;

module.exports.next = function () {
  return ++count;
};

exports.hello = () => {
  return "Hello World!\n";
};

//both above declarations of attaching a function to the public interface of the module are equivalent

//You can use this module like this:
//const simple = require('./simple-module');
//simple.hello();
