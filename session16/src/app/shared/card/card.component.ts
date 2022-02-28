import { Component, OnInit, Input } from '@angular/core';
import { Images } from 'src/app/models/images';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() myService:any 
  // = {
  //   albumId: 0,
  //   id: 0,
  //   title:"",
  //   url: "",
  //   thumbnailUrl: ""
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
