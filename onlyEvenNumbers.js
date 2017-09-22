//Write and export a javascript function that returns only the even numbers: onlyEvenNumbers given an array of integers

var onlyEvenNumbers = function(num) {
  var evenNumberCount = 0;
  for (var i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      evenNumberCount++;
    }
  }
  return evenNumberCount;
}

module.exports = onlyEvenNumbers;
