const dealWithData = require("./dealWithData")
userData = require('./validation')

const addUser = (args)=> {
    let errors = []
    let user = {}
    try{
        userData.forEach(d=> {
            // console.log(d.invalid(args[d.ele]))
            if(d.invalid(args[d.ele])) errors.push(d.invalid(args[d.ele]))
            if(!d.default) return user[d.ele]=args[d.ele]
            user[d.ele] = d.default
        })
        if(errors.length>0) throw new Error(errors)
        const users = dealWithData.readDataFromJSON("./db/data.json")
        users.length == 0 ? user.id=1: user.id = users[users.length-1].id+1
        users.push(user)
        dealWithData.writeDataToFile("./db/data.json", users)    
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {addUser}