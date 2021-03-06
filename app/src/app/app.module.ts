import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UIRouterModule } from "@uirouter/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PicturesComponent } from './pictures/pictures.component';
import {PagerService} from './PagerService'


const usersState = { name: "users", url: "/users", component: UsersComponent };
const picturesState = { name: "pics", url: "/pics", component: PicturesComponent };
const postsState = { name: "posts", url: "/posts/:id", component: PostsComponent };
const signupState = { name: "signup", url: "/signup", component: SignupComponent };
const loginState = { name: "login", url: "/login", component: LoginComponent };
const forgotPassState = { name: "forgot", url: "/forgot", component: ForgotComponent };



@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      UIRouterModule.forRoot({ states: [usersState, postsState,signupState,loginState,forgotPassState,picturesState], useHash: true })
   ],
   declarations: [
      AppComponent,
      UsersComponent,
      PostsComponent,
      LoginComponent,
      SignupComponent,
      ForgotComponent,
      PicturesComponent
   ],
   providers:[PagerService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
