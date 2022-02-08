//object oriented language => java, c++, python
// object based // json object notation
// const fun = () => {
//     return function(){
//         console.log("hello")
//     }
// }

// console.log(fun())
// fun()()
// let t = fun()   //function
// const x = function(){
//     console.log("hello")
// }
// x()
//clouser
// const c1 = () =>{
//     const x = 5
//     return {
//         x,
//         hello(){ console.log("hello")},
//         hi(){ console.log("hi")}
//     }
// }
// const c =  c1()
// const c = c1()
// c.x
// c.hello()
// c.hi()
// const myClouser = (val1, val2)=>{
//     return{
//         add(){return val1+val2},
//         sub(){return val1-val2},
//         mul(){return val1*val2}
//     }
// }
// const x = myClouser(2,3)
// console.log(x.add())
// console.log(x.sub())
// console.log(x.mul())

//callback
// function addEventListner(event, cb){
//     function b(){
//         function z(){
//             function w (){
//                 cb( e)
//             }
//         }
//     }
// }

// c(5, (z)=>{})

// const checkMyData = (val, cb) =>{
//     if(typeof val=="number") cb("a number", false)
//     else cb(false, "not a number")
// }

// checkMyData("hdgvhgb", function(res, error){
//     if(res) console.log(res)
//     else console.log(error)
// })

// function del(){
//     console.log("del")
// }
// checkMyData("test", ()=> del())

// console.log(1)
// setTimeout(()=>{console.log(2)},2000) 
// console.log(3) 
// setTimeout(()=>{console.log(4)},1000)
// setTimeout(()=>{console.log(5)},1000)
// setTimeout(()=>{console.log(6)},1000)

//promises
const myPro = (val) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            typeof val=="number"? resolve(val*2) : reject("not a number")    
        }
            ,5000
        )
    })
}
myPro("a")
.then(res=> console.log(res))
.catch(err=> console.log(err))
console.log(1)
// console.log(myPro(5))
// console.log(1)
//then catch
//async await
























