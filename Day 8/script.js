dog = {}
console.log(typeof dog , dog)

dog = {
    name : "Shiro",
    legs : 4,
    color: "black",
    age: 7,
    bark: () => {
        return "woof woof"
    }
}

console.log(dog.age)
console.log(dog.bark())
console.log(dog.color)
console.log(dog.name)
console.log(dog.legs)

dog.breed = "german shepherd";
dog.getDogInfo = function () {
    console.log(Object.values(dog));
}
dog.getDogInfo()

//The end