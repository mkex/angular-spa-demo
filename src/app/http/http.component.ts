import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'asd-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent {
  results: string[];

  //** HTTPClient 객체를 DI(의존성 주입) 받음 */
  constructor(private http: HttpClient) { }

  onHTTP(){
    // RxJS의 subscribe로 http 요청 결과를 구독함
    this.http.get('/api/items').subscribe(
      data => {
        this.results = data['results'];
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

}
