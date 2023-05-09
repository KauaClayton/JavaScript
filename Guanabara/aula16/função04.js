function fatorial(x){
    var fat = 1
    for(var c = x; c > 1; c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5))