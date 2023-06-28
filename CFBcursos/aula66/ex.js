const pessoa = {
    nome:"Bruno",
    canal:"CFBCURSOS",
    curso:'JavaScript',
    aulas:{
        aula01:'Introdução',
        aula02:'Variáveis',
        aula03:'Condicional'
    }}
const string_p = '{"nome":"Bruno","canal":"CFBCURSOS","curso":"JavaScript","aulas":{"aula01":"Introdução","aula02":"Variáveis","aula03":"Condicional"}}'
const s_json =JSON.stringify(pessoa) //converte objeto em string json
const obj_json = JSON.parse(string_p)//converte json em objeto

console.log(pessoa)
console.log(s_json)
console.log(obj_json)