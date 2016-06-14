
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

describe('result1', function() {
  it('converts string with exceptions, into string of numbers', function() {
    expect(result1.convert('%,2\n3\n4')).toEqual(9);
  });
});

describe('result1', function() {
  it('converts string with exceptions, into string of numbers', function() {
    expect(result1.convert('%,2,\n3\n4!')).toEqual(9);
  });
});

// describe('result', function() {
//   it('converts string of numbers into array of numbers', function() {
//     expect(result.convert('1,2')).toEqual([1, 2]);
//   });
// });

// describe('result2', function() {
//   it('converts string of numbers into sum', function() {
//     expect(result2.convert('1,2')).toEqual(3);
//   });
// });
//
// describe('result2', function() {
//   it('converts string of numbers into sum', function() {
//     expect(result2.convert('1,2,4,5,8')).toEqual(20);
//   });
// });

// describe('regex', function() {
//   it('converts string into array of strings, and deals with exceptions', function() {
//     expect(regex.convert('1,2\n3\n4')).toEqual(10);
//   });
// });
//
// describe('regex2', function() {
//   it('converts string with exceptions, into string of numbers', function() {
//     expect(regex2.convert('%,2\n3\n4')).toEqual('234');
//   });
// });
