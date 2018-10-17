function addTwo() {
    const [ args ] = arguments;
    return () => args[0] + args[1];
}

// waits for call
let x = addTwo(3,4);

// ... some code ...

// parameters where saved, but result was calculated only after call
x();	// 7