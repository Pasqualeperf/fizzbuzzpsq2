const fizzBuzz = require('./fizz-buzz');

describe('fizzBuzz', () => {
    test('test 100 elements', () => {
        expect(fizzBuzz()).toStrictEqual(
            [
                1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
                7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
                13,     14,     'FizzBuzz', 16,     17,     'Fizz',
                19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
                'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
                31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
                37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
                43,     44,     'FizzBuzz', 46,     47,     'Fizz',
                49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
                'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
                61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
                67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
                73,     74,     'FizzBuzz', 76,     77,     'Fizz',
                79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
                'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
                91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
                97,     98,     'Fizz',     'Buzz'
              ]
        )
    })
})

test('add min number and max number and true or false', () => {
    expect(fizzBuzz(1, 100, true)).toStrictEqual(
        [
        'Small', 'Small', 'GG',  'Small', 'GG',  'GG',    'Boo',
        'Small', 'GG',    'GG',  'Foo',   'GG',  'Small', 'Boo',
        'FTW',   16,      17,    'GG',    19,    'GG',    'Boo',
        'Foo',   23,      'GG',  'GG',    26,    'GG',    'Boo',
        29,      'FTW',   31,    32,      'Foo', 34,      'Boo',
        'GG',    37,      38,    'GG',    'GG',  41,      'Boo',
        43,      'Foo',   'FTW', 46,      47,    'GG',    'Boo',
        'GG',    'GG',    52,    53,      'GG',  'Foo',   'Boo',
        'GG',    58,      59,    'FTW',   61,    62,      'Boo',
        64,      'GG',    'Foo', 67,      68,    'GG',    'Boo',
        71,      'GG',    73,    74,      'FTW', 76,      'FooBoo',
        'GG',    79,      'GG',  'GG',    82,    83,      'Boo',
        'GG',    86,      'GG',  'Foo',   89,    'FTW',   'Boo',
        92,      'GG',    94,    'GG',    'GG',  'Big',   'Boo',
        'Foo',   'GG'
        ]
    );
  });