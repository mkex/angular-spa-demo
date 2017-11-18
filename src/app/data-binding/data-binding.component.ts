import { Component } from '@angular/core';

@Component({
  selector: 'asd-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  //** 컴포넌트 속성 정의(프로퍼티) */
  title: string = 'Data Binding';
  isActive: boolean = true;
  inputData: string ="some typing...";

  //** 이벤트 처리 함수(Event Handler) 정의 */ 
  onInput(event: Event){
    console.log((<HTMLInputElement>event.target).value);
  }







  //** 자식 컴포넌트와 상호작용 */
  childTitle: string = 'Child Component';
  
  onParentEventHandler(data: string){
    this.childTitle = data;
  }
  
}

