import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'asd-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  results: string[];

  constructor(private http: HttpClient) { }

  onHTTP(){
    this.http.get('/api/items').subscribe(
      data => {
        this.results = data['results'];
        console.log(this.results)
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

}
