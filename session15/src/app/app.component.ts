import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'session15';
  x : number = 5
  y : number = 4
  imgSrc = "assets/logo.png"
  content = "<div class='alert alert-primary'>hi </div>"
  hello():string{
    return "hello from ts"
  }
  testEvent(){
    console.log("hello")
    this.x++
  }
  testInput(event:Event){
    // console.log(event.target?['value'])
    let a = event.target as HTMLInputElement
    console.log(a.value)
  }
}
