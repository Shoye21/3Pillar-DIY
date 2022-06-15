let age = prompt("Enter your age")

if(age > 18){
    console.log("You are old enough to drive")
}
else{
    console.log("you are left with " + Number(18-age) + " years to drive")
}

let myAge = 21
let yourAge = prompt("Enter your age")

if(myAge >= yourAge){
    console.log("You are " + Number(myAge-yourAge) + " years younger than me")
}
else{
    console.log("You are " + Number(yourAge-myAge) + " years older than me")
}

let a = 4;
let b = 3;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");

}

(a > b) ? console.log("a is greater than b"): console.log("a is less than b");

let number = prompt("enter a number")

if(number % 2 == 0){
    console.log("The number is even")
}
else{
    console.log("the number is odd")
}