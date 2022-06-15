var firstName = "Shaurya" , lastName = "Omar" , country = "India", age = 28, city = "Kanpur" , isMarried = true, year = 2022 ;
console.log(typeof firstName , typeof lastName ,typeof isMarried ,typeof year ,typeof city,typeof age)

if(typeof "10" == typeof 10){
    console.log("true")
}
else{
    console.log("False")
}

if(parseInt('9.8') == 10){
    console.log("true")
}
else{
    console.log("False")
}
console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!='4')
console.log(4=='4')
console.log(4==='4')
let x = 'python'.length
let y = 'jargon'.length
console.log(x !== y)

var sum1 = (4>3 && 10<12)
console.log(sum1)
var sum2 = (4 > 3 && 10 > 12)
console.log(sum2)
var sum3 = (4 > 3 || 10 < 12)
console.log(sum3)
var sum4 = (4 > 3 || 10 > 12)
console.log(sum4)
var sum5 = (!(4 > 3))
console.log(sum5)
var sum6 = (!(4 < 3))
console.log(sum6)
var sum7 = (!(false))
console.log(sum7)
var sum8 = (!(4 > 3 && 10 < 12))
console.log(sum8)
var sum9 = (!(4 > 3 && 10 > 12))
console.log(sum9)
var sum01 = (!(4 === '4'))
console.log(sum01)
var sum02 = ('python'.includes('on') && 'jargon'.includes('on'))
console.log(sum02)

let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getMinutes())

