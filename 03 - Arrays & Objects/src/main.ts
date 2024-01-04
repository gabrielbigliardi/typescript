let stringArray = [`jumba`, 'rora', 'bela']
let guitars = ['strat', 'les paul', 5150]
let mixedData = ['EVH', 1984, true]
let dogs: (string | number)[]

dogs = ['corgi', 24, 13]

stringArray[0] = 'Luiza'
stringArray.push('Jumba')
console.log(stringArray)

guitars.unshift('Jimi')
console.log(guitars)

guitars = stringArray

let qualquer = []
let band: string[] = []
band.unshift('led')
console.log(band);

//tupla
let tupla: [string, number, boolean] = ['bob', 1969, true]

let mixed = ['John', 1980, false]

tupla[1] = 13


//object
let myObj: object
let myObj2: {}
myObj = [] // um array tbm eh um type object
console.log(typeof myObj);
myObj = band


const exempleObject = {
    prop1: 'Gabriel',
    prop2: true
}

exempleObject.prop1 = 'Jumba'

//annotateTypesObj
// interface Guitarist {   
type Guitarist = {
    name?: string,
    active?: boolean,
    albuns: (string | number)[]
}

let slash: Guitarist = {
    name: 'Saul',
    active: false,
    albuns: ['slash1', 2015]
}

let jimi: Guitarist = {
    name: 'Page',
    active: false,
    albuns: ['I', 'II', 'IV']
}

let jimmy: Guitarist = {
    name: 'Page',
    // active: false,
    albuns: ['I', 'II', 'IV']
}

console.log(slash);

const greetGuitarist = (guitarist: Guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return 'Hello'
}

console.log(greetGuitarist(jimmy));

//Enums
enum Grade {
    U = 3,
    D,
    C,
    B,
    A
}

console.log(Grade.A);
