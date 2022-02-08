//fetch
const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
// let data = fetch(apiURL)
// console.log(data)
// data
// .then(res=>{
//     // console.log(res)
//     res.json().then(
//         d=> console.log(d)
//     )
// })
// .catch(err=> console.log(err))
const readApi = async(cb) =>{
    let data = await fetch(apiURL)
    let d = await data.json()
    cb(d)
}

readApi(d=>console.log(d))