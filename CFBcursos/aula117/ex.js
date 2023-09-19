const long = document.querySelector('#long')
const lati = document.querySelector('#lati')

if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(mostrarloc, erroloc)

}
else{
        console.log('geolocalização não suportada')
}
function mostrarloc(pos){
        long.innerHTML = pos.coords.longitude
        lati.innerHTML = pos.coords.latitude
}

function erroloc(){
       console.log('erro em achar a localização') 
}