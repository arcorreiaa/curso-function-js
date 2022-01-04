//Callback function
// callback é uma função que estar passando por
// parametro outra função

function falaMeuNome(name) {
    console.log('Antes de executar callback')

    name()

    console.log('Depois de executar a callback')
}

falaMeuNome(
    () => {
        console.log('Estou em uma callback')
    }
)
