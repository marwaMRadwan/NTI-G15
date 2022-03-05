import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {DataService} from 'src/app/providers/service/data.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email:new FormControl("x@test.com", [Validators.required, Validators.email]),
    password:new FormControl("19101994Ab**", [Validators.required,
      Validators.minLength(8)])
  })
  constructor(private _data:DataService, private _router:Router) { }

  ngOnInit(): void {
  }
  get email(){return this.loginForm.get("email")}
  get password(){return this.loginForm.get("password")}
msg=""

  login(){
    if(this.loginForm.valid){
      this._data.login(this.loginForm.value).subscribe(
        (res)=>{
          if(res.error){
            this.msg="unauthorized"
          }
          else{
            localStorage.setItem("userToken", `${res.token_type} ${res.access_token}`)
            this._data.isLogin=true
            this._router.navigateByUrl('/')
          }
        }
      )
    }
  }
}
