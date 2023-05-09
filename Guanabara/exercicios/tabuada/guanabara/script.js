function tabuada(){
    var num = document.querySelector('input#num')
    var tabu = document.querySelector('select#tabuada')
    if(num.value.length > 0){
        var n = Number(num.value)
        var c = 1
        tabu.innerHTML = ''
        while(c <=10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
          
            tabu.appendChild(item)
            c++

        }
    }
    else{
        window.alert('Valo não encontrado! digite algo por favor')
    }
}