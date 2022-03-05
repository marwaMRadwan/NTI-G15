import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/blog/categories/categories.component';
import { ArticlesComponent } from './pages/blog/articles/articles.component';
import { SinglearticleComponent } from './pages/blog/singlearticle/singlearticle.component';
import { NavbarComponent } from './pages/shared/navbar/navbar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { Err404Component } from './pages/err404/err404.component';
import { LoginComponent } from './pages/user/login/login.component';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { AddImageComponent } from './pages/user/add-image/add-image.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ArticlesComponent,
    SinglearticleComponent,
    NavbarComponent,
    FooterComponent,
    Err404Component,
    LoginComponent,
    AddImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
