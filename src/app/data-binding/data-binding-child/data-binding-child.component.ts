import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asd-data-binding-child',
  templateUrl: './data-binding-child.component.html',
  styleUrls: ['./data-binding-child.component.css']
})
export class DataBindingChildComponent {
  //** 프로퍼티 바인딩을 위한 @Input 속성 정의(커스텀 프로퍼티) */
  @Input() title:string
  
  //** getter, setter와 함께 @Input 속성 정의 */
  private _name:string = '';
  @Input()
  set name(name:string){
      this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { 
      return this._name; 
  }

  /** 이벤트 바인딩을 위해 @Output 속성 정의(커스텀 이벤트) */
  @Output() childEventEmmitter = new EventEmitter<string>();

  onChildEvent(data:string){
    // 부모 컴포넌트로 이벤트를 전파한다.
    this.childEventEmmitter.emit(data); 
  }
}
