import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import {DataService} from 'src/app/providers/service/data.service'
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  id:any
  articles :Article[] = []
  constructor(private _route:ActivatedRoute, public _data:DataService) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params?.['catId']
    // this.id = this._route.snapshot.paramMap.get('catId')
    // this._route.paramMap.subscribe(params=>{
    //   this.id= params.get('catId')
    // })
    this.getArticle(this.id)
  }

  getArticle(id:number){
    this._data.getArticleByCatId(id).subscribe(
      (res)=>{
        console.log(res.data)
      this.articles=res.data
    },
    (e)=>{},
    ()=>{}
    )
  }
}
