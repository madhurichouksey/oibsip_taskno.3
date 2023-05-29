const inputBox = document.getElementById("txtInput");
const todolist = document.getElementById("todo-list");
function AddList(){
    if(inputBox.value == ""){
        alert("Plz write something");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}

todolist.addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",todolist.innerHTML);
}
function showList(){
    todolist.innerHTML =localStorage.getItem("data");
}
showList();