var newListItem;
let deleteListItem;
let userInput;
let filtered;
let filterArr=[];
let listArr = [];

const memoInput = document.querySelector("#memo-input")
const filter = document.getElementById("filter")
const filterButton = document.getElementById("filter-btn")
let newTask = document.getElementById("new-task")
let listElement = document.querySelector("#lists").getElementsByTagName("li")
let listContainer = document.querySelector("#lists")
const addButton = document.querySelector("#add_btn")
const clearButton = document.querySelector("#clear_btn")

newListItem=document.createElement("li")
newListItem.id = "listItems"
newListItem.appendChild(document.createTextNode(userInput))
newListItem.innerHTML += '<button onclick="del()">X</button>'

memoInput.addEventListener('focus', () =>{
    memoInput.style.borderBottom= '2px solid hsl(178, 100%, 50%)'
    newTask.textContent = 'New Task'
})

clearButton.addEventListener('click', () =>{
    listContainer.textContent=''

})

function addtoarray(){
   userInput = memoInput.value
    newListItem=document.createElement("li")
    newListItem.appendChild(document.createTextNode(userInput))
    newListItem.innerHTML += '<button onclick="del()">X</button>'
    listArr.push(newListItem) 
    memoInput.style.borderBottom= '2px solid #000'
    return listArr[listArr.length-1]

}


function add(e){
    listContainer.appendChild(addtoarray())
    listElement = document.querySelector("#lists").getElementsByTagName("li")
    newTask.textContent = ''
    e.preventDefault()
    return memoInput.value = ''

}
function del(){
 listContainer.removeChild(document.querySelectorAll( 'li')[0])
 alert("ARE YOU SURE?")

}
addButton.addEventListener('click',add)

filterButton.addEventListener('click',() =>{
    filterInput = filter.value
    listElement = document.querySelector("#lists").getElementsByTagName("li")
    for(let i=0;i<listElement.length;i++){
    if(listElement[i].textContent.includes(filterInput) === true){
        filterArr.push(listElement[i].outerHTML)
    }
    filter.value = ''
}
listContainer.innerHTML=''
 filterArr.forEach(elem=> {
    listContainer.innerHTML+=elem
 });
 filterArr=[]
})