import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _auth:AuthService, private _router:Router) { 
    this._auth.me().subscribe(
      user=>{
        this._auth.isLogin=true
        this._auth.user = user.data
      },
      (e)=>{
        this._auth.isLogin=false
        this._auth.user=null
      },
      ()=>{
        this._router.navigateByUrl("/home")
      }
    )

  }

  ngOnInit(): void {
  }
  logout(){
    this._auth.logout().subscribe(
      (data)=>{},
      (err)=>{},
      ()=>{
        this._auth.isLogin=false
        this._auth.user={}
        localStorage.removeItem("g15Token")  
        this._router.navigateByUrl("/login")  
      }
    )
  }
}
