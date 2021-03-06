import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/providers/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _data:DataService) { }

  ngOnInit(): void {
    this._data.me().subscribe(res=>{
      if(res.Message!="Please Login First"){
        this._data.user=res
      }
    
    })
  }

}
