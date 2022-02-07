const taskTypes = ["t1", "t2", "t3", "t4"]
const taskHeads = ["taskTitle", "taskContent", "taskDueDate", "taskType"]
const addTask= document.querySelector("#addTask")

const createMyOwnElement = (element)=>{
    try{
        let myElement = document.createElement(element.element)
        element.parent.appendChild(myElement)
        if(element.textContent) myElement.textContent=element.textContent
        if(element.classes) myElement.classList=element.classes  // <option class> 
        element.attributes.forEach(attribute=>{
            myElement.setAttribute(attribute.key, attribute.val)
        })
        return myElement
    }
    catch(e){
        console.log(e)
    }
}
//add task page
taskTypes.forEach(taskType=>{
    let ele= {
        element:"option",
        parent:document.querySelector("#tType"),
        textContent:taskType,
        classes:null,
        attributes:[ {key:"value", val:taskType}]
    }
    createMyOwnElement(ele)
})

addTask.addEventListener("submit", function(e){
    e.preventDefault()
    let task = { id: Date.now() }
    taskHeads.forEach( head => task[head]= addTask.elements[head].value)
    console.log(task)
})



localStorage.setItem("data", JSON.stringify([{name:"marwa"}]))
let d = JSON.parse(localStorage.getItem("data"))
console.log(typeof d);
// localStorage.removeItem("data")