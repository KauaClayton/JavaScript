import { Login } from './login.js';
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

Login.login(callbackok,callbacknot)

