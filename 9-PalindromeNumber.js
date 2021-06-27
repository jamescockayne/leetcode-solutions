/*
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let normal = String(x); let reversed = ''; let i;
    for (i=0; i<normal.length; i++) reversed += normal[(normal.length-1-i)];
    if (normal == reversed) return true 
    else return false; 
};