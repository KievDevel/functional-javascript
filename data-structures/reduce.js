function reduce(array, callback, initial = 0) {
    let result = initial;

    for (let idx = 0; idx <= array.length; idx++) {
        result = callback(array[idx], initial);
    }

    return result;
}

let multiply = reduce([1, 5, 7, 2], (x, y) => x * y, 1); // 70