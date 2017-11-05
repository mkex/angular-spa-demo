import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asd-data-binding-child',
  templateUrl: './data-binding-child.component.html',
  styleUrls: ['./data-binding-child.component.css']
})
export class DataBindingChildComponent {
  @Input() title:string
  
  private _name:string = '';
  @Input()
  set name(name:string){
      this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { 
      return this._name; 
  }

  @Output() childEventEmmitter = new EventEmitter<string>();

  onChildEvent(data:string){
    this.childEventEmmitter.emit(data); 
  }
}
