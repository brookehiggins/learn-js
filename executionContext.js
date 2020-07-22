// Example: what not to do: do not use vars before they are assigned a value
// expect to log 'called b' because functions are in memory entirely
b();
//expect log to log undefined because all variables are initally undefined (and it hasn't run what 'a=' yet)
console.log(a);

var a = 'Hello World!';
//expect to log 'Hello World!' because a has been assigned a value
console.log(a);

function b() {
    console.log('Called b!');
};

////////////////////////////////////////////////////////////////////
// best practice 

// assign a value to a variable before using
var a = 'Hello World!';

function b() {
    console.log('Called b!');
};

// expect to log 'called b' because functions are in memory entirely 
b();
//expect to log 'Hello World!' because a has been assigned a value
console.log(a);



//hoisting sets up memory space for variables and functions
