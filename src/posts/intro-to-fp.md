---
path: "/blog/intro-to-fp"
date: "2018-06-15"
title: "Intro to Functional Programming"
tags: "Functional Programming, Currying, Partial Application, Pure Functions" 
---

Functional programming has become more and more relevant in todays web. At Paypal, we’ve begun to embrace it, and are already seeing benefits in a number of ways. Now while, we’ve begun diving into some more “advanced” topic like lenses to handle our deeply nested data structures, its important that we have an understanding of the fundamentals.

## What is Functional Programming

Depending on who you ask you may get slightly different answers. Functional Programming can be described as a programming paradigm modeled on mathematical functions. Simply put, we use functions to pass around data, manipulate data, and compose functions with more functions to enhance the work we are doing. In Javascript, functions are first-class citizens, which makes passing functions as arguments possible, and valuable. 
You may often hear in functional programming we avoid side effects, and I don’t really like this take. In functional programming we have ways of handling side effects to maintain purity, and composition. However, I won’t be discussing some of these techniques here. Lets dive into some basics.

## Pure Functions

![Photo by [chuttersnap](https://unsplash.com/@chuttersnap?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/12000/0*gYATtmbESOuR1hNM)*Photo by [chuttersnap](https://unsplash.com/@chuttersnap?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Pure functions are the essence of what we do. A pure function is simply a function that given the same input, will **always **return the same output, and has no side effects. A side effect can be thought of anything that changes state outside of the function. A network request, disk write, variable mutation in a higher scope, setting a value in an already defined object, etc. A simple example for us to digest:
```js
    function add(a, b) {
      return a + b
    }
    add(1, 2) // 3
    add(1, 2) // 3
```
This is a super simple example. Given the same input we will always get the same output, we also are not changing anything outside of the function. Pure functions will always have something returned. This enables us to have easy to unit test code, that is deterministic. In other words, we can test and predict what our code will do with greater ease. When we don’t have to keep track of state outside of the function, as you may have to do in a larger class, its easy to follow the codes output.
```js
    const users = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
      }]

    function formatUserData (users) {
        return users.reduce(
               (acc, { name, email, username, address }) => 
                   acc.concat({ name, username, email, address })
               ,[])
    }
```
## **Composition**

![Photo by [Matthew Henry](https://unsplash.com/@matthewhenry?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)](https://cdn-images-1.medium.com/max/10754/0*NCNaBh3bs-5VUqiQ)*Photo by [Matthew Henry](https://unsplash.com/@matthewhenry?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)*

Composition is a **core** programming principle. If you have written any code before, you’ve almost definitely utilized composition. There are several different kinds of composition, of which I won’t dive into today, but lets get the basic idea down. Composition is a way to combine data into more complex data. We use function composition (the application of one functions result to another) often in functional programming. For example:
```js
    function inc(a) {
     return a + 1
    }

    function double(a) {

      return a * 2;
    }

    inc(double(2)); // 5
```
You’ve probably at some point written code like this, we all have. It’s fine. However, it can get messy if we are doing this with multiple functions. Perhaps we store the result of double in a variable, and pass that new variable into inc . But this results in a bit of a mess, as we are constantly assigning new variables just to keep the return value of one to pass to another.

Let’s use compose .
```js
    const compose = (...args) => 
        start => args.reduceRight((acc, fn) => fn(acc), start);
```
Compose takes n number of arguments. We are utilizing ES6 rest parameter here to gather the arguments. It then returns a function, which accepts start and returns the result of reducing from the right (same as reduce but starts on the end of the array ) and applying each function passed, to the accumulator.

    const addOne = a => a + 1;
    const double = a => a * 2;

    compose(addOne, double)(2); // 5

Remember, we read this from right to left, just like if we called it like:

    addOne(double(2));

Or if you remember from algebra `f(g(x))`. Sorry I got mathy.

So now we’ve seen how we can compose functions together with a nifty compose utility. You don’t have to write this function out all the time, its available in your favorite utility library like `lodash` and `ramda`.

Building on our early example data, lets use compose to form some new data.

    const users = [{
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
        }
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
      }]

    const compose = (...args) => x => args.reduceRight((acc, fn) => fn(acc), x);

    function formatUserData(users) {
        return users.reduce((acc, { name, email, username, address }) =>

                    acc.concat({ name, username, email, address }),
               []);
    }

    const upperCaseName = 
               users => users.reduce(
                 (acc, { name, ...rest }) => [
                      ...acc, { 
                      ...rest, 
                      name: name.toUpperCase()
                     }
                ]),[]);

    const trimZipCode = users => users.reduce(
             (acc, { address: { zipcode }, ...rest }) => acc.concat(
                  {
                    ...acc, 
                    ...rest, 
                    zipcode: zipcode.slice(0,5)

                  }
              ), []);

    compose(upperCaseName, trimZipCode)(users);

## Currying and Partial Application

Currying is wonderful. Once you use it, you want to use it all the time. It makes our lives better. Most functions in libraries like ramda are auto-curried, which is just a special kind of currying. Well what’s currying?
Currying is the idea that we have a function that accepts one argument, and returns a function expecting one argument and eventually, returning one result.

    const add = a => b => a + b;
    add(1)(2); // 3

Pretty simple.

Currying enables partial application. Partial application is when we apply fewer arguments to a function than it accepts.

Lets partially apply add to create a new function.

    const add = a => b => a + b;
    const inc = add(1);

Our function inc now has the value 1 in its closure. It can now be used to add 1 to whatever number we pass to it next.

Lets use some partial application in compose .

    // reusing compose from above.

    const add = a => b => a + b;
    const inc = add(1);

    const mult = a => b => a * b;
    const double = mult(2);

    compose(inc, double)(2); // 5!

Great, now our compose looks good, and we were able to use some functions that we already wrote. We can already start seeing how flexible and dynamic partial application and currying is! We’ve started to introduce a new topic called point-free.

Point free is where a function does not expose the argument that it is waiting to operate on. Take inc for example. We don’t know what the other argument is, theres no a in its definition. There is in add but inc is its own function, that just utilizes add .

Being point free can help make code more readable, but you can over do it.

## So whats next?

So now we understand some of the basic principles of functional programming. We’ve covered basic composition, pure functions, currying, and partial application and learned about point free code. Whats next? The best thing to do next is practice. The deeper one goes into FP, the more tested these fundamentals will be. It’s important that as you go on in your eduction with functional programming that these core concepts are understood and can easily be implemented and explained. My team at Paypal has adopted ramda as our choice of a fp utility library. We are using it for a variety of reasons, but mostly leaned toward it for lens composition. We are now able to handle our complex data structures purely, and the amount of reusable lenses we create is amazing! We are only just starting it, and I am already reusing code I wrote the week before. Thats some of the power of functional programming. I am lazy, I don’t want to write the same code fourty times.

Shout out to my team for letting me try crazy things and putting up with me :).

