/*
    funcção construtora

    *com a expressão new
    *Ela cria um novo objeto    
    *this alguma coisa ( usando this dentro dela)
*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " Tá andando"
    }
}

const alysson = new Person("Alysson")
const rychard = new Person("Rychard")

console.log(alysson.walk())
console.log(rychard.walk())