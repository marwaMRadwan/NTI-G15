const dealWithData = require("./dealWithData")
userData = [
    {ele:"name", default:false},
    {ele:"phone", default:false},
    {ele:"age", default:false},
    {ele:"addresses", default:[]},
    {ele:"email", default:false},
    {ele:"url",default:false},
    {ele:"addedAt",default:dealWithData.timeFormatter(new Date())},
    {ele:"updatedAt",default:dealWithData.timeFormatter(new Date())}
]

const addUser = (args)=> {
    let user = {}
    userData.forEach(d=> {
        if(!d.default) return user[d.ele]=args[d.ele]
        user[d.ele] = d.default
    })
    const users = dealWithData.readDataFromJSON("./db/data.json")
    users.length == 0 ? user.id=1: user.id = users[users.length-1].id+1
    users.push(user)
    dealWithData.writeDataToFile("./db/data.json", users)
}

module.exports = {addUser}