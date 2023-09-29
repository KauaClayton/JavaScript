import {Cxmsg} from './cxmsg.js'
const config={
    cor:'#4Bf' ,
    tipo:'sn',//ok, sn, oc
    textos:['SIM', 'NAO'],
    comandoS:()=>{}
}

const fsim=()=>{
    console.log('botão SIM pressionado')
}

const btn_mostrarcxmsg1 = document.querySelector('#btn_mostrarcxmsg1')
const btn_mostrarcxmsg2 = document.querySelector('#btn_mostrarcxmsg2')
const btn_mostrarcxmsg3 = document.querySelector('#btn_mostrarcxmsg3')


btn_mostrarcxmsg1.addEventListener('click', ()=>{
    config.tipo = 'ok'
    Cxmsg.mostrar(config, 'Curso eu', 'suicido')
})

btn_mostrarcxmsg2.addEventListener('click', ()=>{
    config.tipo = 'sn'
    config.comandoS =()=>{ fsim()}
    Cxmsg.mostrar(config, 'Curso Cu', 'boquete parafuso')
})

btn_mostrarcxmsg3.addEventListener('click', ()=>{
    
    config.tipo='sn'
    config.textos = ['OK', 'CANCELA']
    Cxmsg.mostrar(config, 'curso xamna', 'aiii')
})