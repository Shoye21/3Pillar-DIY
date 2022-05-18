var fname = document.getElementById("f-name");
var lname = document.getElementById("l-name");
var countryName = document.getElementById("country");
var pScore = document.getElementById("p-score");
function validationForm() {
    if ((fname.value === null && lname.value === null) && (countryName.value === null && pScore.value === null)) {
        alert("please fill all the details");
        return false;
    }
    else {
        return true;
    }
}
function date1() {
    var dt = Date();
    return dt.substring(3, 21);
}
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body1').append(table);

var dt = date1();

var body = document.getElementById("tag1");

var name2 = fname.value + " " + lname.value;
var time1 = document.createElement("span");
function addData() {
    // var remo = document.createElement("button");
    var addNum = document.createElement("button")
    var subNum = document.createElement("button")
    var tab = document.getElementById("tag1");
    var span1 = document.createElement("br");
    var row = document.createElement("tr");
    var data1 = document.createElement("td");
    var data2 = document.createElement("td");
    var data3 = document.createElement("td");
    var data4 = document.createElement("td");
    data3.setAttribute("id", "change");
    // var data5 = document.createElement("td");
    var datelo = localStorage.getItem("date");

    var dekho = localStorage.getItem("fname");
    data1.textContent = dekho;
    span1.textContent = datelo;
    data1.appendChild(span1);
    row.appendChild(data1);
    data2.textContent = localStorage.getItem("country");
    row.appendChild(data2);
    data3.textContent = localStorage.getItem("Score");
    row.appendChild(data3);
    var remo = document.createElement("button");
    var beta = document.createTextNode("Del");
    remo.appendChild(beta);
    // remo.classList.add("btn btn-primary");
    data4.appendChild(remo);
    var x = row.insertCell(3);
    x.appendChild(addNum);
    row.appendChild(data4);
    var beta1 = document.createTextNode("+5");
    addNum.appendChild(beta1);
    var y = row.insertCell(4);
    y.appendChild(subNum);
    // row.appendChild(data5);
    var beta2 = document.createTextNode("-5")
    subNum.appendChild(beta2);
    

    row.style.height = "30px";

    row.style.backgroundColor = "aqua";

    // tab.appendChild(row);
    remo.setAttribute("class", "rem");
    remo.setAttribute("onmouseover", "send()");
    addNum.setAttribute("onclick", "shift()")
    row.setAttribute('class', 'dell');
    tab.appendChild(row);
    subNum.setAttribute("onclick", "addition()");

}
function storeItem() {
    localStorage.setItem("date", dt);
    localStorage.setItem("fname", fname.value + " " + lname.value);
    localStorage.setItem("country", countryName.value);
    localStorage.setItem("Score", pScore.value);
}
function press() {
    if (validationForm()) {
        storeItem();
        addData();
    }
    else {
        alert("Something went wrong");
    }
}
function send() {
    var current_tasks = document.querySelectorAll(".rem");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function () {
            this.parentNode.parentNode.remove();
        }
    }
}
function sortTable() {
    var table, i, x, y;
    table = document.getElementById("tag1");
    var switching = true;

    // Run loop until no switching is needed
    while (switching) {
        switching = false;
        var rows = table.rows;

        // Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false;

            // Fetch 2 elements that need to be compared
            x = rows[i].getElementsByTagName("td")[3];
            y = rows[i + 1].getElementsByTagName("td")[3];
            if (x.innerHTML > y.innerHTML) {

                // If yes, mark Switch as needed and break loop
                Switch = true;
                break;
            }
        }
        if (Switch) {
            // Function to switch rows and mark switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}
function shift() {
    let score=localStorage.getItem("Score");
    document.getElementById("change").innerHTML = Number(score)+5
    localStorage.setItem("Score" , score);

}


