
# Functional programming in JavaScript with examples

Can be used as cheat-sheet or quick reminder of main principles.

Contents:
1. Imperative vs declarative
2. Basic concepts
3. Point-free style
4. Composition
5. Immutability
6. Closure
7. Referential transparency, memoization

## 1. Imperative vs declarative

Imperative = **how**; list of instructions how to achieve result.

Declarative = **what**; only declaration of expected result

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/declarative-imperative/index.js)

## 2. Basic concepts

Why functional programming? It's provable by math and readable. 
But remember not go too far with it until you'll be confident in what you're doing.

**TODO:** explicit vs implicit

**Procedure** - collection of operations; 
In simple words: functions return a value, whereas procedures don't.

**Pure functions** - functions with no side effects;
can't access parameters outside, given same input -> give same output.

**Predicate function** - function that return true/false result.

You can wrap functions - so impure function will be hidden into pure function

Function with 1 parameter named unary function, with 2 - binary, if more - anyary function.

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/basic-concepts/index.js)

## 3. Point-free style

Point is an input to the function. 
Point-free style is mapping between parameter and passing function.

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/point-free-style/index.js)

## 4. Composition

**Composition** - output of one function becomes an input to another.

**Pipe** - pipe as functional composition.

Lodash has built-in `compose()`, `pipe()` and much more. [Lodash FP docs](https://github.com/lodash/lodash/wiki/FP-Guide).

Note: much easier to compose unary functions

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/composition/index.js)

## 5. Immutability

**Immutability** - value cannot be *mutated* or *reassigned*.

*Note*: JS const does not provide value immutability, only immutable bindings. 
Object or array can become immutable with `Object.freeze()`, but it freezes only top level of the object.

Useful link: [Immutable.js](https://facebook.github.io/immutable-js/)

## 6. Closure

Closure - is when a function "remembers" the variables around it even when that function is executed elsewhere; 
Closure is a record storing a function together with an environment.

Prevents from being garbage collected.

If function returns another function that makes some calculations -> calculations can be delayed/postponed until they'll become necessary -> leads to lazy algorithms (vs eager).

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/closure/index.js)

## 7. Referential transparency, memoization

Referential transparency - function call can be replaced with it's return value and this won't affect program behavior.

Pure function is a function that has referential transparency.
Matters when you read and need to trust your code.

Memoize caches the return values of the function, so if the function is called again with the same arguments, 
Memoize returns the cached value, instead of computing the value again. Only pure functions can be memoized.

Memoization is an example of referential transparency; performance technique.

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/referential-transparency/index.js)

