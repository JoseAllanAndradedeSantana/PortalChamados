const fs = require("fs");
var Reader = require("./Reader");

var leitor = new Reader();
leitor.Read("./Pasta1.xlsx");



fs.readFile("./file.txt",{encoding: 'UTF8'}, (error, dados) => {

    if(error){
        console.log(error);
    }else {
        console.log(dados);
    }

});

fs.writeFile("./file.txt","Jesus Cristo eu te amo", (error) => {

    if(error){
        console.log("Erro ao salvar arquivo");
    }else{
        console.log("Salvo com sucesso!!");
    }

});

fs.readFile("./file.json",{encoding: 'UTF8'},(error, dados) => {

    if(error){

        console.log(error)

    }else{
        console.log(dados);
        var conteudo = JSON.parse(dados);
        console.log(conteudo);
        conteudo.name = "Jose";
    }


    fs.writeFile("./file.json",JSON.stringify(conteudo),(error) => {

    });
});


