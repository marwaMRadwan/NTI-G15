//npm init --y  - npm i mongodb
// const mongodb = require("mongodb") 
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId
const { MongoClient, ObjectId } = require('mongodb')
const dbUrl = "mongodb://localhost:27017"
const dbName = "g15"
console.log(new ObjectId("620cb207b4b695ae2ebcc1da"))
MongoClient.connect(dbUrl, {}, (err, client) => {
    if(err) return console.log("unable to connect")
    const db = client.db(dbName) 
    // db.collection("user").insertOne(
    //     {name:"omar", age:8},
    //     (e, res)=>{
    //         if(e) return console.log("fe error")
    //         console.log(res.insertedId)
    //         client.close()
    //     })
    // db.collection("user").insertMany(
    //    [ {name:"omar", age:8}, {name:"mazen", age:40}],
    //     (e, res)=>{
    //         if(e) return console.log("fe error")
    //         console.log(res)
    //         client.close()
    //     })
    // db.collection('user')
    // .find() //{name:"marwa",age:60}
    // .toArray((e, res)=>{
    //     if(e) return console.log("error")
    //     console.log(res)
    //     client.close()
    // })
    // db.collection('user')
    // .findOne({ _id: new ObjectId("620cb207b4b695ae2ebcc1da") }, 
    // (e, res)=>{
    //     if(e) return console.log("error")
    //     console.log(res)
    //     client.close()
    // })

    // db.collection('user').deleteOne({ _id: new ObjectId("620cb207b4b695ae2ebcc1da") })
    // .then(res=> {
    //     console.log(res)
    //     client.close()
    // })
    // .catch(e=>{
    //     console.log('error')
    //     client.close()
    // })
    // db.collection('user').deleteMany()
    // .then(res=> {
    //     console.log(res)
    //     client.close()
    // })
    // .catch(e=>{
    //     console.log('error')
    //     client.close()
    // })

})