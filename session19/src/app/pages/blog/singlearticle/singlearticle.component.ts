import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { DataService } from 'src/app/providers/service/data.service';

@Component({
  selector: 'app-singlearticle',
  templateUrl: './singlearticle.component.html',
  styleUrls: ['./singlearticle.component.css']
})
export class SinglearticleComponent implements OnInit {
  id:any
  article :Article={
      "id": 0,
      "title":"",
      "content":"",
      "cat_id": "",
      "image": "",
      "created_at": "",
      "reactions_count": "",
      "department_data": {
        "id": 0,
        "dep_name": ""
      },
      "reactions": [
        {
          "id": 0,
          "article_id": "",
          "user_id": "",
          "user": {
            "id": 0,
            "name": "",
            "image": null
          }
        }
      ],
      "comments": [
        {
          "id":0,
          "article_id": "",
          "user_id": "",
          "comment": "",
          "created_at": "",
          "user": {
            "id": 0,
            "name": "",
            "image": null
          }
        }
      ]
  }
  isLoaded = false
  constructor(private _route:ActivatedRoute, public _data:DataService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params?.['artId']
    this.getArticle(this.id)
  }

  getArticle(id:number){
    this._data.getSingleArticle(id).subscribe(
      (res)=>{
        console.log(res.data)
      this.article=res.data[0]
    },
    (e)=>{},
    ()=>{
      this.isLoaded=true
    }
    )
  }
}
