let nome = 'gabipainel'
let email = 'kauaclaytonng@gmail.com'
let numeros = '1, 10, 100, 1000'

console.log(nome.search(/cLaYtOn/i))
console.log(nome.match(/A/gi))
console.log(nome.replace(/A/gi,'o' ))
console.log(nome.match(/[AC0]/gi))
console.log(nome.match(/[A-K|L-z|0-2]/gi))

//meta caracteres
console.log(nome.match(/\d/gi)) //nums
console.log(nome.match(/\s/gi))
console.log(nome.match(/\bK/gi))



console.log(nome.match(/a+/gi))
console.log(nome.match(/ua*/gi))
console.log(numeros.match(/10+/gi))
console.log(numeros.match(/10?/gi))

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))
console.log(nome.charCodeAt(5))
console.log(nome.charCodeAt(6))
console.log(nome.charCodeAt(7))
console.log(nome.charCodeAt(8))
console.log(nome.charCodeAt(9))
console.log(nome.charCodeAt(10))
console.log(nome.charCodeAt(11))
console.log(nome.charCodeAt(12))
console.log(nome.charCodeAt(13))
console.log(nome.charCodeAt(14))
