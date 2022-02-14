const dealWithData = require("./helpers/dealWithData")
const allPlayers = (req,res)=>{
    res.render("all")
}
const addPlayers = (req,res)=>{
    if(req.query.name&&req.query.age){
        const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
        // console.log(req.query)
        allPlayers.push({
            name: req.query.name,
            age:req.query.age
        })
        dealWithData.writeDataToFile('./models/data.json', allPlayers)
        return res.redirect('/')
    }
    res.render('add', {
        pageTitle:"add new player",
        // ...req.query,
        // x:{name:"a", age:"30"}
    })
}
module.exports = {allPlayers, addPlayers}