function tabuada(){
    var resp = document.querySelector('textarea#area')
    resp.innerHTML = ''
    var tabu = Number(document.querySelector('input#num').value)
    var s = 1
    resp. innerHTML = 'Diga um número a cima'
    for(s; s <= 10; s++){
        resp.innerHTML += `\n${tabu} x ${s} = ${tabu*s} `
    }
}