module.exports = function reverse (n) {
    let str = String(n).split('');
    let arr = [];

    for(let i = str.length - 1; i >= 0; i-- ) {
        if(str[i] !== '-') {
            arr.push(str[i])
        }
    }

    return  parseFloat( arr.join(''));
};
