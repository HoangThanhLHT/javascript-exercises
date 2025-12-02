const removeFromArray = function(...args) {
    let returnArray = args[0]
    for (let i = 1; i < args.length; i++) {
        let removeItem = args[i]
            while (returnArray.includes(removeItem)) {
                returnArray.splice(returnArray.indexOf(removeItem), 1)
            }
        }
    return returnArray
};

// Do not edit below this line
module.exports = removeFromArray;
