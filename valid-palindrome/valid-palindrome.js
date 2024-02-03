/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let stringvalue = s.toLowerCase().replace(/[^a-z0-9]/g,"");
    return stringvalue === stringvalue.split("").reverse().join("");
};