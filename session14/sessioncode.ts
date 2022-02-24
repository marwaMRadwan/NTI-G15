// let x:number|string = 5
// console.log(typeof x)
// x="marwa"
// console.log(typeof x)

// function test(a:number):number{
//     return a
// }

// let x1 = ():boolean=> {
//     return true
// }

// function num(a:number,b:number):string{
//     return (a + b).toString()
// }
// console.log(num(5 , 9))

//oop => class -> objects
// string => substr split splice ..... index 
//class - constructor - no overloading- access modifiers- readonly -method - object
class User{
    //public private protected
    private name:string
    private age:number
    readonly x="5" //const
    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }
    hello():void{
        console.log(this.name)
    }
    set _name(val:string){
        this.name = val
    }
    get _name(){ return this.name}
}
let u1 = new User("marwa", 36)
u1._name = "mazen"
console.log(u1._name)
u1.hello()
// console.log(u1.age)
// let u2 = new User()
// u2.age=50
// console.log(u2.age)

