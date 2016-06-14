
describe('stringToArray', function() {
  it('converts string into array of strings', function() {
    expect(stringToArray.convert('0')).toEqual(['0']);
  });

  it('converts string into array of strings', function() {
    expect(stringToArray.convert('1,2')).toEqual(['1','2']);
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

describe('stringIntoArrayofNums', function() {
  it('converts string of numbers into array of numbers', function() {
    expect(stringIntoArrayofNums.convert('1,2')).toEqual([1, 2]);
  });
});

describe('StringIntoSum', function() {
  it('converts string of numbers into sum', function() {
    expect(StringIntoSum.convert('1,2')).toEqual(3);
  });
});

describe('StringIntoSum', function() {
  it('converts string of numbers into sum', function() {
    expect(StringIntoSum.convert('1,2,4,5,8')).toEqual(20);
  });
});

describe('dealingWithBasicDelimiter', function() {
  it('converts string of numbers into sum, and deals with exceptions', function() {
    expect(dealingWithBasicDelimiter.convert('1,2\n3\n4')).toEqual(10);
  });
});

describe('dealingWithAllNanDelimiters', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(dealingWithAllNanDelimiters.convert('1,2')).toEqual(3);
  });
});

describe('dealingWithAllNanDelimiters', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(dealingWithAllNanDelimiters.convert('1£2')).toEqual(3);
  });
});

describe('dealingWithAllNanDelimiters', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(dealingWithAllNanDelimiters.convert('1$1&1(1,1,%1)')).toEqual(6);
  });
});

describe('dealingWithAllNanDelimiters', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(dealingWithAllNanDelimiters.convert('1$11&1(1,1,%1)')).toEqual(16);
  });
});

describe('dealingWithAllNanDelimiters', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(dealingWithAllNanDelimiters.convert('1$%1&*(1,$£1,%1)')).toEqual(5);
  });
});

describe('refactoringReduce', function() {
  it('reduces string with exceptions, into sum', function() {
    expect(refactoringReduce.convert('%,2\n3\n4')).toEqual(9);
  });
});

describe('refactoringReduce', function() {
  it('converts string with exceptions, into sum', function() {
    expect(refactoringReduce.convert('%,2,\n3\n4!')).toEqual(9);
  });
});

describe('lessthan1000', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(lessthan1000.convert('1000,1')).toEqual(1);
  });
});

describe('lessthan1000', function() {
  it('converts string of numbers into sum, and deals with MORE exceptions', function() {
    expect(lessthan1000.convert('//[???]\n1???2???3')).toEqual(6);
  });
});
