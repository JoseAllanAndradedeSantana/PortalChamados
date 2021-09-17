const peso1 = 1.0;
const peso2 = Number('2.0');

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.87
const avaliacao2 = 8.88

const somaDaAvaliacoes = avaliacao1 * peso1 + avaliacao2 * peso2
const media = somaDaAvaliacoes / (peso1 + peso2)
console.log(somaDaAvaliacoes)
console.log(media)
console.log(media.toFixed(2))