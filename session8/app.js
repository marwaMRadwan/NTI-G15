//npm init --y
//npm i mongodb
// const mongodb = require("mongodb")
// const MongoClient = mongodb.MongoClient

const {MongoClient} = require('mongodb')

const dbUrl = "mongodb://localhost:27017"
const dbName = "g15"
MongoClient.connect(dbUrl, {}, (err, client) => {
    if(err) return console.log("unable to connect")
    const db = client.db(dbName) 
    db.collection("user").insertOne(
        {name:"omar", age:8},
        (e, res)=>{
            if(e) return console.log("fe error")
            console.log("data added")
            client.close()
        }
)
})