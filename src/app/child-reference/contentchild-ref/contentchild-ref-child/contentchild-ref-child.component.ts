import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { ContentchildRefContentchildComponent } from '../contentchild-ref-contentchild/contentchild-ref-contentchild.component';

@Component({
  selector: 'asd-contentchild-ref-child',
  templateUrl: './contentchild-ref-child.component.html',
  styleUrls: ['./contentchild-ref-child.component.css']
})
export class ContentchildRefChildComponent implements AfterContentInit {

  @ContentChild(ContentchildRefContentchildComponent) 
      contentChildComponent: ContentchildRefContentchildComponent;
      
  @ContentChild('myInputBox') inputBox: ElementRef;

  ngAfterContentInit() {
    // contentChild is set
  }

  onClick(){
    this.contentChildComponent.sendDataToChild('Pass data to ContentChild');

    console.log(this.inputBox.nativeElement.value);
  }

}
