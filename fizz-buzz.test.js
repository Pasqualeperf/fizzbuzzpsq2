const { array } = require('yargs');
const fizzBuzz = require('./fizz-buzz');

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