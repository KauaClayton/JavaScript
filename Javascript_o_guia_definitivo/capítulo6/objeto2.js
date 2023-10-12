pessoa={
    nome:'Lucas'
}

var y = pessoa
y.nome = 'pedro'

console.log(Object.prototype.isPrototypeOf(pessoa))

