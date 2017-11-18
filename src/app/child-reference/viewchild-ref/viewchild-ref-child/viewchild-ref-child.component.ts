import { Component } from '@angular/core';

@Component({
  selector: 'asd-viewchild-ref-child',
  templateUrl: './viewchild-ref-child.component.html',
  styleUrls: ['./viewchild-ref-child.component.css']
})
export class ViewchildRefChildComponent {
  
  childProperty: string = 'hi~~~';

  childMethod(data:string){
    this.childProperty = data;
  }
  
}
