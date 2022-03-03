import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './pages/blog/articles/articles.component';
import { CategoriesComponent } from './pages/blog/categories/categories.component';
import { Err404Component } from './pages/err404/err404.component';

const routes: Routes = [
  {path:"", component:CategoriesComponent},
  {path:"category/:catId", component:ArticlesComponent},
  {path:"**", component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
