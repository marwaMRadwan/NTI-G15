import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth:AuthService) { }

  ngOnInit(): void {
    this._auth.me().subscribe(data=>console.log(data))
  }

}
