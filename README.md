# TWeen.js – a Minimalist JavaScript Tween Library

TWeen is a minimalist JavaScript library for modern browsers. 

You do not need JQuery to use it but you can pass a JQuery element if you want. It is up to you.

TWeen.js is licensed under the terms of the MIT License.

## Use

Import Tween.js into your html code, then :

~~~ sh
TW(element,{'top':250,'opacity':.4}, 4, callback);
~~~


## Minimize

You will need Node.js and npm installed on your system.

You can remove all the Robert Penner's easing functions that you do not need before minimize.

~~~ sh
$ npm install
$ grunt
~~~

The resulting files are:

 `dist/TWeen.min.js`
 `dist/TWeen.min.js.map`

~~~ sh
