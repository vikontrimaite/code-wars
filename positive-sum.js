/* https://www.codewars.com/kata/5715eaedb436cf5606000381
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
    let sumPositiveNumbers = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > 0) {
         sumPositiveNumbers += arr[i]; 
      }
    }
    return sumPositiveNumbers;
  }

Test.assertEquals(positiveSum([1,2,3,4,5]),15);
Test.assertEquals(positiveSum([1,-2,3,4,5]),13);
Test.assertEquals(positiveSum([]),0);
Test.assertEquals(positiveSum([-1,-2,-3,-4,-5]),0);
Test.assertEquals(positiveSum([-1,2,3,4,-5]),9);