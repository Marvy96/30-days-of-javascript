console.log('Hello, world')


console.log('5-3')
 

alert("i dey o")

let x = 4;

console.log(x)


let y=false;

console.log(typeof y);

console.log(typeof 5);

console.log(typeof undefined);

console.log(typeof null);

console.log(typeof "marvy");

//today is a great day
//we could call this a single line commment
/* this is a double line or multiple line comment
and this looks so good
and am so loving it*/

let firstName = 'Marvellous',
lastName = 'Ezeorba',
country = 'Nigeria',
state = 'Enugu',
Age = 25,
isMarried = false,
UNN = 'university, of, nigeria, Nsukka',
University = 'UNN'


console.log (firstName, lastName, country, state, Age, isMarried, University)


const gravity = 9.81 //value of gravity in m/s2
//const PI = 3.14 //value of pi
const boilingPoint = 100 //boiling point of water in oC


console.log(Age, gravity, boilingPoint)

let Name = 'Anam',
Job = 'teacher',
live = 'Enugu'

console.log(Name, Job, live)

let word = 'javascript'


let numOne = 3
let numTwo = 3

console.log(numOne == numTwo) 

let py = 'python'
let jv = 'javascript'

console.log(py==jv)

let nums =[1,2,3,4,5]
nums[3]= 10

console.log (nums)


const PI = Math.PI

console.log (PI)


// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

let rdN = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTen = rdN * 11

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99

let rNRTF = Math.floor(numBtnZeroAndTen)
console.log(rNRTF)    // this gives between 0 and 10
