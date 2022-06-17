let body = document.querySelector("body")
let div = document.querySelector("div")
function isPrime(number) {
    let count = 0
    let j = 1
    while (j <= number) {
        if (number % j == 0) {
            count++
        }
        j++
    }
    if (count == 2) {
        return true;
    }
    else {
        return false;
    }
}
for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0 && isPrime(i)) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "120px";
        box.style.height = "90px"
        box.style.backgroundColor = "red"
        box.style.margin = "4px";
        div.appendChild(box)
    }
    else if(i%2 == 0 && !isPrime(i)){
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "120px";
        box.style.height = "90px"
        box.style.backgroundColor = "aqua"
        box.style.margin = "4px";
        div.appendChild(box)
    }
    else if (i % 2 != 0 && isPrime(i)) {
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "120px";
        box.style.height = "90px"
        box.style.backgroundColor = "red"
        box.style.margin = "4px";
        div.appendChild(box)
    }
    else if(i%2 != 0 && !isPrime(i)){
        let box = document.createElement("div")
        box.textContent = i;
        box.style.width = "120px";
        box.style.height = "90px"
        box.style.backgroundColor = "yellow"
        box.style.margin = "4px";
        div.appendChild(box)
    }
    else if(isPrime(i)) {
        let box = document.createElement("div")
        box.textContent = i
        box.style.width = "120px";
        box.style.height = "90px"
        box.style.backgroundColor = "red"
        box.style.margin = "4px";
        div.appendChild(box)
    }
    
    
}

