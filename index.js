const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const chamadoModel = require("./database/Chamados");
const respostaModel = require("./database/Resposta");
const multer = require("multer");
//const nodemailer = require("nodemailer");
//const email = require("smtp-locaweb-nodejs");

const upload = multer({dest: "upload/"})

app.post("/upload",upload.single("file"),(req,res)=> {
  // res.render("aberturadechamados.ejs")
})

connection.authenticate().then(()=>{
    console.log("CONEXÃO FEITA COM SUCESSO !!");

})
.catch((msgErro)=>{

})

app.set('view engine', 'ejs');
app.use("/favicon.ico", express.static("public/img/favicon.ico"));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text({type: 'text/html'}));
app.use(bodyParser.json());
app.get("/", (req,res)=>{
    chamadoModel.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(chamados => {
    res.render("index.ejs",{
        chamados:chamados
    });
    });
}); 


app.get("/chamadosAbertos", (req,res)=>{
    chamadoModel.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(chamados => {
    res.render("chamados.ejs",{
        chamados:chamados
    });
    });
}); 
app.get("/relatorios", (req,res)=>{
    chamadoModel.findAll({raw: true, order:[
        ['id','DESC']
    ]}).then(chamados => {
    res.render("relatorios.ejs",{
        chamados:chamados
    });
    });
});
app.get("/abrirChamados",(req,res) =>{
    res.render("aberturadechamados.ejs");
});
app.get("/triagem",(req,res) =>{
    res.render("triagem.ejs");
});
app.get("/CadastroFuncionarios",(req,res) =>{
    res.render("AtualizacaoCadastral.ejs");
});
app.post("/salvarCadastro", (req,res)=>{
  var empresa = req.body;
 // var nomeFunc = req.body.nomeFuncionario_triagem;
 // var cpfTriagem = req.body.cpf_triagem;
 res.redirect("CadastroFuncionarios");

 
  
   
});
app.post("/salvarchamado",upload.single("file"), (req,res)=>{
    var empresa = req.body.empresa_chamado;
    var titulo = req.body.titulo_chamado;
    var descricao = req.body.descricao_chamado;
    var responsavel = req.body.responsavel_chamado;

    chamadoModel.create( {
        empresa_chamado: empresa,
        titulo_chamado: titulo,
        descricao_chamado: descricao,
        responsavel_chamado: responsavel
    }).then(() => {
        res.redirect("/abrirChamados");
    });
});

//app.get("/chamado/:id",(req,res) =>{
    app.get("/chamadosAbertos/:id",(req,res) =>{
    var id = req.params.id;
    
    chamadoModel.findOne({
        where: {id: id}
    }).then(chamados =>{
        if(chamados != undefined){

            respostaModel.findAll({
                where: {chamadoid: chamados.id},order:[ 
                    ['id','DESC'] 
                ]
            }).then(respostas => {

                res.render("chamadosAbertos",{
                    chamados : chamados,
                    respostas: respostas
                });
            });

            res.render("chamadosAbertos",{
                chamados:chamados,
                respostas: respostas
                
            });

        }else{

            res.redirect("/");

        }
    })
});





    


app.post("/responder",(req, res) =>{

    var corpo = req.body.corpo;
    var chamadoid = req.body.chamadoid;

    respostaModel.create({
        corpo: corpo,
        chamadoid: chamadoid
    }).then(()=>{

        res.redirect("/chamadosAbertos/" + chamadoid);

    });
});

//let transporter = nodemailer.createTransport({
  //  host:"smtp.postosportaldesantos-ssl.com.br",
  //  port: 465,
  //  secure: true,
   // auth: {
    //    user:"ti@postosportaldesantos.com.br",
    //    pass:"Santour#2015"
   // }
//});

//transporter.sendMail({

   // from: "Allan Santana <ti@postosportaldesantos.com.br>",
   // to: "ti@postosportaldesantos.com.br",
   // subject: "Formulário Triagem",
  //  text: "teste",
  //  html: "Oja"

//}).then(message =>{
  //  console.log(message);

//}).catch(err =>{
 //   console.log(err);
//})



app.listen(8000,()=>{});/*

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pergunta = require("./database/Chamados");
const Resposta = require("./database/Resposta");
//Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro);
    })

// Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');
app.use(express.static('public'));
// Body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Rotas
app.get("/",(req, res) => {
    Pergunta.findAll({ raw: true, order:[
        ['id','DESC'] // ASC = Crescente || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index",{
            perguntas: perguntas
        });
    });
});

app.get("/perguntar",(req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta",(req, res) => {

    var titulo = req.body.titulo;
    var descricao = req.body.descricao;

    Pergunta.create({
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect("/");
    });
});

app.get("/pergunta/:id",(req ,res) => {
    var id = req.params.id;
    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){ // Pergunta encontrada

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order:[ 
                    ['id','DESC'] 
                ]
            }).then(respostas => {
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            });

        }else{ // Não encontrada
            res.redirect("/");
        }
    });
})

app.post("/responder",(req, res) => {
    var corpo = req.body.corpo;
    var perguntaId = req.body.pergunta;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId);
    });
});

app.listen(8080,()=>{console.log("App rodando!");})*/

