const olhos = [...document.getElementsByClassName('olho')]

let posx = 0
let posy = 0
window.addEventListener('mousemove', (evt)=>{
    let posx = evt.clientX
    let posy = evt.clientY

    const rot = Math.atan2(posy, posx)*180/Math.PI
    olhos.forEach((o)=>{
        o.style.transform = 'rotate('+rot+'deg)'
    })
})

