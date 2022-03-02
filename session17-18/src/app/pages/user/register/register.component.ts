import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  msg:string=""
  apiFlag:boolean=false
  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
  }
  handleRegister(registerForm:NgForm){
    if(registerForm.valid){
      this._auth.register(registerForm.value)
      .subscribe(data=>{
      },
      (err)=>{
        this.msg="error adding user "
        this.apiFlag=false
      },
      ()=>{
        registerForm.resetForm()
        this.msg="data added successfully"
        this.apiFlag=true
      }      
      )
    }

  }
}
