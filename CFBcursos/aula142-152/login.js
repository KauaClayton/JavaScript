class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static estilocss = null;
    static  endpoint = 'https://login.kauaclaytonng.repl.co';
        
    static login=(mat,pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`;
        this.estilocss = 
        '.fundologin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}'+
        '.baselogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: border-box;}'+     
        '.elementoslogin{display: flex;flex-direction: column;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;padding:10px;border-radius: 10px 0px 0px 10px;box-sizing: border-box;}'+
        '.logologin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding:10px;border-radius: 0px 10px 10px 0px;box-sizing: border-box;}'+
        '.logologin img{width: 90%; }'+
        '.campologin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: border-box;margin-bottom: 10px;}'+
        '.botoeslogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: border-box;}'+
        '.botoeslogin button{cursor: pointer;background-color: #048;color: #fff;border-radius: 5px;padding: 10px 35px;box-sizing: border-box;}'+
        '.campologin label{font-size: 1.1em;}'+
        '.campologin input{font-size: 1.1em;padding: 5px;background-color: #fff;border-radius: 5px;}'
        const styleestilo = document.createElement('style')
            styleestilo.setAttribute('id', 'estilologin')
            styleestilo.setAttribute('rel', 'stylesheet')
            styleestilo.setAttribute('type', 'text/css')
            styleestilo.innerHTML = this.estilocss
            document .head.appendChild(styleestilo)
        // fetch(this.endpoint)
        // .then(res=>res.json())
        // .then(res=>{
        //     if(res){
        //         this.logado= true;
        //         this.matlogado = mat;
        //         this.nomelogado = res.nome;
        //         this.acessologado = res.acesso;
        //         console.log(res)

        //     }else{
        //         console.log('usuario nn encontrado seu verme.')
        //     }
        // })
    };
};

export {Login};