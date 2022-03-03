import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/blog/articles/articles.component';
import { CategoriesComponent } from './pages/blog/categories/categories.component';
import { SinglearticleComponent } from './pages/blog/singlearticle/singlearticle.component';
import { Err404Component } from './pages/err404/err404.component';
import { LoginComponent } from './pages/user/login/login.component';

const routes: Routes = [
  {path:"", component:CategoriesComponent},
  {path:"login", component:LoginComponent},
  // {path:"category/:catId", component:ArticlesComponent},
  // {path:"category/article/artId", component:ArticlesComponent},
  {path:"category", children:[
    {path:":catId", component:ArticlesComponent},
    {path:"article/:artId", component:SinglearticleComponent},
  ]},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
