console.log("Node")
// console.log(__filename)
// console.log(__dirname)


/* module:
  - core module :
  (-fs,-path   ,  http(api))

  - local module:()
  - third-party module
*/



// Dev Dependency....

// Importing data from node2.js
// const data = require("./node2.js");
// console.log("Hellow world",data)
const data = require("./node2")
console.log(data);





const detail = {
  name: "ram",
  age: 15,
};

const { name: title } = detail;
console.log(title);  