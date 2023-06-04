

function aluno(nome, nota){
   this.nome=nome
   this.nota=nota
   this.dados_anonimos=function(){
        setTimeout(function(){
            this.nome = 'x'
            this.nota = 5
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)//gera um atraso na execução
   } 
   this.dados_arrow=function(){
    setTimeout(()=>{
        
        console.log(this.nome)
        console.log(this.nota)
    }, 2000)//gera um atraso na execução
} 

}
const aluno1 = new aluno('Carlos', 7)
aluno1.dados_anonimos()
aluno1.dados_arrow()

