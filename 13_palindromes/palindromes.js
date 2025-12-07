const palindromes = function (givenString) {
    let cleanString = givenString.toLowerCase();
    const removedLetter = [' ', '!', '.', ','];
    for (let char of removedLetter) {
        let text = cleanString.split(char).join('');
        cleanString = text
    };
    return cleanString == cleanString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
