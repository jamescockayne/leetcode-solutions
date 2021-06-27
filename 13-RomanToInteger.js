/*
Given a roman numeral, convert it to an integer.
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    var symbols = new Map([
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000]
    ])
    
    let count = 0, i=0
    while (i<s.length){
        if (symbols.has(s[i]+s[i+1])){
            count += symbols.get(`${s[i]+s[i+1]}`)
            i += 2
        } else if (symbols.has(s[i])){
            count += symbols.get(`${s[i]}`)
            i += 1
        }
    }
    return count
};