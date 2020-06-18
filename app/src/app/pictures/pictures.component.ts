import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  pics: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPics();
  }

  getPics() {
    this.http.get('http://localhost:5000/project/pics').subscribe(response => {
      this.pics = response;
      console.log(`response ${JSON.stringify(response[0])}`);
    },error=>{console.log(`error:${error}`)});
  }

}
