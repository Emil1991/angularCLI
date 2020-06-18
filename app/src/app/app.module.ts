import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UIRouterModule } from "@uirouter/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';

const usersState = { name: "users", url: "/users", component: UsersComponent };
const postsState = { name: "posts", url: "/posts/:id", component: PostsComponent };




@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      UIRouterModule.forRoot({ states: [usersState, postsState], useHash: true })
   ],
   declarations: [
      AppComponent,
      UsersComponent,
      PostsComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
