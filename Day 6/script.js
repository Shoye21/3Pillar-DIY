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
for(let i = 0; i<=input ; i++){
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

for(let i = 0; i<=10 ; i++){
    console.log(`${i} * ${i} = ${Number(i * i)} `)
}

console.log("i  i^2  i^3")
for(let i = 0; i<=10 ; i++){
    
    console.log(`${i}   ${Number(Math.pow(i,2))}   ${Number(Math.pow(i,3))} `)
}

for(let i = 0; i<=100 ; i++){
    if(i%2 == 0){
    console.log(i)
    }
}

for(let i = 0; i<=100 ; i++){
    if(i%2 != 0){
    console.log(i)
    }
}

for (let i = 0; i <= 100; i++) {
    for (let k = 2; k < i; k++) {
        if (i % k === 0 && i > 1) {
            console.log(i)
        }
    }
}