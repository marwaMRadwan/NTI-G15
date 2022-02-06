// let var const

// let x = 5
// let x = 3
// let x = 4
// console.log(x)

// let x = 3

// if(true){
//     let x = 6 
//     console.log(x)
// }

// console.log(x)
//break continue
// for(;;){
//     console.log("a")
// }

// while(true){}

//if switch   

//  x y + - * /
// x = prompt("x")
/*
inputs (3)
*/

// let x = getUserInput("please enter x value: ")
// let op = getUserInput("please enter opertaor: ")
// let y = getUserInput("please enter y value: ")
// console.log(getResult( x , y , op))

// function getUserInput(message){
//     return prompt(message)
// }
// function getResult(val1, val2,op){
//     let result
//     switch(op){
//         case "+": result =  val1+val2; break;
//         case "*": result =  val1*val2; break;
//         case "/": result =  val1/val2; break;
//         case "-": result =  val1-val2; break;
//         default: result = "Invalid operator"
//     }
//     return result
// }

// if(true){
//     x()
//     z()
// }

// function x(){ console.log("test")}

// const z= function(){console.log("test 1")}

// const a = () => {}


// object array
// let x = [ 1, "a", false, 5.6]
// x[0]

// let user = {
//     name: "marwa",
//     age:36,
//     gender: "female",
//     getUserData : function(){
//         console.log(this);
//         // console.log(`This user name is ${this.name} and age is ${this.age} and gender is ${this.gender}`);
//     }
// }

// user.getUserData()
// forEach  - filter - find - map - findIndex
// const images = [
//     {
//     albumId: 1,
//     id: 1,
//     title: "accusamus beatae ad facilis cum similique qui sunt",
//     url: "https://via.placeholder.com/600/92c952",
//     thumbnailUrl: "https://via.placeholder.com/150/92c952"
//     },
//     {
//     albumId: 1,
//     id: 2,
//     title: "reprehenderit est deserunt velit ipsam",
//     url: "https://via.placeholder.com/600/771796",
//     thumbnailUrl: "https://via.placeholder.com/150/771796"
//     },
//     {
//     albumId: 1,
//     id: 3,
//     title: "officia porro iure quia iusto qui ipsa ut modi",
//     url: "https://via.placeholder.com/600/24f355",
//     thumbnailUrl: "https://via.placeholder.com/150/24f355"
//     },
//     {
//     albumId: 1,
//     id: 4,
//     title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
//     url: "https://via.placeholder.com/600/d32776",
//     thumbnailUrl: "https://via.placeholder.com/150/d32776"
//     },
//     {
//     albumId: 1,
//     id: 5,
//     title: "natus nisi omnis corporis facere molestiae rerum in",
//     url: "https://via.placeholder.com/600/f66b97",
//     thumbnailUrl: "https://via.placeholder.com/150/f66b97"
//     },
//     {
//     albumId: 1,
//     id: 6,
//     title: "accusamus ea aliquid et amet sequi nemo",
//     url: "https://via.placeholder.com/600/56a8c2",
//     thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
//     },
//     {
//     albumId: 1,
//     id: 7,
//     title: "officia delectus consequatur vero aut veniam explicabo molestias",
//     url: "https://via.placeholder.com/600/b0f7cc",
//     thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
//     },
//     {
//     albumId: 1,
//     id: 8,
//     title: "aut porro officiis laborum odit ea laudantium corporis",
//     url: "https://via.placeholder.com/600/54176f",
//     thumbnailUrl: "https://via.placeholder.com/150/54176f"
//     },
//     {
//     albumId: 1,
//     id: 9,
//     title: "qui eius qui autem sed",
//     url: "https://via.placeholder.com/600/51aa97",
//     thumbnailUrl: "https://via.placeholder.com/150/51aa97"
//     },
//     {
//     albumId: 1,
//     id: 10,
//     title: "beatae et provident et ut vel",
//     url: "https://via.placeholder.com/600/810b14",
//     thumbnailUrl: "https://via.placeholder.com/150/810b14"
//     }
//     ]

// for(let i=0; i<images.length; i++){
//     console.log(`${images[i].id} - ${images[i].title}`)
// }

// images.map(x=>  console.log(`${x.id} - ${x.title}`))
// images.forEach((image, index)=>{
//     console.log(`${index}==>${image.id} - ${image.title}`)
// })

// const x = [11,12,13,14,15,16,17,18,19,110]
// z = images.find( ele=> ele.id<5 ) //x.findIndex( ele=> {return ele==15 } )
// console.log(z)

// element - parent - textContent - classes - attributes  
// const createMyOwnElement = (element, parent, textContent="", classes = "", attributes=[]) =>{
//     try{
//         let myElement = document.createElement(element)
//         parent.appendChild(myElement)
//         if(textContent!="") myElement.textContent=textContent
//         if(classes!="") myElement.classList=classes
//         attributes.forEach(attribute=>{
//             myElement.setAttribute(attribute.key, attribute.val)
//         })
//         return myElement
//     }
//     catch(e){
//         alert("invalid element")
//     }
// }

// taskTypes.forEach( t => {
//     createMyOwnElement("option", tType, t, "", [ {key:"value", val:t} ])
//     // let el = document.createElement("option")
//     // el.textContent = t
//     // el.setAttribute("value", t)
//     // tType.appendChild(el)
// })


const taskTypes = ["t1", "t2", "t3", "t4"]
const taskHeads = ["taskTitle", "taskContent", "taskDueDate", "taskType"]
const createMyOwnElement = (element)=>{
    try{
        let myElement = document.createElement(element.element)
        element.parent.appendChild(myElement)
        if(element.textContent) myElement.textContent=element.textContent
        if(element.classes) myElement.classList=element.classes  // <option class> 
        element.attributes.forEach(attribute=>{
            myElement.setAttribute(attribute.key, attribute.val)
        })
        return myElement
    }
    catch(e){
        console.log(e)
    }
}

taskTypes.forEach(taskType=>{
    let ele= {
        element:"option",
        parent:document.querySelector("#tType"),
        textContent:taskType,
        classes:null,
        attributes:[ {key:"value", val:taskType}]
    }
    createMyOwnElement(ele)
})



const addTask= document.querySelector("#addTask")

addTask.addEventListener("submit", function(e){
    e.preventDefault()
    let task = { id: Date.now() }
    taskHeads.forEach( head => task[head]= addTask.elements[head].value)
    console.log(task)
})



