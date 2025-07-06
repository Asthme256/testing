/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */
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
})

describe('multiply()', function(){
  it('should return 4 when multiplying 2 and 2', function(){
    assert.equal(multiply(2, 2), 4)
  })
})
// assert.equal(multiply(2, 2),4);