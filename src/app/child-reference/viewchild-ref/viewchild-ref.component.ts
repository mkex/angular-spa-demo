import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ViewchildRefChildComponent } from './viewchild-ref-child/viewchild-ref-child.component';

@Component({
  selector: 'asd-viewchild-ref',
  templateUrl: './viewchild-ref.component.html',
  styleUrls: ['./viewchild-ref.component.css']
})
export class ViewchildRefComponent implements AfterViewInit {
  
  //1) 자식 컴포넌트 참조(타입으로 참조)
  @ViewChild(ViewchildRefChildComponent) childComponent1: ViewchildRefChildComponent;

  //2) 자식 컴포넌트 참조(템플릿 참조 변수로 참조)
  @ViewChild('child') childComponent2: ViewchildRefChildComponent;

  ngAfterViewInit() {
    //뷰가 초기화 된 이후에 자식 컴포넌트 사용 가능함.
    console.log(this.childComponent1);
    console.log(this.childComponent2);
  }
    
  onSendDataToChild(data: string){
    this.childComponent1.childMethod(data);
    //this.childComponent2.childMethod(data);
  }

}
