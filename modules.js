// modules
// Common Js every file is module by default
//

const names=require('./4-names')
const sayHi=require('./fn.utility')

const data=require('./alternate')

require('./mind grenade')

console.log(names)

console.log(data)
console.log(data.singlePerson)
console.log(data.items)


sayHi('susan')
//sayHi(neema)
sayHi(names.harvey)
sayHi(names.mike)
