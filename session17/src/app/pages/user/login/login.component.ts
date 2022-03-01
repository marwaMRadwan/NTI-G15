import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
d :any={
  email:"",
  password:""
}
  constructor() { }

  ngOnInit(): void {
  }
login(data:NgForm){
  data.valid
  data.invalid
  data.submitted
  data.value
}
}
