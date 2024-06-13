let inputBox = document.getElementById("input-box");
let listBox = document.getElementById("listContainer");

function addTask(){
    console.log("Clicked")

    if (inputBox.value === ''){
        alert("Enter a task to complete!");
    }
    else {
        let li = document.createElement("li");
        li.innerText = inputBox.value;
        listBox.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value = ''; //Removing entered text from  input text field 
    saveData()

}

listBox.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData()

    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData()

    }
},false)

document.addEventListener('keyup', (d) => {
    if (d.keyCode === 13 && inputBox === document.activeElement) {
       if(inputBox.value !== ''){
           
           addTask();
       } 
       else{
        alert("Enter a task to complete!");
       }
    }
   
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();