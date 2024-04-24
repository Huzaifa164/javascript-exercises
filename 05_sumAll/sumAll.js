const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    }
    let count = 0;
    let fi = Math.min(num1, num2);
    let li = Math.max(num1, num2);
    for(let i = fi; i <= li; i++) {
        count += i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
