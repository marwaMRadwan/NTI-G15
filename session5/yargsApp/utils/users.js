const dealWithData = require("./dealWithData")
const userData = require('./validation')

const addUser = (args)=> {
    let errors = []
    let user = {}
    try{
        userData.forEach(d=> {
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
const showAll=()=>{
    const users = dealWithData.readDataFromJSON("./db/data.json")
    users.forEach(user=>{
        let u = `id => ${user.id}\n`
        userData.forEach(d=> u+=d.ele+"=>"+user[d.ele] + '\n')
        console.log(u)
    })
}
const addAddress = (data)=>{
    try{
        const users = dealWithData.readDataFromJSON("./db/data.json")
        let userIndex = users.findIndex(u=> u.id==data.id)
        if(userIndex==-1) throw new Error("user not found")
        users[userIndex].addresses.push(
            {
                addrId:Date.now(),
                addrType:data.addrType, 
                addrDetails:data.addrDetails
            })
        dealWithData.writeDataToFile('./db/data.json', users)
        console.log("data added");
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports = {addUser, showAll, addAddress}