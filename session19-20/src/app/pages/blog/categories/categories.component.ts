import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { DataService } from 'src/app/providers/service/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  cats :Category[] = []
  isLoaded :boolean = false
  constructor(private _data:DataService) { }

  ngOnInit(): void {
    this.getAllCats()
  }

  getAllCats(){
    this._data.getAllCategories().subscribe(
      (res)=>{
        this.cats=res.data
        console.log(res)
      },
      (e)=>{},
      ()=>{
        this.isLoaded=true
      }
    )
  }
}
