var then = new Date(2010, 6, 1)
var later = new Date(2010, 0, 1, 22, 10, 30)

console.log(then)
console.log(later)
console.log(later.getFullYear())
console.log(later.getMonth())
console.log(later.getDate())
console.log(later.getDay())
console.log(later.getHours())
console.log(later.getUTCHours())
console.log(later.toString())
console.log(later.toUTCString())
console.log(later.toLocaleDateString())
console.log(later.toLocaleTimeString())
console.log(later.toISOString())
