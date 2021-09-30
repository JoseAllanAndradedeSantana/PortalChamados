let imprimeResultado = function (nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log("Aprovado!!!");
            break;
        case 8:
            console.log("APROVADO!!");
        default:
            console.log("Nota Invalida");
    }
}

imprimeResultado(9);