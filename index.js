//Criando um APP Express
const express = require('express');
const app = express();

//Definindo a porta
const port = 3000;

//Configurando Marco
require('marko/node-require');
var markoExpress = require("marko/express");
app.use(markoExpress());

//configurando o Body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

//Criando o DAO
const AlunoDao = require('./dao/aluno-dao');
const dao = new AlunoDao();

//Configurando mensagens Flash
const session = require('express-session');
const flash = require('connect-flash');
app.use(session({
    secret: 'geeksforgeeks',
    saveUninitialized: true,
    resave: true
}));
app.use(flash());


//Rota Listagem
app.get('/', function (req, res) {

    let response = {
        error_messages: req.flash('error'),
        success_nessages: req.flash('success'),
        results: []
    };

    //console.log(response);

    dao.list().then((results) => {
        response.results = results;
        res.marko(require('./templates/alunos.marko'), response);
    }).catch((err) => {
        console.log('Ocorreu um erro: ')
        console.log(err)
        response.error_messages.push('Ocorreu algum erro no servidor')
        res.marko(require('./templates/alunos.marko'), response);
        //console.log(response)
    });
});

//Tela de Cadastro
app.get('/form', function (req, res) {
    res.marko(require('./templates/form.marko'));
});

//Rota Edição
app.get('/form/:id', function (req, res) {
    dao.findById(req.params.id).then((results) => {
        if (results.length > 0) {
            aluno = results[0];
            res.marko(require('./templates/form.marko'), aluno);
        } else {
            req.flash('error', 'Não foi encontrado aluno com o id = ' + req.params.id);
            res.redirect('/');
        }
    }).catch((err) => {
        console.log(err)
        req.flash('error', 'Ocorreu um erro ao buscar o aluno com id = ' + req.params.id)
        res.redirect('/');
    });
});

//Rota Delete
app.get('/alunos/delete/:id', function (req, res) {
    dao.delete(req.params.id).then((results) => {
        req.flash('success','Registro Removido com sucesso');
        res.redirect('/');
    }).catch((err) => {
        req.flash('error','Regidtro não Encontrado');
        res.redirect('/');

    });
});

//Rota de Cadastro
app.post('/alunos', function (req, res) {
      if (req.body.id) {
            dao.update(req.body).then((results) => {
            req.flash('success','Alterado com Sucesso');
            res.redirect('/');
        }).catch((err) => {
            req.flash('error','Falha na alteração');
            res.redirect('/');
        });

    } else {
        dao.save(req.body).then((results) => {
            req.flash('success', 'Registrado com Sucesso!!')
            res.redirect('/');
        }).catch((err) => {
            console.log(err)
            req.flash('error', 'Falha ao salvar o registro!!')
            res.redirect('/');
        });
    }
});

app.listen(port, '0.0.0.0', function () {
    console.log('Servidor iniciado!!')
});
