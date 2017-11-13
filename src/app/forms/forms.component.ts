import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'asd-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  user = { name: '', age: '', email: '' }

  onSubmit(){
    console.log(this.user);
  }

  constructor() { }

  ngOnInit() {
  }

}
