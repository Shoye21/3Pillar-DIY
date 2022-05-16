var fname=document.getElementById("f-name");
var lname=document.getElementById("l-name");
var countryName=document.getElementById("country");
var pScore=document.getElementById("p-score");
function validation(){
    if(((fname.value==="")&&(lname.value===""))&&((countryName.value==="")&&(pScore.value==""))){
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
var dt=date1();

var body=document.getElementById("tag1");

 var name2=fname.value+" "+lname.value;
var time1=document.createElement("span");
function addData(){
   
    var tab=document.getElementById("tag1");
    var span1=document.createElement("br");
    var row=document.createElement("tr");
    var data1=document.createElement("td");
    var data2=document.createElement("td");
    var data3=document.createElement("td");
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
    

    row.style.height="30px";

    row.style.backgroundColor="aqua";
    
    tab.appendChild(row);
}
function storeItem(){
    localStorage.setItem("date",dt);
    localStorage.setItem("fname",fname.value+" "+lname.value);
    localStorage.setItem("country",countryName.value);
    localStorage.setItem("Score",pScore.value);
}
function press(){
    if(validation()){
        storeItem();
        addData();
    }
    else{
        alert("Something went wrong");
    }
}

