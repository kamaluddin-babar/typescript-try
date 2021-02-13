"use strict";
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
const output = add(10, 25);
console.log(output);
const multiply = (x, y) => {
    const result = x * y;
    return result;
};
const output2 = multiply(5, 7);
console.log(output2);
let multiply2;
multiply2 = (x, y) => x * y;
const output3 = multiply2(7, 7);
console.log(output3);
const numbers = [12, 23, 24, 55, 25, 76, 45];
numbers.push(88);
// object declaring
let player = {
    club: "Real Madrid",
    salary: 45000
};
// object
let player1;
player1 = {
    club: "Barcelona",
    salary: 45000
};
const messy = {
    club: "Barcelona",
    name: "Messy",
    salary: 45000,
    wife: "Some name",
    isPlaying: true
};
const ronaldo = {
    club: "Real Madrid",
    name: "Ronaldo",
    salary: 42000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 50, salary: 10000 };
getBonus(messy, ["Sam", "Tam"]);
// function getBonus(player:Player) {
//     return player.salary * 0.1;
// }
// const poorPlayer = {age: 50, salary: 10000}
// getBonus(poorPlayer)
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Tom';
// sam.fatherName = "John";
