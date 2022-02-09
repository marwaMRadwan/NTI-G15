//build-in
const fs = require("fs")
//npm
const chalk = require("chalk")
//my own
const writeDataToFile = (fileName, data) =>{
    try{
        if(!Array.isArray(data)) throw new Error("invalid data type")
        fs.writeFileSync(fileName, JSON.stringify(data))
        console.log(chalk.green("data added"))
    }
    catch(err){
        console.log(chalk.red(err.message))
    }
}
const readDataFromJSON = (fileName) =>{
    let data
    try{
        data = JSON.parse(fs.readFileSync(fileName))
    }
    catch(e){
        console.log(chalk.red("data reset"))
        data = []
    }
    return data
}
module.exports = {
    writeDataToFile,
    readDataFromJSON
}
