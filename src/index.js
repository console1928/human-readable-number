module.exports = function toReadable(number) {
    let smallNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let decimals = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (number >= 0 && number < 20) {
        return smallNumbers[number];
    } else if (number >= 20 && number < 100) {
        return decimals[Math.floor(number / 10) - 2] + (number % 10 === 0 ? "" : ` ${smallNumbers[number % 10]}`);
    } else if (number >= 100 && number < 1000) {
        return `${smallNumbers[Math.floor(number / 100)]} hundred` + (number % 100 === 0 ? "" : ` ${toReadable(number % 100)}`);
    }
}
