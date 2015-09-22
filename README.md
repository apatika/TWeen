# TWeen.js – a minimalist JavaScript Tween library

TWeen is a minimalist JavaScript library for modern browsers. 

You do not need JQuery to use it but you can pass a JQuery element if you want. It is up to you.

TWeen.js is licensed under the terms of the MIT License.

## Use

~~~ sh
TW(element,{'top':250,'opacity':.4}, 4, callback);
~~~


## Minimize

You will need Node.js and npm installed on your system.

You can remove all the ease functions that you do not need before minimize.

~~~ sh
$ npm install
$ npm run-script dist
~~~

The resulting files are:

 `dist/TWeen.min.js`

~~~ sh
