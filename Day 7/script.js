fullName = () => "Shaurya Omar";
console.log(fullName())

fullName = (fname, lname) => fname + "-" + lname;
console.log(fullName("Shaurya", "Omar"))

function addNum(x,y){
    return x+y;
}
console.log(addNum(4,6))


function area(length, breadth){
    let area = length * breadth;
    console.log(area)
}
area(10,2)

function peri(length, breadth){
    let peri = 2 * (length + breadth)
    console.log(peri)
}
peri(3,6)

function volume(length, width, height){
    let area = length * width * height
    console.log(area)
}
volume(4,5,6)

function area(radius){
    let area = 3.14 * radius * radius
    console.log(area)
}
area(5)

function circum(radius){
    let circum = 2 * 3.14 * radius
    console.log(circum)
}
circum(3)

function density(mass, volume){
    let density = mass/volume
    console.log(density)
}
density(10,2)

function speed(distance, time){
    let speed = distance / time
    console.log(speed)
}
speed(90,5)

function weight(mass){
    let w = mass *  10 //we engineers love taking g=10 instead of 9.8 :P
    console.log(w)
}
weight(80)

function temp(celcius){
    let faren = (celcius * 9/5) + 32
    console.log(faren)
}
temp(37)

function BMI(weight,height){
    let bmi = weight / (height / height);
    if (bmi < 18.5) {
        console.log("underweight")
    } else if (bmi > 18.5 && bmi < 24.9) {
        console.log("overweight");
    } else if (bmi > 25 && bmi < 29.9) {
        console.log("overweight");
    } else {
        console.log("obese") }
}
BMI(4, 7);

function checkSeason(month){
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeason("september")

function findMax(a,b,c){
    console.log(Math.max(Math.max(a,b) , Math.max(b,c)))
}
findMax(8,2,5)
