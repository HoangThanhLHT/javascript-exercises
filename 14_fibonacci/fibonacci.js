const fibonacci = function(member) {
    member = parseInt(member);
    if (member == 0) {return 0};
    if (member < 0) return 'OOPS';
    let fibonacciNumber = [1, 1];
    if (member < 3) {return 1}
    for (let i = 3; i <= member; i ++) {
        fibonacciNumber.push(fibonacciNumber.at(-1) + fibonacciNumber.at(-2));
    }
    return fibonacciNumber.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
