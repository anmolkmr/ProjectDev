// const pro = require('prompt-sync')();
// var name = pro("enter your name");
// console.log("Welcome to JS",name);
// let a=10;
// const b=20;

// console.log(a-b);
// const pw=function(a,b){return a**b};
// console.log(pw(2,3));
// const SI=(p,r,t)=>(p*r*t)/100;
// const multi=(a,b)=>{
//     console.log(a+b);
//     console.log(a*b);
//     console.log(a/b);
//     console.log(a-b);
//     console.log(a**b);
// }
// // console.log(SI(2,2,2));
// multi(4,4);
//wa function expression which takes name as a parameter and return a message(good morning ,anmol);
// const fun= function(name){
//     return "good morning"+name;
// }
// let prompt = require('prompt-sync')();
// var name=prompt('enter yourr name');
// console.log(fun(name));
const prompt=require('prompt-sync')();
var num1=prompt("enter number");
var num2=prompt("enter number");
console.log("your number is",parseInt(num1)+parseInt(num2));