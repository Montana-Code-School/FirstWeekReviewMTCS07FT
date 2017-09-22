var countOdd = function(num){
  var counter = 0;
  num.forEach(function(e){
    if(e % 2 !== 0){
      counter++;
    }
  });
  return counter;
}

module.exports = countOdd;