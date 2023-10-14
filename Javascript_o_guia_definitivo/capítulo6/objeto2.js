class Pessoa{
    constructor(){
    nome='Lucas'}
}

var y = Pessoa
y.nome = 'pedro'

console.log(classof(Pessoa))

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
    }