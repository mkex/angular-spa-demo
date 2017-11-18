import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'asd-playground-child',
  templateUrl: './playground-child.component.html',
  styleUrls: ['./playground-child.component.css']
})
export class PlaygroundChildComponent {
  
  @Input() value: number;
  @Output() valueChange = new EventEmitter<any>();

  onChange(){
    this.valueChange.emit(100);
  }

}
