
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var Fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(Fano.value.length == 0 || Fano.value > ano){
        window.alert('ERROR! Verifique os dados e tente novamente!')

    }
    else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(Fano.value)
        var genero = ''
        
        if(sex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10 ){
                document.body.querySelector('div#img').style = 'background-image:url("http://apfel.com.br/wp-content/uploads/2021/01/flor-e-sol.jpg")'
            }
            else if(idade < 21){
                
            }
            else if(idade < 50){

            }
            else{}
        }
        else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){

            }
            else if(idade < 21){
                
            }
            else if(idade < 50){

            }
            else{}
        }
        res.style.textAlign = 'Center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        
    }
}

//não consegui fazer:/