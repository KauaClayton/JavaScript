class Carro{ //classe pai / base
    constructor(nome, portas){
        this.cor = undefined
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
    }
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }
    Setcor=function(cor){
        this.cor = cor
    }
}

class militar extends Carro{//classe filho
    constructor(nome, portas, blingagem, munição){
        super(nome, portas)
        this.blingagem = blingagem
        this.munição = munição
        this.Setcor('verde')
    }
    atirar=function(){
        if(this.munição > 0){
            this.munição--
        }
    }
}
class jatin extends militar{
    constructor(nome, portas, blindagem, munição){
    super(nome, portas, blindagem, munição)
    this.Setcor('azul')
}
}
class utilitario extends Carro{
    constructor(nome, portas, função){
        super(nome, portas)
        this.função = função
    }
}

const c1 = new Carro('golf', 4)
const c2 = new militar('Tanque', 8, 500, 100)
const c3 = new utilitario('Carro bicho', 6, 'catar mulher')
const c4 = new jatin('jatin', 6, 1000, 3)
c1.ligar()
c1.Setcor('preto')
c2.ligar()
c3.Setcor('preto')
c3.ligar()




console.log(`Cor:${c1.cor}`)
console.log(`Nome:${c1.nome}`)
console.log(`portas:${c1.portas}`)
console.log(`ligado:${(c1.ligado?'sim':'nao')}`)
console.log(`Velocidade:${c1.vel}`)
console.log('---------------------------------------')
console.log(`Cor:${c2.cor}`)
console.log(`Nome:${c2.nome}`)
console.log(`Portas:${c2.portas}`)
console.log(`ligado:${(c2.ligado?'sim':'não')}`)
console.log(`velocidade:${c2.vel}`)
console.log(`blindagem:${c2.blingagem}`)
console.log(`munição:${c2.munição}`)
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
console.log(`munição após tiroteio:${c2.munição}`)
console.log('---------------------------------------')
console.log(`cor:${c3.cor}`)
console.log(`Nome:${c3.nome}`)
console.log(`Portas:${c3.portas}`)
console.log(`Ligado:${(c3.ligado?'sim':'não')}`)
console.log(`velocidade:${c3.vel}`)
console.log(`função:${c3.função}`)
console.log('---------------------------------------')
console.log(`Cor:${c4.cor}`)
console.log(`Nome:${c4.nome}`)
console.log(`Portas:${c4.portas}`)
console.log(`ligado:${(c4.ligado?'sim':'não')}`)
console.log(`velocidade:${c4.vel}`)
console.log(`blindagem:${c4.blingagem}`)
console.log(`munição:${c4.munição}`)