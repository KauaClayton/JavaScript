var idade = 67

if(idade < 16){
    console.log('Você não é permitido votar')
}
else if(idade < 18 || idade > 65){
    console.log('Voto opcional')
}
else if( idade < 65){
    console.log('voto obrigatório')
}
