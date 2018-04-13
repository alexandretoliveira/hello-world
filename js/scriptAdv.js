/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

//Function constructor - Class in Java
var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
//Prototype 
Person.prototype.calculateAge = function(){
    console.log(2018-yearOfBirth);
};

//Create object 
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');

john.calculateAge();
jane.calculateAge();


// Object.create
/*
var personProto = {
    calculateAge: function(){
        console.log(2018-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

console.log(john);

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});

console.log(jane);
*/

//Primitives (numbers, strings, booleans, undefined and null) vs objects

//Passing functions as arguments
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc (arr, fn){
    var arrResult = [];
    for(var i = 0; i<arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el){
    return 2018 - el;
}
function isFullAge(el){
    return el >= 18;
}

console.log(arrayCalc(years, calculateAge)); //callback function
console.log(arrayCalc(arrayCalc(years, calculateAge), isFullAge)); //callback function

//Return function in variable
function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log(name + ', what subject do you teach?');
        }
    } else {
        return function(){
            console.log('Hello ' + name + ', what do you do?');
        }
    }

}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('John');
var designQuestion = interviewQuestion('designer');
designQuestion('Mary');

//without store in variable
interviewQuestion('teacher')('Mark');

//IIFE (invoked once one time and create Data Privacy.)
(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5-goodLuck);
})(4);

//Closures
function retirement(retirementAge){
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
retirementUS(1982);

retirement(66)(1981);


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ' I\'m ' + this.name + '. I\'m ' + this.age + ' year old.') ;
        } else if(style === 'friendly'){
            console.log('What\'s up ' + ' I\'m ' + this.name + '. I\'m ' + this.age + ' year old. Have a nice ' + timeOfDay) ;
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 23,
    job: 'designer'
}
//method borrowing
john.presentation.call(emily, 'formal', 'afternoon');
john.presentation.apply(emily, ['friendly', 'morning']);

//bind generate a copy of the function
var emilyFriendly = john.presentation.bind(emily, 'friendly');
emilyFriendly('evening');




var years = [1990, 1965, 1937, 2005, 1999];

function arrayCalc (arr, fn){
    var arrResult = [];
    for(var i = 0; i<arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(el){
    return 2018 - el;
}
function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i=0; i< this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
        
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        }
        else{
            console.log('Wrong answer!');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is:' + score);
    }
    
    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                            ['Yes', 'No'], 0);
    var q2 = new Question('Whats the name of this course\'s teacher?',
                            ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('Whats the name of this course\'s teacher?',
                            ['John', 'Micheal', 'Jonas'], 2);                        
    
    var questions = [q1, q2, q3];
    
    function score() {
        var sc = 0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }

    var keepScore = score();



    function nextQuestion(){

        var randomNumber = Math.floor(Math.random() * questions.length);
        
        questions[randomNumber].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        
        
        if(answer !== 'exit'){
            questions[randomNumber].checkAnswer(parseInt(answer), keepScore);
            //nextQuestion();
        }
    }

    nextQuestion();
})();
