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


//Text edit functionality
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



const fileNameInput = document.getElementById("file-name")
const content = document.querySelector(".content-container")


//Save file as
const saveText = document.querySelector(".save-text")

saveText.addEventListener("click", function(){
    const atag = document.createElement('a')
    const blob = new Blob([content.innerText])
    const dataUrl = URL.createObjectURL(blob)
    atag.href = dataUrl
    atag.download = fileNameInput.value + ".txt"
    atag.click()
})



//Time and Date

//Time
function displayTime(){
    const t = new Date();
    const localtime = t.toLocaleTimeString()
    document.querySelector(".test").innerHTML = localtime
}



window.addEventListener("DOMContentLoaded", function(){
    setInterval(displayTime, 10);
})




//Get Date
window.addEventListener("DOMContentLoaded", function(){
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    const newDate = new Date();
    let displayMonth = month[newDate.getUTCMonth()]

    document.querySelector(".month").innerHTML = displayMonth


    let displayDay = newDate.getUTCDate();
    document.querySelector(".date").innerHTML = displayDay


    let displayYear = newDate.getUTCFullYear()
    document.querySelector(".year").innerHTML = displayYear
})




//Drag Function for Time/Date
let dateContainer = document.querySelector(".time-date-container")


function dragDate(e){
    dateContainer.style.top = e.pageY + "px";
    dateContainer.style.left = e.pageX + "px";
}

dateContainer.addEventListener("mousedown", function(){
    window.addEventListener("mousemove", dragDate)
})

window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove", dragDate);
  });



//Canvas Functionality
//Specifically draw functinality

const toolbar= document.querySelector(".toolbar")
const canvas = document.querySelector("#drawing-board")
const ctx = canvas.getContext('2d')

let isPainting = false
let lineWidth = 5

let startX;
let startY;

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

canvas.width = window.innerWidth - canvasOffsetX;
canvas.height = window.innerHeight - canvasOffsetY;


function draw(e){
    if(!isPainting){
        return
    }

    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY)
    ctx.stroke()
    console.log("canvas")
    console.log(ctx.lineTo(startX, startY))
}


toolbar.addEventListener("click", function(e){
    if(e.target.id === 'clear'){
        ctx.clearRect(0,0, canvas.width, canvas.height)
        console.log('clear works')
    }
})

toolbar.addEventListener('change', function(e){
    if(e.target.id === 'color'){
        ctx.strokeStyle = e.target.value
        console.log('color works')
    }

    if(e.target.id === 'line-width'){
        lineWidth = e.target.value
        console.log('width works')
    }
})


function draw(e){
    if(!isPainting){
        return
    }

    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.lineTo(e.clientX, e.clientY)
    ctx.stroke()
    
}


canvas.addEventListener("mousedown", function(e){
    isPainting = true
    startX = e.clientX
    startY = e.clientY
})

canvas.addEventListener('mouseup', function(e){
    isPainting = false
    ctx.stroke()
    ctx.beginPath()
})

canvas.addEventListener('mousemove', draw)


//Text functionality
//Wherever user clicks on canvas
//Need to track mouse position on canvas
//Create Text Input
//Take Value of Text input and put into ctx.textfill()


//Hide Text Editor
const closeBtn = document.querySelector(".close")
const closeTodo = document.querySelector(".close-todo")


closeBtn.addEventListener('click', function(){
    wordProcessorContainer.classList.toggle("close-word")
    if(wordProcessorContainer.classList.contains("close-word")){
        wordProcessorContainer.style.visiblity = 'hidden'
    }
})

closeTodo.addEventListener('click', function(){
    mydiv.classList.toggle("close-todo")
    if(mydiv.classList.contains("close-todo")){
        mydiv.style.visiblity = 'hidden'
    }
})



//Toggle Feature for Side Bar
const sideBarToggle = document.querySelector(".side-bar-toggle")
const sideBar = document.querySelector(".side-bar")

sideBarToggle.addEventListener('click', function(){
    sideBar.classList.toggle('show-side-bar')
})









  





