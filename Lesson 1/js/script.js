console.log("Hello!"); // строки берём в ковычки
console.log("world");
console.log("3333");
console.log(334);
console.log ("Hello" + " world");
console.log ("Hello" +" "+ "world");
console.info("Hello");
// alert("Hello");
// alert("Hello"); //ctrl+/
// alert("Hello");

document.getElementById("out").innerHTML = "Hello";
document.getElementById("out").innerHTML = 2019;
document.getElementById("out").innerHTML = "<b>2020</b>";

document.querySelector(".header").innerHTML = 15;
document.querySelector("#one").innerHTML = 777;
document.getElementById("one").innerHTML = 888;

let b;
let a = document.getElementById("one");
let c;
c = document.querySelector(".header");

a.innerHTML = 9999;
c.innerHTML = 6666;