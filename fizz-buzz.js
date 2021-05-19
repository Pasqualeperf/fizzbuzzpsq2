module.exports = fizzBuzz;

function fizzBuzz(min, max, invert) {
    let result = [];

    let boo = "Boo";
    let foo = "Foo";

    if (invert) {
        boo = "Foo";
        foo = "Boo";
    }

    for (let i = min; i <= max; i++) {

        if (i % 7 === 0 && i % 11 === 0) {
            result.push("FooBoo");
        }
        else if (i % 11 === 0) {
            result.push(boo);
        }
        else if (i % 7 === 0) {
            result.push(foo);
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            result.push("FTW");
        }
        else if (i % 3 === 0 || i % 5 === 0) {
            result.push("GG");
        }
        else if (i % 5 === 0) {
            result.push("Buzz");
        }
        else if (i % 3 === 0) {
            result.push("Fizz");
        }
        else if (i > 95) {
            result.push("Big");
        }
        else if (i < 16) {
            result.push("Small");
        }
        else {
            result.push(i);
        }
    }
    console.log(result);
    return result;
}

// params: [min-number : number, max-number : number, invert? : boolean]

fizzBuzz(1, 100, true);