// type alias
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
    name?: string,
    active?: boolean,
    albuns: stringOrNumberArray
}


type UserId = stringOrNumber

//literal types
let myName: 'Gabe'

let userName: 'Paul' | 'George' | 'John' | 'Ringo'
userName = "George"

const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (msg: any): void => {
    console.log(msg);
}

logMsg('Hi')
logMsg(add(2, 3))

let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction { 
//     (a: number, b: number): number 
// }

let multiply: mathFunction = function (c, d) {
    return c * d
}

logMsg(multiply(13, 5));

//optional parameter
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

//optional parameter
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    if (typeof c !== 'undefined') {
        return a + b + c
    }
    return a + b
}

logMsg(addAll(1, 2, 3))
logMsg(addAll(1, 2))
logMsg(sumAll(1, 2, 3))
logMsg(sumAll(1, 2))
logMsg(sumAll(undefined, 2))

// Rest Parameters 
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break
    }
}

// custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
        ? true : false
}

// use of the never type 
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string'
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}