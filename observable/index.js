let observable = new Observable();

// add random number every second
setInterval(() => observable.push(Math.random()), 1000);

// triple observable values when they pushed
let subscriber = observable.map(value => value * 3);

// on value pushed - show result
subscriber.forEach(value => console.log(value));