// // let x:number|string = 5
// // console.log(typeof x)
// // x="marwa"
// // console.log(typeof x)

// // function test(a:number):number{
// //     return a
// // }

// // let x1 = ():boolean=> {
// //     return true
// // }

// // function num(a:number,b:number):string{
// //     return (a + b).toString()
// // }
// // console.log(num(5 , 9))

// //oop => class -> objects
// // string => substr split splice ..... index 
// //class - constructor - no overloading- access modifiers- readonly -method - object
// class User{
//     //public private protected
//     private name:string
//     private age:number
//     readonly x="5" //const
//     constructor(name:string, age:number){
//         this.name = name
//         this.age = age
//     }
//     hello():void{
//         console.log(this.name)
//     }
//     set _name(val:string){
//         this.name = val
//     }
//     get _name(){ return this.name}
// }
// let u1 = new User("marwa", 36)
// u1._name = "mazen"
// console.log(u1._name)
// u1.hello()
// // console.log(u1.age)
// // let u2 = new User()
// // u2.age=50
// // console.log(u2.age)

// //inheritance
// /* 
// class User => name, age, add
// class teacher => name, age, add, sal
// class student=> name, age, add, grades
// */

// class User{
//     private static count = 0 
//     name:string ="a"
//     protected age:number
//     address: string[]
//     constructor(name:string, age:number, address:string[]){
//         this.name=name
//         this.age=age
//         this.address=address
//         User.count++
//     }
//     hello(){
//         console.log('hello')
//     }
//     static register(){

//     }
// }

// class Teacher extends User{
//     sal:number
//     constructor(name:string, age:number, address:string[], sal:number){
//         super(name, age, address)
//         this.sal = sal
//     }
//     hello(){
//         console.log('hi')
//         console.log(this.age)
//     }
// }
// let t1 = new Teacher("marwa", 36, [], 1000)
// // console.log(t1.name)
// t1.hello()

// let u1 = new User("m",2,[])
// let u2 = new User("m",2,[])


/*
add gradee to grade 5
show student
*/
interface Grade{
    subName: string
    subGrade:number
}

class User{
    protected name: string
    protected age:number
    constructor(name:string, age:number){
        this.name=name
        this.age=age
    }
    set _name(val:string){ this.name=val}
    set _age(val:number){ this.age=val}
    get _name(){ return this.name}
    get _age(){ return this.age}
    showUser(){
        return `
name: ${this.name} 
age: ${this.age}`
    }
}
class Student extends User{
    private grades : Grade[] 
    constructor(name:string, age:number, grades:Grade[]=[]){
        super(name, age)       
        this.grades=grades
    }
    set _grades(val:Grade[]){ this._grades= val}
    get _grades(){ return this._grades }
    showStudent(){
        let grades =`
grades`
        this.grades.forEach(g=>{
            grades+= `
subName:${g.subName} - grade: ${g.subGrade}
            `
        })
        return `${super.showUser()} - ${grades}`
    }
    addGrade(subName:string, subGrade:number){
        this.grades.push({subName, subGrade})
    }
}
let s1 = new Student("marwa", 36)
s1.addGrade("math", 120)
s1.addGrade("arabic", 120)
s1.addGrade("eng", 120)
s1.addGrade("comp", 120)
console.log(s1.showStudent())

interface X{
    name?:string
    age:number
    showAll(a:number, b:number):number
}

abstract class Y{
    abstract hello():void
}

let a:X = {
    name:"a", age:30, showAll(x,y){return x+y}
}

class Z extends Y{
    hello():void{console.log("hello")}
}




