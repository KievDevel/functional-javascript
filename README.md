
# Functional programming in JavaScript with examples

Can be used as cheat-sheet or quick reminder of main principles.

Contents:
1. Imperative vs declarative
2. Basic concepts
3. Point-free style
4. Composition

## Imperative vs declarative

Imperative = **how**; list of instructions how to achieve result.

Declarative = **what**; only declaration of expected result

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/declarative-imperative/index.js)

## Basic concepts

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

## Point-free style

Point is an input to the function. 
Point-free style is mapping between parameter and passing function.

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/point-free-style/index.js)

## Composition

**Composition** - output of one function becomes an input to another.

**Pipe** - pipe as functional composition.

Lodash has built-in `compose()`, `pipe()` and much more. [Lodash FP docs](https://github.com/lodash/lodash/wiki/FP-Guide).

Note: much easier to compose unary functions

[Example code](https://github.com/KievDevel/functional-javascript/tree/master/composition/index.js)

## Immutability

**Immutability** - value cannot be *mutated* or *reassigned*.

*Note*: JS const does not provide value immutability, only immutable bindings. 
Object or array can become immutable with `Object.freeze()`, but it freezes only top level of the object.

Useful link: [Immutable.js](https://facebook.github.io/immutable-js/)

## Closure

Closure - is when a function "remembers" the variables around it even when that function is executed elsewhere; 
Closure is a record storing a function together with an environment.

Prevents from being garbage collected.

If function returns another function that makes some calculations -> calculations can be delayed/postponed until they'll become necessary -> leads to lazy algorithms (vs eager).