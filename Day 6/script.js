for (let i = 0; i <= 10; i++) {
    console.log(i);
}


i = 0;
while (i < 10) {
    i++;
    console.log(i);
}


i = 0;
do {
    i++;
    console.log(i)
} while (i < 10)

for (let i = 10; i <= 10; i--) {
    console.log(i);
}

i = 10;
while (i > 0) {
    i--;
    console.log(i)
}


i = 10;
do {
    i--;
    console.log(i)
} while (i > 0)


let input = prompt("input a number")
for (let i = 0; i <= input; i++) {
    console.log(i)
}

let string = "";
for (let i = 1; i <= 6; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

for (let i = 0; i <= 10; i++) {
    console.log(`${i} * ${i} = ${Number(i * i)} `)
}

console.log("i  i^2  i^3")
for (let i = 0; i <= 10; i++) {

    console.log(`${i}   ${Number(Math.pow(i, 2))}   ${Number(Math.pow(i, 3))} `)
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}

let count = 0
for (let i = 1; i <= 100; i++) {
    let j = 1
    while (j <= i) {
        if (i % j == 0) {
            count++
        }
        j++
    }
    if (count == 2) {
        console.log(i)
    }
    count = 0
}

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log("the sum is " + Number(sum))

let sumEven = 0
let sumOdd = 0
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        sumEven += i
    }
    else {
        sumOdd += i
    }
}
let newArray = []
newArray.push(sumEven)
newArray.push(sumOdd)
console.log(newArray)

let sample = []
for (let i = 1; i <= 5; i++) {
    sample.push(Math.random())

}
console.log(...sample)

let sample1 = []
while(sample1.length < 5) {
    let x = Math.random()
    if (!sample1.includes(x)) {
        sample1.push(x)
    }

}
console.log(...sample1)



