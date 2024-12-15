let curryear=2024;
let birthyear=2005;
let yourage=curryear-birthyear;
console.log( "your age is",yourage);

var length=43;
var width=56;
var areaofrectangle=length*width;
console.log("Area of rectangle is:" ,areaofrectangle);

let r=17;
const pi=3.14;
let areaofcircle=pi*r*r;
console.log( "Area of circle is:" ,areaofcircle);

let s=14;
let areaofcube=6*s*s;
console.log("Area of cube is:",areaofcube);

var seconds=430;
var minuts=seconds/60;
var remaningseconds=seconds%60;
console.log("Minuts:",minuts);
console.log("Remaning seconds:",remaningseconds);

let tempinFahrenhite=45;
let tempincelcius=(tempinFahrenhite-32)*5/9;
console.log( "Temprature in celcius:",tempincelcius,"c" );


let a = 2;
let b = ++a * 2;
console.log("Answer of B is:",b);


let x = 5;
let y = x-- + 2;
console.log("Answer of B is:",y);
console.log("value of X is",x);


let x = 3;
let y = ++x + x++ + ++x;
console.log("Answer of Y is:",y);


let m = 2;
let n = ++m * m++ * --m;
console.log("Answer of N is:",n);


 let a = 3;
let b = 5;
let result = ++a + b-- - a++ + --b;
console.log("your result is:",result);


let m = 2;
let n = 4;
let p = m++ + ++n - --m + n--;
console.log("Answer of P is:",p);


let a = 5;
let b = 3;
let c = 2;
let d = 7;
let result = ++a * (b-- + c) / --d;
console.log( "your result is:",result);


let m = 2;
let n = 3;
let o = 4;
let result = m++ * (--n + m) / (o-- - n);
console.log( "your result is:",result);
console.log("value of M is",m);
console.log("value of N is",n);
console.log("value of O is",o);
