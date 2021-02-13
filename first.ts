
function add(num1:number, num2:number) {
    const result = num1 + num2;
    return result;
}

const output = add(10, 25);
console.log(output);


const multiply = (x:number, y:number) => {
    const result = x * y;
    return result;
}

const output2 = multiply(5, 7);
console.log(output2);


let multiply2: (x:number, y:number) => number;
multiply2 = (x, y) => x * y;

const output3 = multiply2(7, 7);
console.log(output3);



const numbers: number[] = [12,23,24,55,25,76,45];
numbers.push(88);

// object declaring
let player: {club: string, salary: number} = {
    club: "Real Madrid",
    salary: 45000
}

// object
let player1: {
    club: string,
    salary: number
}

player1 = {
    club: "Barcelona",
    salary: 45000

}


interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messy: Player = {
    club: "Barcelona",
    name: "Messy",
    salary: 45000,
    wife: "Some name",
    isPlaying: true
}

const ronaldo: Player = {
    club: "Real Madrid",
    name: "Ronaldo",
    salary: 42000,
    isPlaying: true
}

function getBonus(player:Player, friends: string[] ){
    return player.salary * 0.1;
}
const poorPlayer = {age: 50, salary: 10000}
getBonus(messy, ["Sam", "Tam"])
// function getBonus(player:Player) {
//     return player.salary * 0.1;
// }
// const poorPlayer = {age: 50, salary: 10000}
// getBonus(poorPlayer)




class Person {
    name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(name: string, father:string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;

    }
    getName():string {
        return this.name;
    }
}

const sam = new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const samName = sam.getName();
sam.name = 'Tom';
// sam.fatherName = "John";