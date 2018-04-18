// let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

function driversLicence5(passedTest){
    if(passedTest){
        var firstName = 'John'; // with var the variable is function scoped.
        var yearOfBirth = 1990;
    }
    console.log(firstName + yearOfBirth);
}

driversLicence5(true);

//ES6
const name6 = 'Jane Smith';
let age6 = 23; // let instead of var
// name6 = 'Jane Miller'; CAN´T
console.log(name6);

function driversLicence6(passedTest){
    if(passedTest){
        let firstName = 'John';  // with let and const, the variables are bloked scoped.
        const yearOfBirth = 1990;
        console.log(firstName + yearOfBirth);
    }
    
}

driversLicence6(true);

// Blocks and IIFEs Immediatly invoked function exception

// ES5
(function() {
    var c = 3;
})();


// ES6
{
    const a = 1;
    let b = 2;
}
//console.log(a+b);

// Strings
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2018 - year;
}

//ES6
console.log(
`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`)

// Template literals
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));

const years = [1990, 1965, 1982, 1937];
// ES5
var ages5 = years.map(function(curr){
    return (2018 - curr);
});
console.log(ages5);

// ES6 Arrow functions
let ages6 = years.map(curr => 2018 - curr);
console.log(ages6);

ages6 = years.map((curr, index) => `Age element ${index +1}: ${2018 - curr}.`);
console.log(ages6);

ages6 = years.map((curr, index) => { 
    const now = new Date().getFullYear();
    const age1 = now - curr;
    return `Age element ${index +1}: ${age1}.`
});

console.log(ages6);

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this; //work around
        document.querySelector('.green').addEventListener('click', function(){
            alert('This is box number ' + self.position + ' and it is ' + self.color);
        })
    }
}
//box5.clickMe();

// ES6

let box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
       
        document.querySelector('.green').addEventListener('click', 
            () => { alert('ES6 This is box number ' + this.position + ' and it is ' + this.color) })
    }
}
box6.clickMe();

// ES5
function Person(name){
    this.name = name;
}
Person.prototype.myFriends5 = 
    function(friends){
        var arr = friends.map(function(el){
            return this.name + ' is friends with ' + el;
        }.bind(this));
        console.log(arr);
    }

var friends = ['Bob', 'Jane', 'Mark'];
//new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = 
    function(friends){
        var arr = friends.map( el => `${this.name} (ES6) is friends with ${el}`);
        console.log(arr);
    }

new Person('Mike').myFriends6(friends);

// Destructuring
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName1: 'Lara',
    lastName1: 'Smith'
};

const {firstName1, lastName1} = obj;
console.log(firstName1);
console.log(lastName1);

const {firstName1: a, lastName1: b} = obj;
console.log(a);
console.log(b);


// Arrays
const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(curr) {
//    curr.style.backgroundColor = 'dodgerblue';
//});

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5
for(var i=0; i<boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue')
        continue;
   // boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6
for(const cur of boxesArr6){
    if(cur.className.includes('blue'))
        continue;
    cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var fullAge = ages.map(function(cur){
    return cur >= 18;
});
console.log(fullAge);
console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18));


// Spread Operator

function addFourAges (a, b, c, d){
    return a+b+c+d;
}

var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages); //spread operator
console.log(sum3);

const h = document.querySelector('h1');
const boxes3 = document.querySelectorAll('.box');
//boxes3 is a nodelist. Must convert to array in order to loop with forEach
// [h, ...boxes3] //spread into 1 big list
Array.from([h, ...boxes3]).forEach(cur => cur.style.color = 'purple');


/////////////////
//Rest Parameters

// Receive a list of args and transform into array 
// ES5
function isFullAge5(){
    console.log(arguments); //arguments is not a array. It is a object
    var argsArr = Array.prototype.slice.call(arguments); //Transform in array
    console.log(argsArr);
}
isFullAge5(1990,1999,1965); 

// ES6
function isFullAge6(limit, ...years){ // Rest Param is used in a function declaration
   console.log(years);
}

isFullAge6(21,1990,1999,1965, 1982); 

// Default parameters

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    lastName === undefined ? this.lastName = 'Smith' :  this.lastName = lastName,
    nationality === undefined ? this.nationality = 'American' : this.nationality = nationality,
    this.firstName = firstName,
    this.yearOfBirth = yearOfBirth
}

/*var John = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1990, 'Diaz', 'Spanish');
console.log(John);
console.log(emily); */

// ES6
function SmithPerson6(firstName, yearOfBirth, 
    lastName = 'Smith', nationality = 'American'){
        this.firstName = firstName,
        this.yearOfBirth = yearOfBirth,
        this.lastName = lastName,
        this.nationality = nationality

}

var John = new SmithPerson6('John', 1990);
var emily = new SmithPerson6('Emily', 1990, 'Diaz', 'Spanish');
console.log(John);
console.log(emily);

// MAPS
// Anything as keys
const question = new Map();
question.set('question', 'What is the oficial name of the latest majos JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong.');

console.log(question.get('question'));
question.delete(1);
console.log(question.size);
//loop map
question.forEach((value, key) => console.log(`this is ${key}, and it´s set to ${value}`));
// OR
for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

if(question.has(4)){
    //do anything
}
question.clear();


//Classes

// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = 
    function(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
}

var john5 = new Person5('John', 1982, 'teacher');
john5.calculateAge();

// ES6
class Person6{
    constructor(name, yearOfBirth, job = 'teacher'){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
        console.log(this.job);
    }
    static greeting(){
        console.log('Hey there!');
    }
}
var john6 = new Person6('John', 1982);
john6.calculateAge();
Person6.greeting();

// INHERINTACE
class Athlete6 extends Person6{
    constructor(name, yearOfBirth, olympicGames, medals, job = 'teacher'){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

var johnAthlete6 = new Athlete6('John', 1990, 3, 10, 'swimmer');
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();

let arr = [1,2,3,4,5];
const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
console.log(sum);
