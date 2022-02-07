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
//read data from localstorage
const readFromStorage = ( storageItem ) => {
    //check data is json or not // if the returned data array
    let data
    try{
        const data = JSON.parse( localStorage.getItem(storageItem) )
        if(!Array.isArray(data)) throw new Error("Data not array")
    }
    catch(e){
        data = []
    }
    return data
}

//write data in localstorage
const writeDataToStorage = (  ) => {
    
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
    const tasks = readFromStorage("tasks")
    tasks.push(task)
    console.log(tasks)
})


