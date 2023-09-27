class Cxmsg{
    titulo=null
    texto=null
    cor=null
    destino=null
    div_msg = null
    constructor(config){
        this.titulo=config.titulo
        this.texto=config.texto
        this.cor=config.cor
        this.destino=document.body
    }
    mostrar=()=>{ 
        this.div_msg=document.createElement('div')
        const estilo_div_msg = 
        "display:flex;"+
        "justify-content:center;"+
        "align-items:center"+
        "position:absolute;"+
        "top:0px;"+
        "left:0px;"
        "width:100vw;"+
        "height:100vh;"+
        "background-color:rgba(0,0,0,0.7)"
    }
    ocultar=()=>{}
}