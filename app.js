//Drag Functionality for Todo
// Bring in div
const mydiv = document.querySelector(".todo-container")

//Drag functionality
function drag(e){
    mydiv.style.top = e.pageY + "px";
    mydiv.style.left = e.pageX + "px";
}

mydiv.addEventListener("mousedown", function(){
    window.addEventListener("mousemove", drag)
})

window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", drag);
  });



//Todolist
//Bring in Dom elements:
let todoInput = document.querySelector(".todo-input")
let todoSubmit = document.querySelector(".submit-button")
let todolist = document.querySelector(".todo-list")
let todoOutputCointainer = document.querySelector(".todo-output-container")


//Add Event Listener to create new todo
todoSubmit.addEventListener("click", createNewTodo)


//Create New Todo

function createNewTodo(e){
    e.preventDefault()


//Create new Div
let newDiv = document.createElement("div")
newDiv.classList.add("New-Div")
todolist.appendChild(newDiv)


//create new todo
let newTodo = document.createElement("li")
newTodo.classList.add("New-Todo")
newDiv.appendChild(newTodo)

//Append New Div to Div Container




//CreateButton Div
const buttonDiv = document.createElement("div")
buttonDiv.classList.add("button-div")
newDiv.appendChild(buttonDiv)

//Add Done Button
let doneButton = document.createElement("button")
doneButton.classList.add("done-button")
doneButton.innerText = "done"
buttonDiv.appendChild(doneButton)


//Add DeleteButton
const deleteButton = document.createElement("button")
deleteButton.classList.add("delete-button")
deleteButton.innerText = "trash"
buttonDiv.appendChild(deleteButton)

//Display Todo Text
newTodo.innerText = todoInput.value



//Add function done button
doneButton.addEventListener("click", doneToDo)

    function doneToDo(){
        newTodo.classList.toggle("completed")
        
    }


    //Trash Button Functionality
 //Delete Button Functionality
 deleteButton.addEventListener("click", deleteToDo)


  function deleteToDo(){
      newDiv.classList.add("fall")
      todolist.addEventListener("transitionend", function(){
          todolist.removeChild(newDiv)

      })
      
  }

}


//Word Processor 
const wordProcessorContainer = document.querySelector(".word-process-container")
const header = document.querySelector(".header")
//Drag functionality for Word processor
function dragWord(e){
    wordProcessorContainer.style.top = e.pageY + "px";
    wordProcessorContainer.style.left = e.pageX + "px";
}

header.addEventListener("mousedown", function(){
    window.addEventListener("mousemove", dragWord)
})

window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", dragWord);
  });


const boldBtn = document.querySelector(".bold")
const underlineBtn = document.querySelector(".underline")
const italicsBtn = document.querySelector(".italics")
const colorSelector = document.querySelector(".color-btn")



boldBtn.addEventListener("click", function(){
    document.execCommand("bold")
})

underlineBtn.addEventListener("click", function(){
    document.execCommand("underline")
})

italicsBtn.addEventListener("click", function(){
    document.execCommand("italic")
})

colorSelector.addEventListener("input", function(){
    document.execCommand("forecolor", false, colorSelector.value)
})






  






