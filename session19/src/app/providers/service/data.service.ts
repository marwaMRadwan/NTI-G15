import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseurl : string = "http://dashboard.roshetah.com/api/"
  langId : number = 1 //2 for arabic
  public imgPath = 'http://dashboard.roshetah.com/storage/app/public/'
  constructor(private _http:HttpClient) { }
getAllCategories(): Observable<any>{
  return this._http.get(`${this.baseurl}LoadArticaleCategory/${this.langId}`)
}
getArticleByCatId(catId:number): Observable<any>{
  return this._http.get(`${this.baseurl}ArticaleBasedOnCatApi/${catId}/${this.langId}/0/10`)
}
getSingleArticle(articleId:any): Observable<any>{
  return this._http.get(`${this.baseurl}SingleBlog/${articleId}/${this.langId}`)
}

// {email:x@test.com,password:19101994Ab**}
login(data:any):Observable<any>{
  return this._http.post(`${this.baseurl}auth/login`, data)
}
// {"article_id" : 1,"comment" : "test comment data"}
userComment(data:any):Observable<any>{
  return this._http.post(`${this.baseurl}auth/UserBlogComment`,data)
}
// {"article_id" : 1
userLike(data:any):Observable<any>{
  return this._http.post(`${this.baseurl}auth/UserBlogLike`,data)
}
}
