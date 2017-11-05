import { Component } from '@angular/core';

@Component({
  selector: 'asd-directive-builtin',
  templateUrl: './directive-builtin.component.html',
  styleUrls: ['./directive-builtin.component.css']
})
export class DirectiveBuiltinComponent {

  isSpecial:boolean = true;
  canSave:boolean = true;
  isUnchanged:boolean = false;

  currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };

  currentClasses =  {
    'saveable': this.canSave,
    'modified': !this.isUnchanged,
    'special':  this.isSpecial
  };

  isActive:boolean = true;

  JSlibraries: Array<string> = ['Angualr', 'React.js', 'Vue.js'];

  swtichFlag:string = 'happy';

}
