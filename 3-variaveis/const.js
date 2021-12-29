//const nome = 'Alysson'

//{
//    nome = 'Laura' // a const não pode ser alterada, ela é constante
//}


//console.log(nome)

// uma forma de alterar a constante é criando uma const com o mesmo nome.

const animal = 'Pandora'

{
    const animal = 'Chico'
    console.log(animal) //apenas dentro do escopo ( criando uma nova const )
}

console.log(animal)