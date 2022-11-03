const os = require('os')

const path = require('path')

//importing the whole math obj
//const math = require('./math')

//destructuring
const {add}  = require('./math')


// console.log(os.type())
// console.log(os.version())
// //get home dir
// console.log(os.homedir())
// //directory name
// console.log(__dirname)
// //file name
// console.log(__filename)
// //path
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))

// console.log(os.uptime().toLocaleString())

console.log(math.add(4, 5))
console.log(add(3, 6))