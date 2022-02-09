const dealWithJson = require('./dealWithJson')
const chalk = require("chalk")
const uniqid = require('uniqid')

const taskCreator = (task) =>{
    try{
        const d = new Date();
        let { title, content, phone, email } = task
        task = {
            // ...task, 
            title,
            content,
            phone,
            email,
            id:uniqid(), 
            addedAt:`${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()}`
        }
        return task    
    }
    catch(e){
        console.log(e)
    }
}
//add 
const addTask = ( fileName, task ) =>{
    try{
        const data = dealWithJson.readDataFromJSON(fileName)
        data.push(task)
        dealWithJson.writeDataToFile(fileName, data)
        console.log(chalk.bgGreen.white('data added successfully'))
    }
    catch(err){
        console.log(chalk.bgRed.white('Error Adding Data'))
    }
}
//show all
const showAllTasks = ( fileName ) =>{
    const tasks = dealWithJson.readDataFromJSON(fileName)
    tasks.forEach(task=>{
        console.log(`${task.id}-${task.title}-${task.content}-${task.addedAt}-${task.phone}-${task.email}`)
    })
}
//delete all
const deleteAllTasks=( fileName)=>{
    dealWithJson.writeDataToFile(fileName, [])
}
const findTaskIndex = (tasks, id)=>{
   return tasks.findIndex(task=>id==task.id)
}
//show single
const singleTask = (fileName, id) => {
    try{
        const tasks = dealWithJson.readDataFromJSON(fileName)
        let index = findTaskIndex(tasks, id)
        console.log(tasks[index])    
    }
    catch(e){
        console.log("not found")
    }
}
// edit
const editTask = (fileName, id, task ) =>{
    try{
        const tasks= dealWithJson.readDataFromJSON(fileName)
        const index = findTaskIndex(tasks,id)
        console.log(tasks[index])
        const keys =Object.keys(task)
        keys.forEach(k=> tasks[index][k]= task[k])
        console.log(tasks[index])
        dealWithJson.writeDataToFile("tasks.json", tasks)
    }
    catch(e){
        console.log(e.message)
    }
}
//delete single
const deleteSingleTask=(fileName, id)=>{
    try{
        let tasks = dealWithJson.readDataFromJSON(fileName)
        let index= findTaskIndex(tasks, id)
        if(index==-1) throw new Error()
        tasks.splice(index, 1)
        dealWithJson.writeDataToFile(fileName, tasks)
        console.log("deleted")
    }
    catch(e){
        console.log("not found")
    }
}

module.exports = {
    addTask, 
    showAllTasks, 
    singleTask, 
    editTask, 
    deleteAllTasks, 
    deleteSingleTask,
    taskCreator
}