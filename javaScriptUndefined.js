function checkArgument(valueOfA) {
    if (valueOfA === undefined) {
        console.log('valueOfA is undefined')
    } else {
        console.log('valueOfA is defined', valueOfA)
    }
};

// console.log(a); // will through error for var is not defined 
var a;
console.log(a); // will log undefind because that is the inital value

checkArgument(a); // will log 'Argument is undefined' 

if (a === undefined) {
    console.log('Argument is undefined')
} else {
    console.log('Argument is defined', a)
}

var a = 'sooo cool'

checkArgument(a); // will log 'Argument is 'Argument is defined sooo cool' 
