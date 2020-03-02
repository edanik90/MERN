// 1
console.log(hello);                                   
var hello = 'world'; // prints undefined                                 

// 2
var needle = 'haystack';
test();// calls function below
function test(){
    var needle = 'magnet';
    console.log(needle); // prints 'magnet'
}

// 3
var brendan = 'super cool'; // sets brendan as a global variable to 'super cool'
function print(){
    brendan = 'only okay';
    console.log(brendan); // would print 'only okay', but this function never gets called
}
console.log(brendan); // prints 'super cool'

// 4
var food = 'chicken';
console.log(food); // prints 'chicken'
eat(); // calls function below
function eat(){
    food = 'half-chicken';
    console.log(food); // prints 'half-chicken'
    var food = 'gone'; // changes food to 'gone'
}

// 5
// mean(); // will try to run mean function, but mean is a variable, so we will get an error
console.log(food); // prints undefined
var mean = function() { // sets mean to whatever will return from the function bellow
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food); 
}
console.log(food); 

// 6
console.log(genre); //undefined
var genre = "disco";
rewind(); // calls function bellow
function rewind() {
    genre = "rock";
    console.log(genre); // prints "rock"
    var genre = "r&b";  
    console.log(genre); // prints "r&b"
}
console.log(genre); // prints "disco"

// 7
dojo = "san jose"; 
console.log(dojo); // prints "san jose"
learn(); // calls function bellow
function learn() {
    dojo = "seattle";
    console.log(dojo); // prints "seattle"
    var dojo = "burbank";
    console.log(dojo); // prints "burbank"
}
console.log(dojo); // prints "san jose"

// 8
console.log(makeDojo("Chicago", 65)); // calls function makeDojo; makes new object
         // with name "Chicago" and 65 students, and sets its property .hiring to true 
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){ // calls function makeDojo; makes new object
    // with name "Berkeley" and 0 students
    const dojo = {}; // creates dojo as an immutable object
    dojo.name = name; // sets dojo.name property to parameter name
    dojo.students = students; // sets dojo.students property to parameter students
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; // this will cause an error, since dojo is constant object and cannot be changed to a string
    }
    return dojo;
}