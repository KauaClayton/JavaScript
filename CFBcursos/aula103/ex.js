let nome = new String('Kaua Clayton')
let nome2 = new String('Kaua')
let sobrenome = new String(' Clayton')

console.log(nome.localeCompare(nome2))//serve para comparar duas strings, se forem iguais retorna 0, se a string comparada for maior que a segunda da 1 e se a segunda for a maior retorna 2
console.log(nome.replace('K', 'C')) //substitui primeiro valor por segundo na string 
console.log(nome.search('ua'))//diz onde o valor aparece a primeira vez
console.log(nome.slice(5,12 )) //corta a parte desses caracteres e faz uma nova string
console.log(nome.split('a'))//divide em um array tirando os valors do caractere entre parenteses e fazendo a divisão
