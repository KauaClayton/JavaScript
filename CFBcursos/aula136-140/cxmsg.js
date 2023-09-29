class Cxmsg{
    static cor='#888'
    static destino=null
    static divmsg = null
    static tipo = null
    static comandoS = null
    static textos = []
    
    static mostrar=(config, titulo, texto)=>{ 
        this.cor=config.cor
        this.tipo = config.tipo
        this.textos = config.textos
        this.comandoS =()=>{ config.comandoS()}
        this.titulo = titulo
        this.texto = texto
        this.destino = document.body
        this.divmsg=document.createElement('div')
        const estilo_divmsg = 
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;" +
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);"
         this.divmsg.setAttribute('id', 'divmsg')
         this.divmsg.setAttribute('style',estilo_divmsg)
         this.destino.prepend(this.divmsg)
         
         const areacxmsg = document.createElement('div')
         const estilo_areaCxmsg=
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: flex-start;'+
            'flex-direction: column;'+
            'width:300px;'
            areacxmsg.setAttribute('style', estilo_areaCxmsg)
            this.divmsg.appendChild(areacxmsg)

       const titulo1 = document.createElement('div')
       const estilotitulo=
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items:center;'+
            'width:100%;'+
            'background-color:'+this.cor+';'+
            'color:#fff;'+
            'padding:5px;'+
            'border-radius:5px 5px 0px 0px'
       titulo1.setAttribute('style', estilotitulo)
       titulo1.innerHTML = this.titulo
       areacxmsg.appendChild(titulo1)

       const estilocorpo =
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items:center;'+
            'width:100%;'+
            'background-color:#eee;'+
            'color:#000;'+
            'padding:30px 5px;'
       const corpo = document.createElement('div')
       corpo.setAttribute('style', estilocorpo)
       corpo.innerHTML = this.texto
       areacxmsg.appendChild(corpo)

       const estilorodape = 
            'display:flex;'+
            'justify-content: space-around;'+
            'align-items: center;'+
            'width:100%;'+
            'background-color:#ccc;'+
            'color:#000;'+
            'padding:5px;'+
            'border-radius:0px 0px 5px 5px;'
       const rodape = document.createElement('div')
       rodape.setAttribute('style', estilorodape)
       areacxmsg.appendChild(rodape)
       if(this.tipo == 'ok'){
          const btn_ok = document.createElement('button')
          const estilobotao=
          'background-color:'+this.cor+';'+
          'color:#fff;'+
          'padding:10px 50px;'+
          'border-radius:5px;'+
          'cursor:pointer;'+
          'text-transform:uppercase;'    
          btn_ok.setAttribute('style', estilobotao)
          btn_ok.innerHTML = 'OK'
          rodape.appendChild(btn_ok)
          btn_ok.addEventListener('click',()=>{
               this.ocultar()
       })
     }
     else if(this.tipo = 'sn'){
          const btn_sim = document.createElement('button')
          const estilobotao=
          'background-color:'+this.cor+';'+
          'color:#fff;'+
          'padding:5px 25px;'+
          'border-radius:5px;'+
          'cursor:pointer;'+
          'text-transform:uppercase;'   
          btn_sim.setAttribute('style', estilobotao)
          btn_sim.innerHTML = this.textos[0]
          rodape.appendChild(btn_sim)
          const btn_nao = document.createElement('button')
              
          btn_nao.setAttribute('style', estilobotao)
          btn_nao.innerHTML = this.textos[1]
          rodape.appendChild(btn_nao)
          btn_sim.addEventListener('click', ()=>{
               this.comandoS()
               this.ocultar()
          })
          btn_nao.addEventListener('click', ()=>{
               this.ocultar()
          })
     }
    }
    static ocultar=()=>{
        this.divmsg.remove()
    }
}

export {Cxmsg}