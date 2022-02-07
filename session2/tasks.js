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
const elementObjCreator = (element, parent, textContent, classes, attributes) =>{
    return { element, parent, textContent, classes, attributes }
    //{element : element, parent:parent }
}
//read data from localstorage
const readFromStorage = ( storageItem ) => {
    //check data is json or not // if the returned data array
    let data
    try{
        data = JSON.parse( localStorage.getItem(storageItem) ) //tasks = [{task1}, {task2}]
        if(!Array.isArray(data)) throw new Error("Data not array")
    }
    catch(e){
        data = []
    }
    return data
}

//write data in localstorage
const writeDataToStorage = ( storageItem, data ) => {
    localStorage.setItem(storageItem, JSON.stringify(data))
}

//add task page
if(addTask){
    taskTypes.forEach(taskType=>{
        // let ele= {
        //     element:"option",
        //     parent:document.querySelector("#tType"),
        //     textContent:taskType,
        //     classes:null,
        //     attributes:[ {key:"value", val:taskType}]
        // }
        createMyOwnElement( elementObjCreator("option", document.querySelector("#tType"), taskType, null, [ {key:"value", val:taskType}]) )
    })
    addTask.addEventListener("submit", function(e){
        e.preventDefault()
        let task = { id: Date.now() }
        taskHeads.forEach( head => task[head]= addTask.elements[head].value)
        const tasks = readFromStorage("tasks") // array of tasks
        tasks.push(task) // add new task to tasks
        writeDataToStorage("tasks", tasks)
        addTask.reset()
        window.location.href = "index.html"
    })
}
const datawrap = document.querySelector("#datawrap")
if(datawrap){
    const tasks = readFromStorage("tasks")
    //create elements with foreach 
    tasks.forEach(task=>{
        const tr = createMyOwnElement( elementObjCreator("tr", datawrap, null, null, []))
        createMyOwnElement( elementObjCreator("td", tr, task.id, null, []))
        createMyOwnElement( elementObjCreator("td", tr, task.taskTitle, null, []))
        createMyOwnElement( elementObjCreator("td", tr, task.taskContent, null, []))
        createMyOwnElement( elementObjCreator("td", tr, task.taskType, null, []))
        createMyOwnElement( elementObjCreator("td", tr, task.taskDueDate, null, []))
        const td = createMyOwnElement( elementObjCreator("td", tr, null, null, []))
        const singleBtn = createMyOwnElement( 
            elementObjCreator("a", td, "Show", "btn btn-success mx-3",[ {key:"href", val:"single.html"}])
            )
        const editBtn = createMyOwnElement( 
            elementObjCreator("a", td, "Edit", "btn btn-warning mx-3",[ {key:"href", val:"edit.html"} ])
        )
        //<button id="delete" class="btn btn-danger mx-3">Delete</a>
        const delBtn = createMyOwnElement( 
            elementObjCreator("button", td, "delete", "btn btn-danger mx-3",[])
        )
    })

}


