
var stringToArray = {};
stringToArray.convert = function (str) {
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

var stringIntoArrayofNums = {};
stringIntoArrayofNums.convert = function (str) {
  return str
    .split(',')
    .map(Number);
};

var StringIntoSum = {};
StringIntoSum.convert = function (str) {
  return str
    .split(',')
    .map(Number)
    .reduce(function(a, b) {
    return a + b;
  });
};

var dealingWithBasicDelimiter = {};
dealingWithBasicDelimiter.convert = function (str) {
  return str
    .split(/[,\n]/)
    .map(Number)
    .reduce(function(a, b) {
    return a + b;
  });
};

var dealingWithAllNanDelimiters = {};
dealingWithAllNanDelimiters.convert = function (str) {
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

var refactoringReduce = {};
refactoringReduce.convert = function (str) {
  return str
    .split(/\D/)
    .map(Number)
    .reduce(sum);
};

function no1000(value) {
  return value < 1000;
}

var lessthan1000 = {};
lessthan1000.convert = function (str) {
  return str
    .split(/\D/)
    .map(Number)
    .filter(no1000)
    .reduce(sum);
};
