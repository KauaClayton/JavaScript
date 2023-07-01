class PadrãoCarro{
    constructor(){
    if(this.constructor===PadrãoCarro){
        throw new TypeError('cu')
    }
    if(this.ligar===undefined){
        throw new TypeError('É obrigatório implementar o método ligar')
    }
    if(this.ligar===undefined){
        throw new TypeError('É obrigatório implementar o método desligar')
    }
    this.rodas = 4;
    this.portas = 4;
    this.ligado = false

}

}

class Carro extends PadrãoCarro{
    constructor(tipo, estagioTurbo){
        super()
        this.turbo = new Turbo(estagioTurbo)
        if(tipo == 1){
            this.velMax = 120
            this.nome = 'normal'
        }
        else if(tipo == 2){
            this.velMax = 160
            this.nome = 'veloz'
        }
        else if(tipo == 3){
            this.velMax = 200
            this.nome = 'Camaro'
        }
        this.velMax+=this.turbo.pot

    }
    info = function(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log(this.rodas)
        console.log(this.portas)
        console.log(this.ligado)
        console.log('-------------------')
    }
    ligar(){
        this.ligado = true
    }
    desligar(){
        this.ligado = false
    }
}
class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4, estagioTurbo)
        this.velMax = 300+this.turbo.pot

        this.nome = 'carro especial'
    }
    info = function(){
        console.log(`Nome:${this.nome}`)
        console.log(`Velocidade:${this.velMax}`)
        console.log(`Turbo:${this.turbo.pot}`)
        console.log('-------------------')
    }
}

class Turbo{
    constructor(e){
        switch(e){
            case 0:
                this.pot = 0;
                break;
            case 1:
                this.pot = 50;
                break;
            case 2:
                this.pot = 75;
                break;
            case 3:
                this.pot = 100;
                break;
        }
}}

const c1 = new Carro(2, 1)
const c2 = new Carro(1, 1)
const c3 = new CarroEspecial(3)

c1.info()
c2.info()
c3.info()