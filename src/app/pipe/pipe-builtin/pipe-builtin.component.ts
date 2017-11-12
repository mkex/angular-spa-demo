import { Component } from '@angular/core';

@Component({
  selector: 'asd-pipe-builtin',
  templateUrl: './pipe-builtin.component.html',
  styleUrls: ['./pipe-builtin.component.css']
})
export class PipeBuiltinComponent {
  birthday = Date.now();

  price = 1000;

  myArray: string[] = ['a', 'b', 'c', 'd'];
}
