const palindromes = function (text) {
    const alphanumeric = 'abcdefghigklmnopqrstuvwxyz0123456789'
    let temp = text.toLowerCase();
    let tempArr = temp.split('').filter(item => (alphanumeric.includes(item)) ? true : false);
    temp = tempArr.join('');
    let reversedTemp = temp.split('').reverse().join('');
    return temp == reversedTemp;
};

// Do not edit below this line
module.exports = palindromes;
