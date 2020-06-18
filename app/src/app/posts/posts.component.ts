import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transition } from '@uirouter/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private http: HttpClient, private trans: Transition) {
    var params = trans.params();
    console.log(`params: ${JSON.stringify(params)}`)
   }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.http.get(`http://localhost:5000/project/posts/${this.trans.params().id}`).subscribe(response => {
      this.posts = response;
      console.log(`response ${JSON.stringify(response[0])}`);
    },error=>{console.log(`error:${error}`)});
  }

}
