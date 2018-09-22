function foo(arg) {}

// "point" call
foo(function(point) {
    return bar(point);
});

// point-free style
foo(bar);

// point = txt
function output(txt) {
    console.log(txt);
}

// point-free
let output = console.log.bind(console);
output('Hello world');


/* Example that can appear in application */

function isShortEnough(str) {
    return str.length <= 5;
}

function when(predicate) {
    return function (fn) {
        return function (args) {
            if (predicate(args)) {
                return fn(args);
            }
        }
    }
}

when(isShortEnough)(output)('hello'); // hello