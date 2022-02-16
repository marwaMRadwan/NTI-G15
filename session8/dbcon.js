const { MongoClient } = require('mongodb')
const dbUrl = "mongodb://localhost:27017"
// const dbName = "g15"
const myConnection = (dbName, cb) =>{
MongoClient.connect(dbUrl, {}, (err, client) => {
    if(err) return cb("cann't connect", false, false)
    const db = client.db(dbName) 
    cb(false, db, client)
    })
}

module.exports = myConnection