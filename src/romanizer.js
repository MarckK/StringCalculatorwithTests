
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

var result1 = {};
result1.convert = function (str) {
  var cleanString = str.replace(/[\D]/g, "");
  var arrayStrNums = cleanString.split('');
  var arrayNums = arrayStrNums.map(function(e) {
    return parseInt(e, 10);
  });
    var reduced = arrayNums.reduce(function(a, b) {
    return a + b;
  });
  return reduced;
};

// var result = {};
// result.convert = function (str) {
//   var arrayStrNums = str.split(',');
//   var arrayNums = arrayStrNums.map(function(e) {
//     return Number(e);
//   });
//   return arrayNums;
// };
//
// var result2 = {};
// result2.convert = function (str) {
//   var arrayStrNums = str.split(',');
//   var arrayNums = arrayStrNums.map(function(e) {
//     return parseInt(e, 10);
//   });
//     var reduced = arrayNums.reduce(function(a, b) {
//     return a + b;
//   });
//   return reduced;
// };
//
// var regex = {};
// regex.convert = function (str) {
//   var arrayStrNums = str.split(/[,\n]/);
//   var arrayNums = arrayStrNums.map(function(e) {
//     return parseInt(e, 10);
//   });
//     var reduced = arrayNums.reduce(function(a, b) {
//     return a + b;
//   });
//   return reduced;
// };
//
// var regex2 = {};
// regex2.convert = function (str) {
//   return str.replace(/[\D]/g, "");
// };
