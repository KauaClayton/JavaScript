import c from "./contatos.js";

const listacont = document.querySelector('#Lista_contatos')
const btn_gravar = document.querySelector('#btn_gravar')
btn_gravar.addEventListener('click', ()=>{
    const cont={
        nome:document.querySelector('#f_nome').value,
        telefone:document.querySelector('#f_telefone').value,
        email:document.querySelector('#f_email').value
    }

    c.addContato(cont, listacont)
    console.log(c.GetTodosContatos())
})