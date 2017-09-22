var onlyConsonants = require("./onlyConsonants.js");
var chai = require('chai');
chai.should();
var assert = chai.assert;
var expect = chai.expect;

//Write and export a javascript function that returns only the consonants in a string: onlyConsonants

describe("onlyConsonants()", function(){
  it ('returns a string', function(){
    var val = onlyConsonants("rainbow");
    assert.typeOf(val, 'string');
  });
  it ('does not return a number', function(){
    var val = onlyConsonants("mouses");
    assert.notTypeOf(val, "number");
  });
  // monkies
  // mnks
  it ('should return only consonants', function() {
    var val = onlyConsonants("monkies");
    assert.equal(val, "mnks");
  });
  it ('should return only consonants', function() {
    var val = onlyConsonants("CAts!  RUle!?");
    assert.equal(val, "CtsRl");
  });
});