class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static  endpoint = 'https://login.kauaclaytonng.repl.co';
        
    static login=(mat,pas)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pas}`;
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            if(res){
                this.logado= true;
                this.matlogado = mat;
                this.nomelogado = res.nome;
                this.acessologado = res.acesso;
                console.log(res)

            }else{
                console.log('usuario nn encontrado seu verme.')
            }
        })
    };
};

export {Login};