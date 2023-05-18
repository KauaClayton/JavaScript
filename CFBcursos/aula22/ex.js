"use strict"

function Parimp(num){
    if(num%2==0){
        return `O número ${num} é par`
    }
    else{
        return `O número ${num} é impar`
    }
    
}

console.log(Parimp(7))