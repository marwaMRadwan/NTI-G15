const taskHeads = ["taskTitle", "taskContent", "taskDueDate", "taskType"]
const addTask = document.querySelector("#addTask")  //form   undife =>false
const datawrap = document.querySelector("#datawrap")
const delAll = document.querySelector("#delAll")
const createMyOwnElement = (element) => {
    try {
        let myElement = document.createElement(element.element)
        element.parent.appendChild(myElement)
        if (element.textContent) myElement.textContent = element.textContent
        if (element.classes) myElement.classList = element.classes  // <option class> 
        element.attributes.forEach(attribute => {
            myElement.setAttribute(attribute.key, attribute.val)
        })
        return myElement
    }
    catch (e) {
        console.log(e)
    }
}
const elementObjCreator = (element, parent, textContent, classes, attributes) => {
    return { element, parent, textContent, classes, attributes }
}
//read data from localstorage
const readFromStorage = (storageItem) => {
    //check data is json or not // if the returned data array
    let data
    try {
        data = JSON.parse(localStorage.getItem(storageItem)) //tasks = [{task1}, {task2}]
        if (!Array.isArray(data)) throw new Error("Data not array")
    }
    catch (e) {
        data = []
    }
    return data
}
//write data in localstorage
const writeDataToStorage = (storageItem, data) => {
    localStorage.setItem(storageItem, JSON.stringify(data))
}
// draw task
const drawTask = (task,index) => {
    const tr = createMyOwnElement(elementObjCreator("tr", datawrap, null, null, []))
    createMyOwnElement(elementObjCreator("td", tr, task.id, null, []))
    createMyOwnElement(elementObjCreator("td", tr, task.taskTitle, null, []))
    createMyOwnElement(elementObjCreator("td", tr, task.taskContent, null, []))
    createMyOwnElement(elementObjCreator("td", tr, task.taskType, null, []))
    createMyOwnElement(elementObjCreator("td", tr, task.taskDueDate, null, []))
    const td = createMyOwnElement(elementObjCreator("td", tr, null, null, []))
    const singleBtn = createMyOwnElement(
        elementObjCreator("button", td, "Show", "btn btn-success mx-3", [])
    )
    singleBtn.addEventListener("click", ()=> showElement(task))
    const editBtn = createMyOwnElement(
        elementObjCreator("a", td, "Edit", "btn btn-warning mx-3", [{ key: "href", val: "edit.html" }])
    )
    //<button id="delete" class="btn btn-danger mx-3">Delete</a>
    const delBtn = createMyOwnElement(
        elementObjCreator("button", td, "delete", "btn btn-danger mx-3", [])
    )
    delBtn.addEventListener("click", ()=>deleteItem(index))
}
const deleteItem = (index)=>{
    //index
    const tasks = readFromStorage("tasks")
    tasks.splice(index,1)
    writeDataToStorage("tasks", tasks)
    drawAllTasks(tasks)
}
const showElement=(task)=>{
    writeDataToStorage("task", task)
    window.location.href="single.html"
}
const drawEmptyRow = (colSpan) => {
    const tr = createMyOwnElement(elementObjCreator("tr", datawrap, null, "alert alert-danger", []))
    createMyOwnElement(elementObjCreator("td", tr, "no tasks yet", "text-center", [{ key: "colspan", val: colSpan }]))
}
const drawAllTasks = (tasks) => {
    datawrap.textContent = ""
    if (tasks.length == 0) drawEmptyRow(6)
    tasks.forEach((task, i) => drawTask(task, i))
}
const drawTaskTypes = (taskTypes)=>{
    taskTypes.forEach(taskType => {
        createMyOwnElement(elementObjCreator("option", document.querySelector("#tType"), taskType, null, [{ key: "value", val: taskType }]))
    })
}
//add task page
if (addTask) {
    const taskTypes = ["t1", "t2", "t3", "t4"]
    drawTaskTypes(taskTypes)
    addTask.addEventListener("submit",  (e)=> {
        e.preventDefault()
        let task = { id: Date.now(), status: false }
        taskHeads.forEach((head) => task[head] = addTask.elements[head].value)
        //{taskTitle:'task2'}
        const tasks = readFromStorage("tasks") // array of tasks [{taskTitle:'task1'}]
        tasks.push(task) // add new task to tasks {}   [{}] [{taskTitle:'task1'},{tsask 2}]
        writeDataToStorage("tasks", tasks) // [{taskTitle:'task1'}, {task2}]
        addTask.reset()
        window.location.href = "index.html"
    })
}
if (datawrap) {
    drawAllTasks( readFromStorage("tasks") )
    delAll.addEventListener("click", (event) => {
        writeDataToStorage("tasks", [])
        drawAllTasks([])
    })
}
const singlewrap = document.querySelector("#singlewrap")
if(singlewrap){
    const task = JSON.parse(localStorage.getItem("task"))
    singlewrap.innerHTML = `
    <div class="col-md-6 col-12 border border-2 border-primary">
    <h5>ID</h5>
    <p>${task.id}</p>
    </div>
    <div class="col-md-6 col-12 border border-2 border-primary">
    <h5>Title</h5>
    <p>${task.taskTitle}</p>
    </div>
    <div class="col-md-6 col-12 border border-2 border-primary">
    <h5>Type</h5>
    <p>${task.taskType}</p>
    </div>
    <div class="col-md-6 col-12 border border-2 border-primary">
    <h5>Status</h5>
    <p>${task.status} </p>
    </div>
    <div class="col-md-12 col-12  border border-2 border-primary">
    <h5>Due Date</h5>
    <p>${task.taskDueDate}</p>
    </div>
    <div class="col-md-12 col-12  border border-2 border-primary">
    <h5>Content</h5>
    <p>${task.taskContent}</p>
    </div> `
}






















