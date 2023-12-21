"use strict";
let stringArray = [`jumba`, 'rora', 'bela'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];
let dogs;
dogs = ['corgi', 24, 13];
stringArray[0] = 'Luiza';
stringArray.push('Jumba');
console.log(stringArray);
guitars.unshift('Jimi');
console.log(guitars);
guitars = stringArray;
let qualquer = [];
let band = [];
band.unshift('led');
console.log(band);
//tupla
let tupla = ['bob', 1969, true];
let mixed = ['John', 1980, false];
tupla[1] = 13;
//object
let myObj;
let myObj2;
myObj = []; // um array tbm eh um type object
console.log(typeof myObj);
myObj = band;
const exempleObject = {
    prop1: 'Gabriel',
    prop2: true
};
exempleObject.prop1 = 'Jumba';
let slash = {
    name: 'Saul',
    active: false,
    albuns: ['slash1', 2015]
};
let jimi = {
    name: 'Page',
    active: false,
    albuns: ['I', 'II', 'IV']
};
let jimmy = {
    name: 'Page',
    // active: false,
    albuns: ['I', 'II', 'IV']
};
console.log(slash);
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return 'Hello';
};
console.log(greetGuitarist(jimmy));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 3] = "U";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["C"] = 5] = "C";
    Grade[Grade["B"] = 6] = "B";
    Grade[Grade["A"] = 7] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
