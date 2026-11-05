var pala = document.getElementById("taskInput")
var show = document.getElementById("taskList")
var btn = document.getElementById("addTaskBtn")

btn.addEventListener ("click", function(){
    if ((pala.value) == "") {
        alert("Preencha os dados")
    }
    else {
        var newElement = document.createElement("li")
        newElement.innerHTML = (pala.value)
        var newButton = document.createElement("button")
        newButton.innerHTML = "X"
        newElement.appendChild (newButton)
        show.appendChild(newElement)
        var btnRemover = newElement.querySelector("button");
        btnRemover.addEventListener("click", function(){
            newElement.remove();
        });
        pala.value = ""
    }});



// <li> pala <button>X</button></li>
// newElement precisa -- <button> X </button>
// innetHTML = conteudo do input + btn