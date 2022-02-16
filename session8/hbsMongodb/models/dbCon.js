const MongoClient = require("mongodb").MongoClient
// console.log(process.env.dbUrl)
const con = (cb) => {

    MongoClient.connect(process.env.dbURL, {}, (error, client)=>{
        // console.log("test")

        if(error) return cb(error, false, false)
 
        const db = client.db(process.env.dbName)
        cb(false, client, db)
 
    })
}

module.exports = con