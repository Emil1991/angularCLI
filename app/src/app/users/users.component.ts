import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PagerService} from '../PagerService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  pager: any = {};
  pagedUsers: any[];

  constructor(private http: HttpClient, private pagerService: PagerService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.http.get('http://localhost:5000/project').subscribe(response => {
      this.users = response;
      console.log(`response ${JSON.stringify(response[0])}`);
      this.setPage(1);
    },error=>{console.log(`error:${error}`)});
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.users.length, page);

    // get current page of items
    this.pagedUsers = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
