let empty = []

let work = ["eat", "sleep", "drink", "run", "walk"];

console.log(work.length);

let firstItem = console.log(work[0]);
let middle = Math.floor((work.length) / 2);
let middleItem = console.log(work[middle]);
let lastItem = console.log(work[work.length - 1]);

let mixed = ["sharya", 21, true, null, {
    favoriteFood: ["pizza", "chicken"]
}, undefined]

let itCompanies = ["google", "microsoft", "oracle", "amazon", "ibm", "oracle", "apple"];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0]);
let middleIt = Math.floor(itCompanies.length / 2)
console.log(itCompanies[middleIt]);
console.log(itCompanies[itCompanies.length - 1]);

for (let i in itCompanies){
    console.log(itCompanies[i])
}

for (let i in itCompanies){
    console.log(itCompanies[i].toUpperCase())
}

console.log(itCompanies.join(',') +  " are big IT companies")

// let searchItComp = prompt("enter company to search");
// if (itCompanies.includes(searchItComp)) {
//     console.log(searchItComp)
// } else {
//     console.log("company not found")
// }

let temp = []
for (let i = 0; i < itCompanies.length; i++) {
    if(itCompanies[i].includes("oo")){
        temp.push(itCompanies[i])
    }
}
console.log(temp)

itCompanies.sort();
itCompanies.reverse();
itCompanies.slice(0, 3);
itCompanies.slice(itCompanies.length - 1, 3)
itCompanies.slice(Math.floor(itCompanies.length / 2), 1);
itCompanies.shift();
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1))
itCompanies.length = 0;
console.log(itCompanies)
