import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UIRouterModule } from "@uirouter/angular";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

const usersState = { name: "users", url: "/users", component: UsersComponent };



@NgModule({
   declarations: [
      AppComponent,
      UsersComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      UIRouterModule.forRoot({ states: [usersState], useHash: true })
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
