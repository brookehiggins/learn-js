var name = "alex"

console.log(typeof name, name) // log type of string

var age = 69;

console.log(typeof age, age) // log typeof number

var single = false;
console.log(typeof single, single) //log typeof boolean

var sayHello = () => {
    return 'hello'
};

console.log(typeof sayHello, typeof sayHello() ); //log typeof function that returns type of string

//"person" is an object. Objects can hold values of different types
var person = {
    age: age,
    name: name,
    single: single,
    sayHello: sayHello,
}
console.log(typeof person, typeof person.age, typeof person.name, typeof person.single, typeof person.sayHello,)


//An array's type is object, even though they have different functionalities
var people = [person, 'thing', 1, false]

console.log(typeof people)