/*카멜 케이스(camel case) : 모든 변수의 시작은 소문자로, 다른 의미를 담고 싶을 때는 스페이스바가 아닌 대문자로 바꿔준다.
camel : 낙타
ex) const dayofday (x)
    const dayOfDay (o)
*/
/* Array
const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun",true];

console.log(daysOfWeek[2]);

//object
const kangInfo = {
    name:"KangMan",
    age:26,
    gender:"Male",
    isHandsome:true,
    favMovies: ["Forrest Gump","The Legend of 1900","The Notebook"],
    favFood: [{name:"garbi",fatty:true},{name:"Stir-fried spinach",fatty:false}]
};

console.log(kangInfo);

//function
function sayHello(name, age){
    console.log('Hello!', name, "you have", age,"years of age.");
}

sayHello("KangMan", 15);

function sayHello(name, age){
    return `Hello ${name} you are ${age} years old.`;
}

const greetKangMan = sayHello('KangMan',26);
console.log(greetKangMan);

//calculator
const calculator ={
  plus: function(a,b){
    return a+b;
  },
  minus: function(a,b){
    return a-b;
  },
  mult: function(a,b){
    return a*b;
  },
  div: function(a,b){
    return a/b;
  },
  square: function(a,b){
    return a**b;
  }
}

const plus = calculator.plus(5,5);
const minus = calculator.minus(5,2);
const mult = calculator.mult(3,3);
const div = calculator.div(9,3);
const square = calculator.square(3,3);
console.log(plus,minus,mult,div,square);

//html -> js
const title = document.querySelector("#title");
title.innerHTML = "Hi From JS!";
title.style.color = "red";
document.title = 'I own you now';
console.dir(document);

//event
const title = document.querySelector("#title");

function handleClick(){
  title.style.color = "blue";
}

title.addEventListener("click",handleClick);
*/
//if else
if(10 === 10){
  console.log("hi");
}else{
  console.log("ho");
}

const age = prompt("How old are you?"); //prompt is very old javascript. I won't use this later.
if(age >= 18 && age <= 21){
  console.log("You can drink. But you should not.");
}else if(age > 21){
  console.log("Go ahead.");
}else{
  console.log("too young.");
}
