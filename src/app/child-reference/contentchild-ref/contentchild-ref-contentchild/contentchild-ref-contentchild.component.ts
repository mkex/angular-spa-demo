import { Component } from '@angular/core';

@Component({
  selector: 'asd-contentchild-ref-contentchild',
  templateUrl: './contentchild-ref-contentchild.component.html',
  styleUrls: ['./contentchild-ref-contentchild.component.css']
})
export class ContentchildRefContentchildComponent {

  childProperty:string = 'ContentChild Value';
  
  sendDataToChild(value:string){
    this.childProperty = value;
  }

}
