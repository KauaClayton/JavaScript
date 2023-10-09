
import { Cxmsg } from './cxmsg.js'

const callbackok =()=>{
    
}
const callbacknot =()=>{
   
    const config ={
        cor:'#800',
        tipo:'ok'
        
    }
    Cxmsg.mostrar(config,'Erro', 'Login não efetuado com sucesso. usuário ou senha incorretos')
}
const config_login ={
    cor:'#048',
    img:'https://cfbcursos.com.br/wp-content/uploads/2023/07/logo_cfbcursos.png',
    endpoint:"https://login.kauaclaytonng.repl.co/"
}
Login.login(callbackok,callbacknot, config_login)


