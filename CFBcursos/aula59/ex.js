class carro{
    canal = 'CFB CURSOS'
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo==1){
            this.tipo = 'esportivo'
            this.velmax = 300
        }
        else if(ptipo == 2){
            this.tipo = 'utilitário'
            this.velmax = 100
        }
        else if(ptipo == 3){
            this.tipo = 'passeio'
            this.velmax = 160
        }
        else{
            this.tipo = 'militar'
            this.velmax = 180
        }
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelmax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    info(){
        console.log(` - Nome: ${this.nome}\n - Tipo:${this.tipo}\n - Velmax: ${this.velmax}\n - Canal: ${this.canal} \n ----------------------------------------------`)
    }
}

let c1 = new carro('Ferrari', 1)
let c2 = new carro('Cachorro', 2)
let c3 = new carro('Veloz', 3)
let c4 = new carro('carrego tudo', 4)

console.log(c1.getInfo())
c1.setNome('rapidão')
// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log(c2.nome)
// console.log(c2.tipo)
// console.log(c2.velmax)
// console.log(c3.nome)
// console.log(c3.tipo)
// console.log(c3.velmax)
// console.log(c4.nome)
// console.log(c4.tipo)
// console.log(c4.velmax)

// c1.info()
// c2.info()
// c3.info()
// c4.info()

// console.log(c1.getInfo())

c1.info()