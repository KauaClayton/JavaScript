const cursos = ['JS', 'PhP', 'HTML', 'CSS', 'RaspeBerry', 'C++', 'Python','Java']

// const GetTodosCursos=()=>{
//     return cursos
// }

export default function GetTodosCursos(){
    return cursos
}
export function Curso(ind){
    return cursos[ind]
}

export {cursos, GetTodosCursos}
