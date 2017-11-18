import { Component } from '@angular/core';

@Component({
  selector: 'asd-directive-custom',
  templateUrl: './directive-custom.component.html',
  styleUrls: ['./directive-custom.component.css']
})
export class DirectiveCustomComponent {

  color: string = 'green';

  condition: boolean = false;

}
