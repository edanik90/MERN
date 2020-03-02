// 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars // stores first element of 'cars'
const [ ,otherRandomCar ] = cars // skips first element of array 'cars' and stores second
//Predict the output
console.log(randomCar) // prints "Tesla"
console.log(otherRandomCar) // prints "Mercedes"

// 2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee; // assigns otherName to "employee" object's "name" property
// //Predict the output
// console.log(name); // will cause an error, because name is not defined
// console.log(otherName); // would print "Elon"

// 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person; // creates "password" property of object "person" 
        // and sets it's value to "hashedPassword" constant 
//Predict the output
console.log(password); // prints '12345'
console.log(hashedPassword); // prints "undefined", because property "password" of object "person" is not set to anything 

// 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // saves numbers[1], which is 2 to "first" constant
const [,,,second] = numbers; // saves numbers[4], which is 5 to "second" constant
const [,,,,,,,,third] = numbers; // saves numbers[9], which is 2 to "third" constant
//Predict the output
console.log(first == second); // prints false, because 2 != 5
console.log(first == third); // prints true, because 2 == 2

// 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // saves first pair of key:value of object "lastTest"  to constant called "key"
const { secondKey } = lastTest; // saves first pair of key:value of object "lastTest"  to constant called "secondKey"
const [ ,willThisWork] = secondKey;// saves secondKey[1], which is 5 to constant called "willThisWork"
console.log(key); // prints value of "key", which is "value"
console.log(secondKey); // prints value of "secondKey", which is: 1, 5, 1, 8, 3, 3
console.log(secondKey[0]); // prints first element of an array, 1
console.log(willThisWork); // prints 5
