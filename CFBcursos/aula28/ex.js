"use strict"

function* contador(){
    let i = 0
    while(true){
        yield i++
    }
}

const itc = contador()
for(let c = 0; c < 100; c++)[
    console.log(itc.next().value)
]