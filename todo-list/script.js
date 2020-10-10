var add_task = document.getElementById("add-task");
var remove_task = document.getElementById("remove-task");
var ul = document.querySelector("ul");
var input = document.querySelector("input");

function createElementLi() {   
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(`${input.value}`));
        ul.appendChild(li);
        var li2 = document.querySelectorAll("li");
        li2[li2.length-1].setAttribute("onclick", "isCompleted(event)");
        input.value = "";
        console.log("Task Added");
}

function isCompleted(event) {
    // console.log(event.srcElement);
    var li = event.srcElement;
    li.classList.toggle("done");
    console.log("li clicked!");
}

function removingTask() {
    var li = document.querySelectorAll("li");
    for(var i=0; i<li.length; i++) {
        if (li[i].getAttribute("class") == "done") {
            li[i].style.display = "none";
        }
    }
    console.log("Task removed");
}

add_task.addEventListener("click", function(event) {
    if (input.value.length > 0) {
        createElementLi();
    }
});

document.addEventListener("keydown", function(event) {
    if (input.value.length > 0 && event.key == "Enter") {
        add_task.click();
    }
});

remove_task.addEventListener("click", removingTask);
