const objetos = document.querySelector('#objetos')

//objeto literal é uma fomr ade definir um tipo bem dinamico em js, personalizado, podemos trabalhar
//com as classes onde posso add propriedades e métodos mas aqui nn instanciaremos novos el desse tipo.

let computador={
    cpu:'i9',
    ram:'64g',
    hd:'2Terabytes',
    info:function(){
        console.log(this.cpu)
        console.log(this.ram)
        console.log(this.hd)
    }

}
const computadores=[
    {
        cpu:'i9',
        ram:'64g',
        hd:'2Terabytes',
    
    },
    {
        cpu:'i5',
        ram:'32g',
        hd:'2Terabytes',
    
    },
    {
        cpu:'i7',
        ram:'16g',
        hd:'1Terabytes',
    
    }
]
//objeto literal vazio já é obejeto
computador['monitor']='22pol'
computador.placavideo='rtx'
console.log(computador)
// // objetos.innerHTML = JSON.stringify(computadores)
// computadores.forEach((c)=>{
//     const div = document.createElement('div')
//     div.innerHTML = c.cpu + '<br>' + c.ram + '<br>' + c.hd
//     div.setAttribute('class', 'computador')
//     objetos.appendChild(div)
// })