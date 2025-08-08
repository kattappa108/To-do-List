const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addTask(){
if(inputBox.value=== ''){
    alert("You must write something!");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;        /*store the input value into li*/
    listcontainer.appendChild(li);   /*display li under list container */
    let span=document.createElement("span");
    span.innerHTML="\u00d7";     /* cross icon*/
    li.appendChild(span);
}

inputBox.value="";   /*after adding the value in listcontainer please empty the input field for furthe addition of tasks*/
saveData();  // call the function each time to save changes
}


// js for click function
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// js function to store the task in the browser with the name of data
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

// display the data using getitem whenever we open the website
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

