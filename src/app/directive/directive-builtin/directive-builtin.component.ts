import { Component } from '@angular/core';

@Component({
  selector: 'asd-directive-builtin',
  templateUrl: './directive-builtin.component.html',
  styleUrls: ['./directive-builtin.component.css']
})
export class DirectiveBuiltinComponent {

  isSpecial:boolean = true;
  canSave:boolean = true;
  isUnchanged:boolean = true;

  /** NgStyle(CSS Style 속성에 직접 스타일 지정) */
  currentStyles = {
    'font-size':   this.isSpecial    ? '24px'   : '12px',
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal'
  };

  /** NgClass(CSS 클래스를 통해 스타일 지정) */
  currentClasses =  {
    'special':  this.isSpecial,
    'saveable': this.canSave,
    'modified': !this.isUnchanged
  };

  //** NgIf로 평가될 불리언 속성 */
  isActive:boolean = true;

  //** NgFor에 사용될 배열 */
  JSlibraries: Array<string> = ['Angualr', 'React.js', 'Vue.js'];

  //** NgSwitch 조건으로 사용될 변수 */
  swtichFlag:string = 'happy';

}
