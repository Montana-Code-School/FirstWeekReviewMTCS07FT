var onlyEvenNumbers = require('./onlyEvenNumbers.js');
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//Write and export a javascript function that returns only the even numbers: onlyEvenNumbers given an array of integers

describe("onlyEvenNumbers", function () {
  it('checks if input is a number', function () {
    var val = onlyEvenNumbers(3);
    expect(val).to.be.a('number');
  });
  it('returns a number', function () {
     var val = onlyEvenNumbers([3, 5, 2]);
     expect(val).to.be.a('number');
   });
  it('only returns one', function () {
     var val = onlyEvenNumbers([3, 5, 2]);
     assert.equal(val, 1);
   });
   it('returns', function () {
    var val = onlyEvenNumbers([3, 4, 5, 2]);
    assert.equal(val, 2);
  });
});