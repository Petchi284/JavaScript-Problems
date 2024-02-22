/**
 * @param {number[]} nums
 * @return {string}
 */
  var largestNumber = function (nums) {
        var s = nums.map(String);
        s.sort(function (f, s) {
          var value1 = f + s;
          var value2 = s + f;
          if (value1 === value2) {
            return 0;
          }
          return value1 > value2 ? -1 : 1;
        });
        if (s[0] === "0") {
          return "0";
        }
        return s.join("");
      };