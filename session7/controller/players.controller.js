const dealWithData = require("./helpers/dealWithData")
const allPlayers = (req,res)=>{
    const allPlayers = dealWithData.readDataFromJSON('./models/data.json')
    res.render("all",
    {
        pageTitle:"all players",
        allPlayers,
        isEmpty: allPlayers.length==0? true: false
    })
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