"use strict";

let isDone :boolean = false;
let decimal :number = 6;
let color :string = 'berlin';

let aArray :number[] = [1, 2, 3];
let aGenericArray :Array<number> = [4,5,6];

enum Color {Red, Green, Blue};
let c :Color = Color.Green;
let notSure: any = 4;

let tuple: [string, number];
tuple = ["Hello", 42];

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

interface Robot {
    name :string;
    model? :number;
    isDiscontinued? :boolean;
    readonly color? :string;
    sayName() :void;
}

class C3PO implements Robot {
    name :string;

    constructor(name :string) {
        this.name = name;
    }

    sayName() :void {
        alert(this.name);
    }
}

let myC3PO :Robot = new C3PO("Zoe");
myC3PO.isDiscontinued = true;

class TinyThing {
    name :string;
    protected weight :number;
    private age :number;
}

function printRobotInfo(robot :Robot) {
    console.log(robot.name);
    console.log(robot.model);
}

interface LameFunc {
    () :void;
}

let funcType :LameFunc;
let funcType2 :(robot)=>void;

funcType = printRobotInfo; // Error: Wrong function type
funcType2 = printRobotInfo;

function sort(funcType2) { /*...*/ }
sort(printRobotInfo);

// optional
let myRobot = {name: 'Arnold', sayName: function(){}};

// structural
printRobotInfo(myRobot);

// local
let c3po = new C3PO("c1po");
c3po = 42; // error

// contextual
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.buton); // <- Error
};


// Static and instance side???
interface MortalInterface {
    age :number;
    new (age :number);
}

class Mortal implements MortalInterface {
    age :number;
    constructor(age :number) { }
}

interface HumanConstructor {
    new (age :number) :HumanInterface;
}
interface HumanInterface {
    age :number;
}

class Human implements HumanInterface {
    age :number;
    constructor(age :number) {
        this.age = age;
    }
}

function createHuman(ctor :HumanConstructor, age :number) :HumanInterface {
    return new ctor(age);
}

let dijkstra = createHuman(Human, 86);

