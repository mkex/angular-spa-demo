import { Injectable } from '@angular/core';

@Injectable()
export class LogService {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }

  url: string;
  url2: string;
 
  warn(msg: any)  { 

    // this.url = window.location.href;
    // this.url2 = document.URL;
    // if(this.url != '') {
    //   console.log(1);
    // }
  
    console.warn(msg); 
  }
}
