var c = 'global'

function as(){
    console.log(this.c)

}

as()

// function soma(...valores){
//     var c = [...valores]
//     var d =0
//     c.map((el)=>{
//         d += el
//     })
//     console.log(d)
// }

// soma(3, 6, 1,5 ,78,98,6)

// var square = (c)=>{return c+1}

// console.log(square(3))

const pessoa = {
    x:1,
    y:{z:1}
}

const array = [pessoa, 1, [5, 6]]
delete(array[1])
console.log(array)
const b = false
console.log(typeof((a = b) == 0))

var ca = 4
console.log(void ca)

for(var i=0,j=10; i < j; i++,j--)
console.log(i+j);