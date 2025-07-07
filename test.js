<<<<<<< HEAD
=======

// By: Mungu Jakisa Maurice
//     Kaasa Asthme
>>>>>>> 3d34c8f8abd54f69a21a6ae7a029e0ca0e7a7636
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
  it('multiply(1, 1) = 1', function(){
    assert.equal(multiply(1, 1), 1)
  });
  it('multiply(2, 2) = 4', function(){
    assert.equal(multiply(2, 2), 4)
  });
  it('multiply(3, 3) = 9', function(){
    assert.equal(multiply(3, 3), 9)
    
  });
  it('multiply(4, 4) = 16', function(){
    assert.equal(multiply(4, 4), 16)
  });

  it('should return 23 * 45 when multiplying 23 and 45', function(){
    assert.equal(multiply(23, 45), 23 * 45)
    
  })
})



