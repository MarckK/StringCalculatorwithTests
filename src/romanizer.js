
var stringCal = {};

stringCal.convert = function (str) {
  var arrayStrNums = str.split(',');
  return arrayStrNums;
};

var arrToNum = {};
arrToNum.convert = function(arr) {
  var arrayNums = arr.map(function(e) {
    return parseInt(e, 10);
  });
  return arrayNums;
};

var arrReduce = {};
arrReduce.convert = function(arr) {
  var reduced = arr.reduce(function(a, b) {
    return a + b;
  });
  return reduced;
};

var result = {};
result.convert = function (str) {
  var arrayStrNums = str.split(',');
  var arrayNums = arrayStrNums.map(function(e) {
    return Number(e);
  });
  return arrayNums;
};

var result2 = {};
result2.convert = function (str) {
  var arrayStrNums = str.split(',');
  var arrayNums = arrayStrNums.map(function(e) {
    return parseInt(e, 10);
  });
    var reduced = arrayNums.reduce(function(a, b) {
    return a + b;
  });
  return reduced;
};
