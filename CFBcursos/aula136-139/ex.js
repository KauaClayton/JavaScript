const config_cxmsg ={
    titulo:'Teste',
    texto:'Curso de JavaScript',
    cor:'#48f'
}
const cxmsg = new Cxmsg(config_cxmsg)

const btn_mostrarcxmsg = document.querySelector('#btn_mostrarcxmsg')
btn_mostrarcxmsg.addEventListener('click', ()=>{
    cxmsg.mostrar()
})