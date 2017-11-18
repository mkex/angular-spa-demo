import { Component, AfterContentInit, ContentChild, ElementRef } from '@angular/core';
import { ContentchildRefContentchildComponent } from '../contentchild-ref-contentchild/contentchild-ref-contentchild.component';

@Component({
  selector: 'asd-contentchild-ref-child',
  templateUrl: './contentchild-ref-child.component.html',
  styleUrls: ['./contentchild-ref-child.component.css']
})
export class ContentchildRefChildComponent implements AfterContentInit {

  //** ContentChild 참조(타입으로 참조) */
  @ContentChild(ContentchildRefContentchildComponent) 
      contentChildComponent: ContentchildRefContentchildComponent;
      
  //** ContentChild 참조(로컬참조변수로 참조) */
  @ContentChild('myInputBox') inputBox: ElementRef;

  ngAfterContentInit() {
    // contentChild is set
  }

  onClick(){
    // ContentChild 컴포넌트 메서드 호출(값 전달)
    this.contentChildComponent.sendDataToChild('Pass data to ContentChild');

    // ContentChild 요소의 값 액세스
    console.log(this.inputBox.nativeElement.value);
  }

}
