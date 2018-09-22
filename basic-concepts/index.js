function procedure() {
    let num = getRandomNumber();
        num = getPerfectSquaredNumber(num);
}

// impure function
function getRandomNumber(number){
    return Math.random() + number;
}

// pure function
function getPerfectSquaredNumber(number){
    return number * number;
}

// wrapped impure function into pure
function bar(x,y) {
    let z;

    foo(x);
    return [y,z];

    // impure function cuz it access outside parameters
    function foo(x) {
        y++;
        z = x * y;
    }
}