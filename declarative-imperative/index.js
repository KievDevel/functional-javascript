// imperative example
function double(array) {
    let doubled = [];

    for (let i = 0; i < array.length; i++){
        doubled.push(array[i] * 2)
    }

    return doubled;
}

// declarative example
function double(array) {
    return array.map((number) => number * 2)
}