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
var yearsOfBirth = [1982, 1984, 1988];
console.log(yearsOfBirth);
var emptyArray = [];
console.log(emptyArray);

for(var i=0; i < yearsOfBirth.length; i++){
   emptyArray[i] = 2018 - yearsOfBirth[i];
}
console.log(emptyArray);
