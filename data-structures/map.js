function map(array, callback) {
    let list = [];

    for (let idx = 0; idx <= array.length; idx++) {
        list.push( callback(array[idx]) );
    }

    return list;
}