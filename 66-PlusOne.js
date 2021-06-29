/*
 * Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  for (let i=digits.length-1; i>-1; i--){
      digits[i]++
      if (digits[i] == 10){digits[i] = 0; continue}
      else {break}
  }
  if (digits[0] == 0){ digits[0]++; digits.push(0) }
  return digits
};