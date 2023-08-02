const btn_alert = document.querySelector('#btn_alert')
const btn_confirm = document.querySelector('#btn_confirm')
const btn_prompt = document.querySelector('#btn_prompt')

btn_alert.addEventListener('click', (evt)=>{
    alert('eu amo minha família')
})

btn_confirm.addEventListener('click', (evt)=>{
    const ret = confirm('Você ama Satanás ss ou n?????')
    if(ret)alert('alma vendida')
    else alert('alma pura')
})

btn_prompt.addEventListener('click', (evt)=>{
    const ama =prompt('Digite o nome da pessoa que você mais ama:', 'dudinha')
    alert(`Que lindo seu amor pelo(a) ${ama}`)
})