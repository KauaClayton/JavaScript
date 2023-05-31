function soma(...valores ){
    var somou = 0
    for(var v  of valores){
        somou += v
    }
        return somou
}
   


console.log(soma(10, 5, 1, 1, 1))