/*
var height1 = 1.70;
var age1 = 35;
var score1 = height1 + (5 * age1);

var height2 = 1.72;
var age2 = 30;
var score2 = height2 + (5 * age2);

if(score1 === score2)
  console.log('There is a draw.');
  else if (score1 > score2)
    console.log('Player 1 won.');
    else
      console.log('Player 2 won.');
*/
//array with some years
/*
var yearsOfBirth = [1965, 2008, 1992];
console.log(yearsOfBirth);
var emptyArray = [];
console.log(emptyArray);

for(var i=0; i < yearsOfBirth.length; i++){
   emptyArray[i] = 2018 - yearsOfBirth[i];
}
console.log(emptyArray);
*/
/*
function printFullAge(yearsOfBirth){
  var fullAge = [];
  var age = [];

  for(var i=0; i < yearsOfBirth.length; i++){
     age[i] = 2018 - yearsOfBirth[i];
  }

  for(var i = 0; i<age.length; i++){
    if( age[i] >= 18 )
      fullAge.push(true);
    else
      fullAge.push(false);
  }

  for(var i=0; i<fullAge.length;i++){
    console.log('Person ' + i + ': Full Age: ' + fullAge[i]
        + ' Age: ' + age[i]);
  }
  return fullAge;
}

var full_1 = [1965, 2008, 1992];
printFullAge(full_1);

var full_2 = printFullAge([1975, 2005, 1994]);
console.log(full_2);
*/
//Hoisting
calculateAge(1982);
// function declaration
function calculateAge(year){
  console.log(2018-year);
}


// function expression
var retirement = function(year){
  console.log(65 - (2018-year));
}
retirement(1982);

var john = {
  name: 'John',
  yearOfBirth: 1990,
  calculateAge: function(){
    console.log(this);
    console.log(2018 - this.yearOfBirth);
    // regular function, not a method. So this refers to window
    function innerFunction (){
      console.log(this);
    }
  //  innerFunction();
  }
};
john.calculateAge();

var mike = {
  name: 'Mike',
  yearOfBirth: 1978
};
//borrow method
mike.calculateAge = john.calculateAge;
mike.calculateAge();
