import { Component } from '@angular/core';

@Component({
  selector: 'asd-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  // Properties
  title: string = 'Data Binding Demo';

  isActive: boolean = false;

  inputData: string ="some typing...";

  // Event Handler
  onInput(event: Event){
    console.log((<HTMLInputElement>event.target).value);
  }

  // 자식 컴포넌트와 상호작용
  childTitle: string = 'Child Component';
  
  onParentEventHandler(data: string){
    console.log(data)
    this.childTitle = data;
  }
  
}

