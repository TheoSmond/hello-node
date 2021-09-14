

// process.env.NODE_ENV = 'dev'
var test = 12, x;
const name = require('./module');
console.log(process.env.NODE_ENV)
require('dotenv').config()
console.log(process.env.NODE_ENV)

for (var i = 0; i < test; i++){
    x = test+i
    console.log(i)
}

console.log(`Hello World ${name.name}`)