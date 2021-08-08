let simpleRandomizer = (length = 10) => {
    return Math.floor(Math.random() * length)
}


let numRandomizer = (min = 0, max = 10) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

let getPrimeNumber = (min = 1, max = 100, array=false) => {
    let getPrime = () => {
        const result = Array(max + 1)
            .fill(0)
            .map((_, i) => i);
        for (let i = 2; i <= Math.sqrt(max + 1); i++) {
            for (let j = i ** 2; j < max + 1; j += i) delete result[j];
        }
        return Object.values(result.slice(Math.max(min, 2)));
    }

    if(array){
        return getPrime()
    }
    return getPrime()[simpleRandomizer(getPrime().length)]
}

let getDay = () => {
    let days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    return days[Math.floor(Math.random() * days.length)]
}

let getMonth = () => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[Math.floor(Math.random() * months.length)]
}

let coinToss = () => {
    let coin = ["Head", "Tail"]
    return coin[Math.floor(Math.random() * coin.length)]
}

let rockPaper = () => {
    let rockPaper = ["Rock", "Paper", "Scissor"]
    return rockPaper[Math.floor(Math.random() * rockPaper.length)]
}


let diceRoll = () => {
    let dice = [1, 2, 3, 4, 5, 6]

    return dice[Math.floor(Math.random() * dice.length)]
}


module.exports = {
    numRandomizer: numRandomizer,
    simpleRandomizer: simpleRandomizer,
    getDay: getDay,
    getMonth: getMonth,
    coinToss: coinToss,
    rockPaper: rockPaper,
    diceRoll: diceRoll,
    getPrimeNumber: getPrimeNumber,
}