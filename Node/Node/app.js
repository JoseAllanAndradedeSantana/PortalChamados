var nome = "Jose Allan";

function func1(){
    console.log("Ola " + nome);
}

func1()

function soma (a,b){
    console.log(a+b);
}

var empresa = {
    nome:"JAAS SOFTWARE",
    cnpj:"12.345.678/0001-99"

}

console.log(empresa)

setTimeout(() => {

    console.log("Deus é Fiel !!!");

},2000)



function enviarEmail(corpo,para){
    setTimeout(() => {
        console.log(`
           Para:${para}
           =============================
           ${corpo}
           =============================
           De:Jose Allan 
           Desenvolvedor Java Senior
        
        `)

    },2000)
}

enviarEmail("Bom dia Segue as demanadas solicitas","email@cliente.com");