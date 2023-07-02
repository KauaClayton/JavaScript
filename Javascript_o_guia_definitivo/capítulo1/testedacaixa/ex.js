const div = document.querySelector('#div');

div.addEventListener('mousemove',()=>{
    var answer = confirm('quer mesmo ir?');
    if(answer){
        window.location = 'http://www.dominiopublico.gov.br/download/texto/bv000162.pdf';
    };
});

