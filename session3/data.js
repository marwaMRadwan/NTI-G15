//fetch
// const apiURL = "https://jsonplaceholder.typicode.com/photos?_limit=10"
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
// const readApi = async(cb) =>{
//     let data = await fetch(apiURL)
//     let d = await data.json()
//     cb(d)
// }
// readApi(res=> console.log(res))
// console.log(readApi())

// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/images
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/albums
const baseURL = "https://jsonplceholder.typicode.com/"
const endPoints = ["posts", "photos", "users", "albums"]
const btnWrap= document.querySelector("#btnWrap")
const contentWrap= document.querySelector("#contentWrap")
const callApi = async(apiURL, callback) => {
    try{
        const data = await (await fetch(apiURL)).json()
        callback(data, false)
    }
    catch(err){
        callback(false, err)
    }
}
endPoints.forEach(point=>{
    const btn = document.createElement("button")
    btnWrap.appendChild(btn)
    btn.textContent=point
    btn.addEventListener("click", ()=>{
        contentWrap.textContent=""
        callApi(`${baseURL}${point}`, (res, err)=>{
        if(err) {
            div = document.createElement("li")
            div.textContent=err.message
            contentWrap.appendChild(div)
        }
        else{
             res.forEach(d=>{
                div = document.createElement("li")
                div.textContent=d.title
                contentWrap.appendChild(div)
             })
        }
    })
    })
})
