var person = {
    firstname: "John",
    lastname: "Doe",
    getFullName: function() {
        var fullname =  this.firstname + " " + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) {
    console.log('logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-----------------');
}

var logPersonName = logName.bind(person);

logPersonName('en', 'es');

logName.call(person, 'fr', 'es');
logName.apply(person, ['en', 'ch']);



//function borrowing
var person2 = {
    firstname: "Jane",
    lastname: "Doe",
}

console.log(person.getFullName.apply(person2));

//function currying
function multiply(a,b) {
    return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(10));
