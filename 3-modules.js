// Modules=Encapsulated Code (only share minimum )
// every file in node is a module

const names= require("C:\\Users\\USER\\Desktop\\node tutorial-2\\4-names.js")
console.log("hey there how are you doing")
console.log(names)
const sayHi=require("./5-utils")
const alternate=require("./6-alternative-flavour")
sayHi(names.john)
console.log(alternate)
require("./7-mind-grenade")