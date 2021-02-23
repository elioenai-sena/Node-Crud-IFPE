const AlunoDao = require('./dao/aluno-dao');
var dao = new AlunoDao();


dao.findById(10).then( (results) =>{

    if (results.length > 0) {
        let aluno = results[0]
        console.log(aluno)
        console.log(aluno.nome)
    } else {
        console.log('Registro não encontrado')
        
    }      

}).catch( (err) =>{
    console.log(err)
});
//
/*
dao.list().then((results) => {
    console.log(results)
}).catch((err) => {
    console.log(err)
});


//listar
console.log('--------------------------')
console.log(dao.list());

//remover
console.log('--------------------------')
console.log(dao.delete(1));
console.log(dao.list());

//localizar
console.log('--------------------------')
let aluno = dao.findById(3);
console.log(aluno);

//inserir
var novoAluno = { id: 4, nome:'Carlos', curso:'IPI'}
dao.save(novoAluno);

console.log('--------------------------')
console.log(dao.list());
*/


