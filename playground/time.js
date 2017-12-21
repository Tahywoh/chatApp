// var date = new Date()
// var month = ['Jan', 'Feb']
// console.log(date.getFullYear())

var moment = require('moment')

var date = moment()
console.log(date.format('D M Y'))
console.log(date.format('DD MM YY'))
console.log(date.format('DDD, MMM, YYY'))
console.log(date.format('Do MM, YYY'))
// date.add(3, 'year').subtract(5, 'months')
// console.log(date.format('D M Y'))

console.log(date.format('h:mm a'))

// new Date().getTime()
var someTimeStamp = moment().valueOf()
console.log(someTimeStamp)

var createdAt = 1234
var date = moment(createdAt)
console.log(date.format('h:mm a'))