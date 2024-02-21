/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 var value = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x)
       if (value > Math.pow(2, 31) - 1 || value < -Math.pow(2, 31)) {
          return 0;
        }
          return value;
};