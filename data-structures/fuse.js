const fuse = (list, functions) => list.map(compose(...functions));

let list = [1, 5, 7, 2, 9];

// Then...
let correctNumbers = fuse(
    // list to transform
    list,
    // functions to apply
    [double, addTwo, multiplyByFive]
);

// instead of
correctNumbers = list
    .map(double)
    .map(addTwo)
    .map(multiplyByFive)
;
