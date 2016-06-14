
describe('stringCal', function() {

  it('converts string into array of strings', function() {
    expect(stringCal.convert('0')).toEqual(['0']);
  });

  it('converts string into array of strings', function() {
    expect(stringCal.convert('1,2')).toEqual(['1','2']);
  });
});

describe('arrToNum', function() {

  it('converts array into array of numbers', function() {
    expect(arrToNum.convert(['0'])).toEqual([0]);
  });

  it('converts string into array of strings', function() {
    expect(arrToNum.convert(['1','2'])).toEqual([1, 2]);
  });
});

describe('arrReduce', function() {

  it('converts array of numbers into sum', function() {
    expect(arrReduce.convert([1, 2])).toEqual(3);
  });
});

describe('result', function() {

  it('converts array of numbers into sum', function() {
    expect(result.convert(['1','2'])).toEqual([3]);
  });
});

describe('result2', function() {

  it('converts array of numbers into sum', function() {
    expect(result2.convert(['1,2'])).toEqual([3]);
  });
});
