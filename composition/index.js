const compose = (...functions) => x => {
    return functions.reduceRight((acc, fn) => fn(acc), x)
};

const pipe = (...functions) => x => {
    return functions.reduce((acc, fn) => fn(acc), x)
};

/** Usage example */
function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

let f = compose(decrement,double,increment,half);
let p = pipe(half,increment,double,decrement);

// f(3) === p(3) === 4