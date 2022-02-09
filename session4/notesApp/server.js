const tasks = require("./modules/tasks")

// let task = {title:"t11", phone:"01234567890", email:"t11@test.com", content:"c11"}
// tasks.addTask( "tasks.json", tasks.taskCreator(task))
// tasks.showAllTasks("tasks.json")
// tasks.deleteSingleTask("tasks.json", '99eqq5akkzfh1uqf')
task = {title:"abc", content:"xyz", phone:"1230", email:"b@b.com"}
tasks.editTask("tasks.json","99eqq5akkzfh1uqh",task)
