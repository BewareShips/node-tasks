/**
 * @param {number[]} prices
 * @return {number}
 */
var maxPrybutok = function (prices) {
   let minPrice = prices[0];
   let profit = 0;

   for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
         minPrice = prices[i];
      }
      if (prices[i] - minPrice > profit) {
         profit = prices[i] - minPrice;
      }
   }

   return profit;
};

console.log(maxPrybutok([7, 3, 15, 1, 5, 3, 6, 4, 8]));
