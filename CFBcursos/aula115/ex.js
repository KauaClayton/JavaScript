let numeros = [10,20,30,40,50,60,70,80,90]
let a,b,c,d 
[a,b,c,...d]= numeros
let obj={nome:'Bruno',canal:'CFBCursos' }
let{nome,canal}= obj
console.log(nome, canal)

const cores=()=>{
    return['verde','amarelo','azul','branco']
}

let [c1,c2,,c3] = cores()
console.log(c1,c2,c3)

let texto='curso de javascript'
let a1,b1,co
[a1,b1,co] = texto.split(' ')
console.log(a1,b1,co)