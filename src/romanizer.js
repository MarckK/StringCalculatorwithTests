
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
  return str
    .split(',')
    .map(Number);
};

var result2 = {};
result2.convert = function (str) {
  return str
    .split(',')
    .map(Number)
    .reduce(function(a, b) {
    return a + b;
  });
};

var regex = {};
regex.convert = function (str) {
  return str
    .split(/[,\n]/)
    .map(Number)
    .reduce(function(a, b) {
    return a + b;
  });
};

var regex2 = {};
regex2.convert = function (str) {
  return str
    .split(/\D/)
    .map(Number)
    .reduce(function(a, b) {
    return a + b;
  });
};


function sum(a, b) {
  return a + b;
}

var result1 = {};
result1.convert = function (str) {
  return str
    .split(/\D/)
    .map(Number)
    .reduce(sum);
};
