var num = [5, 8, 2, 9, 3]
num.push(-20)
num.sort()
console.log('Nosso vetor é o: ') 
for(var c in num){
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
console.log(' E seu tamanho é de ' + num.length + ' Seu maior valor é '  + num[5] + ' o valor 8 está na posição de indice ' + num.indexOf(8) )