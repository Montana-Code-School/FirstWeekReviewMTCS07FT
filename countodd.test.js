var countOdd = require("./countodd.js");
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

/*Use TDD with test scripts for each of the following exercises that will all get run with "npm test":

Write and export a javascript function that counts the number of odd numbers: countOddNumbers given an array of integers*/
describe('countOdd(),', function(){
  it("returns a number", function(){
    var val = countOdd([7897, 475, 9, 4, 12]);
    expect(val).to.be.a('number');
  });
  it('returns the number of odd numbers', function(){
    var val = countOdd([53, 534, 2, 0]);
    expect(val).to.equal(1);
  });
  it("works with negative numbers", function(){
    var val = countOdd([5, -5, 2, -2]);
    expect(val).to.equal(2);
  });
});