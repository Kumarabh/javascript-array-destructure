## Array Destructure

 #### Array destructure: 
* Allows us to destructure properties of an object/ Array.

```javascript

const randoms = [25,35,87,45,52,63,81];

const [x,y] = randoms;
console.log(x,y); //25, 35

```

```javascript

const randoms = [25,35,87,45,52,63,81];

const [x,y, ...args] = randoms;
console.log(args);//[87, 45, 52, 63, 81]

```

