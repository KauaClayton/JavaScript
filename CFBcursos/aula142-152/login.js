

class Login{

    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static callbackok =null;
    static callbacknot = null;
    static estilocss = null;
    static endpoint =  null;
        
    static config ={
        cor:'#048',
        img:"https://cfbcursos.com.br/wp-content/uploads/2023/07/logo_cfbcursos.png"
    }
    static endpoint = "https://login.kauaclaytonng.repl.co/"
    static login=(callbackok,callbacknot,config=null)=>{
        if(config != null){
            this.config = config;
        }
        this.callbackok=()=>{callbackok()}
        this.callbacknot=()=>{callbacknot()}
        
        this.estilocss = 
        '.fundologin{display: flex;justify-content: center;align-items: center;width: 100%;height: 100vh;position: absolute;top: 0px;left: 0px;background-color: rgba(0,0,0,0.75);box-sizing: border-box;}'+
        '.baselogin{display: flex;justify-content: center;align-items: stretch;width: 50%;box-sizing: border-box;}'+     
        '.elementoslogin{display: flex;flex-direction: column;justify-content: center;align-items: flex-start;width: 50%;background-color: #eee;padding:10px;border-radius: 10px 0px 0px 10px;box-sizing: border-box;}'+
        '.logologin{display: flex;justify-content: center;align-items: center;width: 50%;background-color: #bbb;padding:10px;border-radius: 0px 10px 10px 0px;box-sizing: border-box;}'+
        '.logologin img{width: 90%; }'+
        '.campologin{display: flex;justify-content: flex-start;align-items: flex-start;flex-direction: column;box-sizing: border-box;margin-bottom: 10px;}'+
        '.botoeslogin{display: flex;justify-content: space-around;align-items: center;width: 100%;box-sizing: border-box;}'+
        `.botoeslogin button{cursor: pointer;background-color: ${this.config.cor};color: #fff;border-radius: 5px;padding: 10px 35px;box-sizing: border-box;}`+
        '.campologin label{font-size: 1.1em;}'+
        `.campologin input{font-size: 1.1em;padding: 5px;background-color: #fff;border-radius: 5px;}`
        const styleestilo = document.createElement('style')
            styleestilo.setAttribute('id', 'estilologin')
            styleestilo.setAttribute('rel', 'stylesheet')
            styleestilo.setAttribute('type', 'text/css')
            styleestilo.innerHTML = this.estilocss
            document.head.appendChild(styleestilo);
            const fundologin = document.createElement('div');
            fundologin.setAttribute('id', 'fundologin')
            fundologin.setAttribute('class', 'fundologin')
            document.body.prepend(fundologin)
            const  baselogin = document.createElement('div')
            baselogin.setAttribute('id', 'baselogin')
            baselogin.setAttribute('class', 'baselogin')
            fundologin.appendChild(baselogin)
            const  elementoslogin= document.createElement('div')
            elementoslogin.setAttribute('id', 'elementoslogin')
            elementoslogin.setAttribute('class', 'elementoslogin')
            baselogin.appendChild(elementoslogin)
            const  campologinusername = document.createElement('div')
            campologinusername.setAttribute('id', 'campologinusername')
            campologinusername.setAttribute('class', 'campologin')
            elementoslogin.appendChild(campologinusername)
            const labelusername = document.createElement('label')
            labelusername.setAttribute('for', 'iusername')
            labelusername.innerHTML = 'Username:'
            campologinusername.appendChild(labelusername)
            const inputusername = document.createElement('input')
            inputusername.setAttribute('type', 'text')
            inputusername.setAttribute('name', 'iusername')
            inputusername.setAttribute('id', 'iusername')
            campologinusername.appendChild(inputusername)
            const  campologinsenha = document.createElement('div')
            campologinsenha.setAttribute('id', 'campologinsenha')
            campologinsenha.setAttribute('class', 'campologin')
            elementoslogin.appendChild(campologinsenha)
            const labelsenha = document.createElement('label')
            labelsenha.setAttribute('for', 'isenha')
            labelsenha.innerHTML = 'senha:'
            campologinsenha.appendChild(labelsenha)
            const inputsenha = document.createElement('input')
            inputsenha.setAttribute('type', 'password')
            inputsenha.setAttribute('name', 'isenha')
            inputsenha.setAttribute('id', 'isenha')
            campologinsenha.appendChild(inputsenha)
            const botoeslogin = document.createElement('div')
            botoeslogin.setAttribute('class', 'botoeslogin')
            elementoslogin.appendChild(botoeslogin)
            const btn_login = document.createElement('button')
            btn_login.setAttribute('id', 'btn_login')
            btn_login.setAttribute('class', 'btn_login')
            btn_login.innerHTML = 'Login'
            botoeslogin.appendChild(btn_login)
            btn_login.addEventListener('click',()=>{ 
                        this.verificalogin()
            })
            const btn_cancelar = document.createElement('button')
            btn_cancelar.setAttribute('id', 'btn_cancelar')
            btn_cancelar.setAttribute('class', 'btn_cancelar')
            btn_cancelar.innerHTML = 'cancelar'
            btn_cancelar.addEventListener('click', ()=>{this.fechar()})
            botoeslogin.appendChild(btn_cancelar)
            const logologin = document.createElement('div')
            logologin.setAttribute('id', 'logologin')
            logologin.setAttribute('class', 'logologin')
            baselogin.appendChild(logologin)
            const img = document.createElement('img')
            img.setAttribute('src', this.config.img)



    };

    static verificalogin=()=>{
        const mat=document.querySelector('#iusername').value;
        const pas=document.querySelector('#isenha').value;

        const endpoint = `https://login.kauaclaytonng.repl.co/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado=true;
                this.matlogado=mat;
                this.nomelogado=res.nome;
                this.acessologado =res.acesso;
                this.callbackok()
                this.fechar()
            }
            else{
                this.logado=false;
                this.matlogado=null;
                globalThis.nomelogado =null;
                this.acessologado = null;
                this.callbacknot()
            }
           
        })
        // if(mat=='123' && pas=='321'){
        //     console.log('ye')
        //     return true;}
        // else{return false}
    }
    static fechar=()=>{
       const id_fundologin = document.getElementById('fundologin')
       id_fundologin.remove()
        const id_estilologin=document.getElementById('estilologin')
       id_estilologin.remove()
       
    }
};

