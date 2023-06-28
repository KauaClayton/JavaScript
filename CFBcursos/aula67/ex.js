class NPC{
    static alerta=false
    constructor(energia){
        this.energia = energia
   
    }
    info=function(){
        console.log(`Energia: ${this.energia} alert: ${(NPC.alerta?'alerta': 'não alerta')}`)
    }
    static alertar=function(){
        NPC.alerta = true
    }
}

const npc1 = new NPC(100)
const npc2 = new NPC(150)
const npc3 = new NPC(200)

NPC.alertar()
npc1.info()
npc2.info()
npc3.info()