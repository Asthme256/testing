/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
// eslint-disable @typescript-eslint/no-require-imports
// eslint-disable no-undef
// function multiply(a, b){
//   return a * b;
// }

// function assertEqual(actual, expected){
//   if (actual == expected){
//     return "all tests passed"
//   }
// }
// assertEqual(multiply(1, 1), 1);

const {assert} = require('chai');
const multiply = require('./multiply.js').default;

describe('multiply()', function(){
  it('should return 1 when multiplying 1 and 1', function(){
    assert.equal(multiply(1, 1), 1)
  })
  it('should return 4 when multiplying 2 and 2', function(){
    assert.equal(multiply(2, 2), 4)
  })
  it('should return 9 when multiplying 3 and 3', function(){
    assert.equal(multiply(3, 3), 9)
    
  })
  it('should return 16 when multiplying 4 and 4', function(){
    assert.equal(multiply(4, 4), 16)
    
  })
  it('should return 23 * 45 when multiplying 23 and 45', function(){
    assert.equal(multiply(23, 45), 23 * 45)
    
  })
})


// assert.equal(multiply(3, 3), 9);