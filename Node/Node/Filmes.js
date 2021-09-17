class Filme{
    constructor(titulo,ano,genero,diretor,duracao){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
        this.diretor = '';
        this.atores = [];
        this.duracao = 0;
    }

    Reproduzir(){
        console.log("Reproduzindo...");
        
    }

    Pausar(){
        console.log("Pausando");
    }

    Avancar(){
        console.log("Avançar");
    }

    Fechar(){
        console.log("Fechar");
    }
   
}

var vingadores = new Filme();
vingadores.titulo = "Vingadores 2";
vingadores.ano = 2022;
console.log(vingadores);
vingadores.Avancar();
var hulk = new Filme();
var starWars = new Filme();