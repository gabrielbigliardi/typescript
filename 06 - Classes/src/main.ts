class Coder {
    // inside class properties and methods are called members
    name: string
    lang: string



    constructor(
        name: string,
        private age: number,
        lang: string,
        public readonly music: string = "Rock"
    ) {
        this.name = name
        this.age = age
        this.lang = lang

    }

    public getAge() {
        return this.age
    }
}

const Gabe = new Coder("Gabriel", 26, "Go")

console.log(Gabe.name)
console.log(Gabe["lang"])
console.log(Gabe.music)
console.log(Gabe.getAge())

console.log("---------------------------------------------------");




class Mammals {

    constructor(
        // visability modifiers
        public readonly name: string,
        private age: number,
        protected color: string
    ) {
        this.name = name
        this.age = age
        this.color = color

    }
}

class Dog extends Mammals {
    constructor(
        name: string,
        age: number,
        color: string,
        public nipple: number,
    ) {
        super(name, age, color)
        this.nipple = nipple
    }

    getAge() {
        return this.nipple
    }
}

const aurora = new Dog("aurora", 9, "caramelo", 9)

console.log(aurora.getAge());


////////////////////////////////////////////////////////////////
console.log("---------------------------------------------------");

interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist implements Musician {
    name: string
    instrument: string

    constructor(
        name: string,
        instrument: string
    ) {
        this.name = name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist('Jimi Page', 'guitar')
console.log(Page.play('strums'));

console.log('---------------------------------------------------');


class Peeps {
    // static applies direct to the class and not to any instanciate with the class
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }

    public id: number

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Amy.id)
console.log(Steve.id)
console.log(John.id)
console.log(Peeps.count)


console.log('---------------------------------------------------');



class Bands {
    private dataState: string[]

    constructor() {
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value
            return
        } else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['Neil Young', 'Led Zep']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'ZZ Top']
console.log(MyBands.data)
// MyBands.data = ['Van Halen', 5150] // must be string data