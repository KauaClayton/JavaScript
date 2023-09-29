import {Cxmsg} from './cxmsg.js'
const config={
    cor:'#4Bf'
}
Cxmsg.config(config)

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')

btn_mostrarcxmsg1.addEventListener('click', ()=>{
    Cxmsg.mostrar('Curso eu', 'suicido')
})
btn_mostrarcxmsg2.addEventListener('click', ()=>{
    Cxmsg.mostrar('Curso Cu', 'boquete parafuso')
})
btn_mostrarcxmsg3.addEventListener('click', ()=>{
    Cxmsg.mostrar('curso xamna', 'aiii')
})