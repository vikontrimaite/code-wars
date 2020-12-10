/* https://www.codewars.com/kata/57cc975ed542d3148f00015b 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not. */

function check(a, x) {
    if (a.indexOf(x) === -1) {
      return false;
    } else {
      return true;
    }
}

Test.describe("Basic tests",_=>{
    Test.assertEquals(check([66, 101], 66), true);
    Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
    Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
    Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
    })