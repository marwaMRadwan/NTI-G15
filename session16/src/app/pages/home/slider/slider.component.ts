import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliders:any[] = [
    "assets/img1.jpg",
    "assets/img2.jpg",
    "assets/img3.jpg",
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
