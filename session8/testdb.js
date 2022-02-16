const dbcon = require("./dbcon")

dbcon( 'x',(err, db, client)=>{
    if(err) return console.log("err")
    db.collection("user").insertOne(
        {name:"omar", age:8},
        (e, res)=>{
            if(e) return console.log("fe error")
            console.log(res.insertedId)
            client.close()
        })
})
