//Write and export a javascript function that returns only the consonants in a string: onlyConsonants
var onlyConsonants = function (str) {
  var filter = "BbCcDdFfGgHhJjKkLlMmNnPpQqRrSsTtVvWwXxYyZz";
  var consStr = "";
  for (var i = 0; i < str.length; i++) {
    if (-1 !== filter.indexOf(str[i])) {
      consStr = consStr + str[i];
    }
  }
  return consStr;
}

module.exports = onlyConsonants;