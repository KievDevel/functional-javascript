/* Referential transparency */

function generateID(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

assertEqual(generateID(1000) === generateID(1000)); // false -> function is not referentially transparent

function generateIDbyKey(key) {
    return key + '0000';
}

assertEqual(generateIDbyKey(1000) === generateIDbyKey(1000)); // true -> function is referentially transparent
assertEqual('10000000' === '10000000'); // replacing with return value will give same result