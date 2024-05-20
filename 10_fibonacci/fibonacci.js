const fibonacci = function(num) {
    if(+num < 0) {
        return 'OOPS';
    } else if(+num == 0) {
        return 0;
    } else if(+num == 1) {
        return 1;
    }
    let a = 0;
    let b = 1;
    for(let i = 2; i <= +num; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
