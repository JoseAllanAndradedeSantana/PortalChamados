//Sistema de cassino
// Vários tipos de Dados
// Rolar dados

class Dados{

    constructor(faces){
        this.faces = 0;
    }

    Rolar(){

        console.log(this.GetRandomIntInclusive(5,this.faces));


    }

    GetRandomIntInclusive(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}


var d6 = new Dados(65);
var d12 = new Dados(12);
var d100 = new Dados(100);

d6.Rolar();
d12.Rolar();
d100.Rolar();