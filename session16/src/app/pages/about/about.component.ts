import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  users:Users[]=[]
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this._data.getUsers().subscribe(data=>{
      console.log(data)
      this.users=data
    })
  }

}
