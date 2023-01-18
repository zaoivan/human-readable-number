module.exports = function toReadable(number) {
    let readableNumber = '';
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const secondTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numberLength = number.toString().length;

    switch (numberLength) {
        case 1:
            readableNumber = ones[number];
            break;
        case 2:
            const index = number % 10;
            let firstPart = '';
            let secondPart = '';
            if (number < 20) {
                firstPart = secondTen[index];
            } else {
                firstPart = tens[Math.trunc(number / 10)];
                if (number % 10 === 0) {
                    secondPart = '';
                } else {
                    secondPart = ' ' + ones[index];
                }
            }
            readableNumber = firstPart + secondPart;
            break;
        case 3:
            const indexOfHundreds = Math.trunc(number / 100);
            const firstPartOfReadNum = ones[indexOfHundreds] + ' hundred';
            const numberInSecondPart = number - indexOfHundreds * 100;
            const indexOfOnes = numberInSecondPart % 10;
            const indexOfTens = Math.trunc(numberInSecondPart / 10);
            let secondPartOfReadNum = '';
            if (numberInSecondPart === 0) {
                secondPartOfReadNum = '';
            } else if (numberInSecondPart > 0 && numberInSecondPart < 10) {
                secondPartOfReadNum = ' ' + ones[indexOfOnes];
            } else if (numberInSecondPart >= 10 && numberInSecondPart < 20) {
                secondPartOfReadNum = ' ' + secondTen[indexOfOnes];
            } else {
                if (numberInSecondPart % 10 === 0) {
                    secondPartOfReadNum = ' ' + tens[indexOfTens];
                } else {
                    secondPartOfReadNum = ' ' + tens[indexOfTens] + ' ' + ones[indexOfOnes];
                }
            }
            readableNumber = firstPartOfReadNum + secondPartOfReadNum;
            break;
    }
    return readableNumber;
}