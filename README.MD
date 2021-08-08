# Simple Random Stuff
This package helps you to generate common random data(number, day, month, prime number, dice etc) quickly 😀

### Features - 
1. 0 Dependencies
1. Simple Number Generator - Ranged, Prime Number
2. Random Day
3. Random Month
4. Coin Toss
5. Dice Roll
6. Rock, Paper, Scissor 😀

### Installation - 

1. NPM - 
```
npm i simple-random-stuff
```


### Usage - 

```javascript
//named import
let {numRandomizer, simpleRandomizer, getDay} = require('simple-random-stuff')
//or whole import
let radomizers = require('simple-random-stuff')
// or you can use import as well(react, vue, angular etc)
import randomizers from 'simple-random-stuff'

//getting ranged random number
console.log(numRandomizer(5,20))  // 7

//getting simple random number, here 100 is the the upper range
console.log(simpleRandomizer(100)) // 57

//getting a random day
console.log(getDay())  // Monday

//getting a random month
console.log(radomizers.getMonth()) // July

//getting a coin toss result
console.log(radomizers.coinToss()) // Head

//getting a dice roll result
console.log(radomizers.diceRoll()) // 5

//getting a random prime number
console.log(radomizers.getPrimeNumber(50,100, array=false)) // 53

//getting all the random prime numbers in a range
console.log(radomizers.getPrimeNumber(50,100, array=true)) // [53, 67 ....]
````

**Thanks for your time, please give a star to this project 😁**