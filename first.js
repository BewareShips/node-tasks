/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const sumaDvokhChysel = function (nums, target) {
   const objValues = {};
   for (let i = 0; i < nums.length; i++) {
      const curNumber = nums[i];
      const diff = target - nums[i];
      if (objValues.hasOwnProperty(diff)) {
         return [objValues[diff], i];
      } else {
         objValues[curNumber] = i;
      }
   }
};
