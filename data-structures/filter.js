function filter(array, predicateCallback) {
    let list = [];

    for (let idx = 0; idx <= array.length; idx++) {
        if (predicateCallback(array[idx])) {
            list.push( array[idx] );
        }
    }

    return list;
}