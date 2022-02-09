const dealWithJson = require('./dealWithJson')
const chalk = require("chalk")
const uniqid = require('uniqid')

const taskCreator = (task) =>{
    try{
        const d = new Date();
        let { title, content, phone, email } = task
        task = {
            // ...task, 
            title:title,
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
//show single
const singleTask = () => {}
// edit
const editTask = () =>{}
//delete all
 const deleteAllTasks=()=>{}
//delete single
const deleteSingleTask=()=>{}
module.exports = {addTask, showAllTasks, singleTask, editTask, deleteAllTasks, deleteSingleTask,taskCreator}