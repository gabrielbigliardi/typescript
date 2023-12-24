class Coder {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age

    }
}

class Dog {

    constructor(public readonly name: string, private age: number, protected color: string) {
        this.name = name
        this.age = age
        this.color = color

    }
}