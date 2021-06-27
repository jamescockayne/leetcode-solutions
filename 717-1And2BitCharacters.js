/*
 * Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.
 * @param {number[]} bits
 * @return {boolean}
 */

 var isOneBitCharacter = function(bits) {
    let stack = new Array(bits.length)
    let i = 0
    while (i<bits.length){
        if (bits[i] == 0){stack.push(1); i++}
        else {(stack.push(2)); i += 2}
    }
    return (stack[stack.length - 1] == 2) ?  false : true 
};