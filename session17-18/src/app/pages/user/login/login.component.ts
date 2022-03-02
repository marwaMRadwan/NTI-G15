import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSubmitted = false
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password:new FormControl('', [Validators.minLength(3), Validators.maxLength(20)])
  })
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
  constructor() { }

  ngOnInit(): void {
  }
  login(){
    this.isSubmitted=true
    console.log(this.loginForm.value)
  }
}
