//fs.writeFile
//var conteudo = JSON.parse(dados)
//JSON.stringify

function teste(){
    const numeros =[26,41,42,99,59,83,3,60,19,4]
    let retorno = []
    numeros.forEach(numero =>{
        if(!(numero % 2 || numero <= numeros.length){
            retorno.push(numero)

        }
    })
    return retorno
}
console.log(teste())