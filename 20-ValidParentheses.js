/*
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * @param {string} s
 * @return {boolean}
 */
 var last = function(array){
    return array[array.length - 1]
}

var isValid = function(s){
    let stack = []
    for (let i=0; i<s.length; i++){
        if (['(','{','['].includes(s[i])) {stack.push(s[i])}
        else if (s[i] == ')' && last(stack) !== '('){return false}
        else if (s[i] == '}' && last(stack) !== '{'){return false}
        else if (s[i] == ']' && last(stack) !== '['){return false}
        else {stack.pop()}
    }
    if (stack.length !== 0){return false}
    return true
};