import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/providers/service/data.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
myFile : any
myForm=new FormData()
  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  onChangeFile(event:any){
    this.myFile= event.target.files[0]
    console.log(this.myFile)
  }
  uploadMe(d:NgForm){
    this.myForm.append('image', this.myFile, this.myFile.name)
    this.myForm.append('name', d.value.name)
    this._data.addImage(this.myForm).subscribe(
      res=> console.log(res)
    )
  }
}
