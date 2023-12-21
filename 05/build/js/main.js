"use strict";
//literal types
let myName;
let userName;
userName = "George";
const add = (a, b) => {
    return a + b;
};
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hi');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction { 
//     (a: number, b: number): number 
// }
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(13, 5));
//optional parameter
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//optional parameter
const sumAll = (a = 10, b, c = 2) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
logMsg(addAll(1, 2, 3));
logMsg(addAll(1, 2));
logMsg(sumAll(1, 2, 3));
logMsg(sumAll(1, 2));
logMsg(sumAll(undefined, 2));
