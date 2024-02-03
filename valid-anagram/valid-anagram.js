/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    let value1 = {};
    let value2 = {};
    for(let char of s){
        value1[char] = (value1[char] || 0) + 1
    }
    for(let char of t){
        value2[char] = (value2[char] || 0) + 1
    }
    for(let char in value1){
        if(value1[char] !== value2[char]){
            return false;
        }
    }
    return true;
};