/*
 * Given a string s and an integer array indices of the same length.
 * The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    
    let restored = new Array(s.length)
    for (let i=0; i<s.length; i++){
        restored[indices[i]] = s[i]
    }

    return restored.toString().replace(/,/g,'')
    
};