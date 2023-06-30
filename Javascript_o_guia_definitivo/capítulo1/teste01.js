class Points{
    constructor(x, y){
        this.x = x
        this.y = y
    }
    pitagoras=function(){
        var resul = Math.sqrt(this.x*this.x+this.y*this.y)
        console.log(resul)
    }
}

const ponto1 = new Points(1, 1)

ponto1.pitagoras()

// const points = [
//     {x:0, y:0}, 
//     {x:1, y:1}
// ]

// points.dist = function(){
//     var p1 = this[0]
//     var p2 = this[1]
//     var a = p2.x-p1.x
//     var b = p2.y-p1.y
//     var resul = Math.sqrt(a*a+b*b)
//     console.log(resul)
// }


// points.dist()