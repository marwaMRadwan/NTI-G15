const https = require("https")
const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
const apiRequest = (cb)=>{
    const request = https.request(apiURL, (response)=>{
        let d=""
        response.on('data', (part)=>{
            // console.log(part.toString())
            // console.log("*************")
            d+=part.toString()
        })
        response.on('end', ()=>{
            cb(JSON.parse(d), false)
        })
    })
    request.on('error', (err)=> cb(false, err.message))
    request.end()
}
module.exports = apiRequest
// app.listen(3000)