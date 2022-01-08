//manipulação de array

const forma = ["alysson", "laura", 27, 25]

//adicionar um item no fim

forma.push("2015")

//adicionar no começo

forma.unshift("amor")

//remover do fim

forma.pop()

//remover do começo

forma.shift()

//pegar somente alguns elementos do array

console.log(forma.slice(1,3))

//remover 1 ou mais itens de qualquer posiçao do array

forma.splice(1,3)

//encontrar a posição de um elemento no array

console.log(forma)