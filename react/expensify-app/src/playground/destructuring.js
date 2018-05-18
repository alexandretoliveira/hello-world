
const person = {
    name: 'Alexandre',
    age: 35,
    location: {
        city: 'Brasilia',
        temp: 28
    }
}

const { name: firstName = 'Anonymous', age } = person; //destructuring  //default value

const { city, temp: temperature } = person.location; //change variable name

//console.log(`${person.name} is ${person.age}`);
console.log(`${firstName} is ${age}`);
console.log(`${city} is ${temperature}`);

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [ , city, state = 'New York'] = address;

console.log(`${street} , ${city}`);