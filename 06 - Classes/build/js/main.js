"use strict";
class Coder {
    constructor(name, age, lang, music = "Rock") {
        this.age = age;
        this.music = music;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Gabe = new Coder("Gabriel", 26, "Go");
console.log(Gabe.name);
console.log(Gabe["lang"]);
console.log(Gabe.music);
console.log(Gabe.getAge());
console.log("---------------------------------------------------");
class Mammals {
    constructor(
    // visability modifiers
    name, age, color) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.name = name;
        this.age = age;
        this.color = color;
    }
}
class Dog extends Mammals {
    constructor(name, age, color, nipple) {
        super(name, age, color);
        this.nipple = nipple;
        this.nipple = nipple;
    }
    getAge() {
        return this.nipple;
    }
}
const aurora = new Dog("aurora", 9, "caramelo", 9);
console.log(aurora.getAge());
////////////////////////////////////////////////////////////////
console.log("---------------------------------------------------");
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimi Page', 'guitar');
console.log(Page.play('strums'));
console.log('---------------------------------------------------');
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// static applies direct to the class and not to any instanciate with the class
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Amy.id);
console.log(Steve.id);
console.log(John.id);
console.log(Peeps.count);
console.log('---------------------------------------------------');
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
// MyBands.data = ['Van Halen', 5150] // must be string data
