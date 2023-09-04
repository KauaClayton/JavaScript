class Cursos{
   static cursos = ['JS', 'PhP', 'HTML', 'CSS', 'RaspeBerry', 'C++', 'Python','Java']
   constructor(){}
   static getTodosCursos=()=>{
        return this.cursos
   }
   static getCurso=(ind)=>{
    return this.curso[ind]
   }
   static addCurso=(NovoCurso)=>{
    this.cursos.push(NovoCurso)
   }
   static DeleteCursos=()=>{
    this.cursos = []
   }
}


export default Cursos

