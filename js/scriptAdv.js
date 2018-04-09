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

Person.prototype.calculateAge = function(){
    console.log(2018-yearOfBirth);
};

//Create object 
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'Designer');

john.calculateAge();
jane.calculateAge();