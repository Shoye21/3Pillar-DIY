var fname=document.getElementById("f-name");
var lname=document.getElementById("l-name");
var countryName=document.getElementById("country");
var pScore=document.getElementById("p-score");
function validationForm(){
   if((fname.value===null &&lname.value===null) && (countryName.value===null && pScore.value===null)){
       alert("please fill all the details");
       return false;
}
else{
    return true;
}
}
function date1(){
var dt= Date();
return dt.substring(3,21);
}
let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);

var dt=date1();

var body=document.getElementById("tag1");

 var name2=fname.value+" "+lname.value;
var time1=document.createElement("span");
function addData(){
    var remo=document.createElement("button");
    
    var tab=document.getElementById("tag1");
    var span1=document.createElement("br");
    var row=document.createElement("tr");
    var data1=document.createElement("td");
    var data2=document.createElement("td");
    var data3=document.createElement("td");
    var data4=document.createElement("td");
    var datelo=localStorage.getItem("date");
    
    var dekho=localStorage.getItem("fname");
    data1.textContent=dekho;
    span1.textContent=datelo;
    data1.appendChild(span1);
    row.appendChild(data1);
    data2.textContent=localStorage.getItem("country");
    row.appendChild(data2);
    data3.textContent=localStorage.getItem("Score");
    row.appendChild(data3);
    var remo=document.createElement("button");
    var beta=document.createTextNode("Del");
    remo.appendChild(beta);
    // remo.classList.add("btn btn-primary");
    data4.appendChild(remo);
    row.appendChild(data4);

    row.style.height="30px";

    row.style.backgroundColor="aqua";
    
    // tab.appendChild(row);
    remo.setAttribute("class","rem");
    remo.setAttribute("onclick", "bhagavo()")
    row.setAttribute('class','dell');
    tab.appendChild(row);
}
function storeItem(){
    localStorage.setItem("date",dt);
    localStorage.setItem("fname",fname.value+" "+lname.value);
    localStorage.setItem("country",countryName.value);
    localStorage.setItem("Score",pScore.value);
}
function press(){
    if(validationForm()){
        storeItem();
        addData();
    }
    else{
        alert("Something went wrong");
    }
}
function bhagavo(){
    var current_tasks = document.querySelectorAll(".rem");
    for(var i=0; i<current_tasks.length; i++){
        current_tasks[i].onclick = function(){
            this.parentNode.parentNode.remove();
        }
    }
}


