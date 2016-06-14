
describe('stringCal', function() {
  it('converts string into array of strings', function() {
    expect(stringCal.convert('0')).toEqual(['0']);
  });

  it('converts string into array of strings', function() {
    expect(stringCal.convert('1,2')).toEqual(['1','2']);
  });
});

describe('arrToNum', function() {
  it('converts array of strings into array of numbers', function() {
    expect(arrToNum.convert(['0'])).toEqual([0]);
  });

  it('converts array of strings into array of numbers', function() {
    expect(arrToNum.convert(['1','2'])).toEqual([1, 2]);
  });
});

describe('arrReduce', function() {
  it('reduces array of numbers into sum', function() {
    expect(arrReduce.convert([1, 2])).toEqual(3);
  });
});

describe('result', function() {
  it('converts string of numbers into array of numbers', function() {
    expect(result.convert('1,2')).toEqual([1, 2]);
  });
});

describe('result2', function() {
  it('converts string of numbers into sum', function() {
    expect(result2.convert('1,2')).toEqual(3);
  });
});

describe('result2', function() {
  it('converts string of numbers into sum', function() {
    expect(result2.convert('1,2,4,5,8')).toEqual(20);
  });
});

describe('regex', function() {
  it('converts string of numbers into sum, and deals with exceptions', function() {
    expect(regex.convert('1,2\n3\n4')).toEqual(10);
  });
});

describe('regex2', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(regex2.convert('1,2')).toEqual(3);
  });
});

describe('regex2', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(regex2.convert('1£2')).toEqual(3);
  });
});

describe('regex2', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(regex2.convert('1$1&1(1,1,%1)')).toEqual(6);
  });
});

describe('regex2', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(regex2.convert('1$11&1(1,1,%1)')).toEqual(16);
  });
});

describe('regex2', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(regex2.convert('1$%1&*(1,$£1,%1)')).toEqual(5);
  });
});

describe('result1', function() {
  it('reduces string with exceptions, into sum', function() {
    expect(result1.convert('%,2\n3\n4')).toEqual(9);
  });
});

describe('result1', function() {
  it('converts string with exceptions, into sum', function() {
    expect(result1.convert('%,2,\n3\n4!')).toEqual(9);
  });
});
