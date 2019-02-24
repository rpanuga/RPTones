function myFunction() {
    console.log('Function 1 was called succesfully.');
}

var myString = 'String!';

//Module exports allow other files to access it, similar to import/exports in OOP
module.exports.myFunction = myFunction;
module.exports.myString = myString;

