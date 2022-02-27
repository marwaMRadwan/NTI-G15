import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'session15';
  // x : number = 5
  // y : number = 4
  // imgSrc:string = "assets/logo.png"
  // content:string = "<div class='alert alert-primary'>hi </div>"
  // hello():string{
  //   return "hello from ts"
  // }
  // testEvent():void{
  //   console.log("hello")
  //   this.x++
  // }
  // testInput(event:Event):void{
  //   console.log(event)
  //   // console.log(event.target?['value'])
  //   let a = event.target as HTMLInputElement
  //   console.log(a.value)
  // }
  // testInput1(event:any):void{
  //   // console.log(event.target?['value'])
  //   let a = event.target.value
  //   console.log(a)
  // }
  // testVal:string=""
  // data : any[] =[
  //   {
  //   albumId: 1,
  //   id: 1,
  //   title: "accusamus beatae ad facilis cum similique qui sunt",
  //   url: "https://via.placeholder.com/600/92c952",
  //   thumbnailUrl: "https://via.placeholder.com/150/92c952"
  //   },
  //   {
  //   albumId: 1,
  //   id: 2,
  //   title: "reprehenderit est deserunt velit ipsam",
  //   url: "https://via.placeholder.com/600/771796",
  //   thumbnailUrl: "https://via.placeholder.com/150/771796"
  // ,x:[1,2,3]  
  // },
  //   {
  //   albumId: 1,
  //   id: 3,
  //   title: "officia porro iure quia iusto qui ipsa ut modi",
  //   url: "https://via.placeholder.com/600/24f355",
  //   thumbnailUrl: "https://via.placeholder.com/150/24f355"
  //   },
  //   {
  //   albumId: 1,
  //   id: 4,
  //   title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
  //   url: "https://via.placeholder.com/600/d32776",
  //   thumbnailUrl: "https://via.placeholder.com/150/d32776"
  //   },
  //   {
  //   albumId: 1,
  //   id: 5,
  //   title: "natus nisi omnis corporis facere molestiae rerum in",
  //   url: "https://via.placeholder.com/600/f66b97",
  //   thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  //   },
  //   {
  //   albumId: 1,
  //   id: 6,
  //   title: "accusamus ea aliquid et amet sequi nemo",
  //   url: "https://via.placeholder.com/600/56a8c2",
  //   thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
  //   },
  //   {
  //   albumId: 1,
  //   id: 7,
  //   title: "officia delectus consequatur vero aut veniam explicabo molestias",
  //   url: "https://via.placeholder.com/600/b0f7cc",
  //   thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
  //   },
  //   {
  //   albumId: 1,
  //   id: 8,
  //   title: "aut porro officiis laborum odit ea laudantium corporis",
  //   url: "https://via.placeholder.com/600/54176f",
  //   thumbnailUrl: "https://via.placeholder.com/150/54176f"
  //   },
  //   {
  //   albumId: 1,
  //   id: 9,
  //   title: "qui eius qui autem sed",
  //   url: "https://via.placeholder.com/600/51aa97",
  //   thumbnailUrl: "https://via.placeholder.com/150/51aa97"
  //   },
  //   {
  //   albumId: 1,
  //   id: 10,
  //   title: "beatae et provident et ut vel",
  //   url: "https://via.placeholder.com/600/810b14",
  //   thumbnailUrl: "https://via.placeholder.com/150/810b14"
  //   }
  //   ]
  // btnText:string= "show"
  // status:boolean=false
  // showHide():void {
  //   this.btnText=="show"? this.btnText="hide": this.btnText="show"
  //   this.status = !this.status
  // }
  // moNum : number = 1
  // x = ["monkey","rooster","dog","big","rat","ox","tiiger","rabbit","dragon","snake","horse","sheep"]
  // yOfBirth: number = 2000
  data: any[] = [
    {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
    },
    {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
    },
    {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
    },
    {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
    },
    {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
    },
    {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
    },
    {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
    },
    {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
    },
    {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
    },
    {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
    },
    {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true
    },
    {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true
    },
    {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false
    },
    {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true
    },
    {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true
    }
    ]
    mainData = this.data  
    serKey:string=""
  filterData(){
    this.data = this.mainData.filter(p=>{
      return p.title.includes(this.serKey)
    })
  }
}