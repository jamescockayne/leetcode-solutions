/* Given a signed 32-bit integer x, return x with its digits reversed. 
If reversing x causes the value to go outside the 32-bit integer range, then return 0.
 */

var reverse = function(x) {
    let minus = false
    
    if (x<0) {
        x = Math.abs(x)
        minus = true
    }
    
    let original = x.toString()
    let digit = 0
    let result = 0
    
    while (digit < original.length){
        result += Number(original[digit]) * Math.pow(10, digit)
        digit ++
    }
    
    if (result > 2147483647){ return 0}
    
    if (minus) {result -= 2*result}
    
    return result
};