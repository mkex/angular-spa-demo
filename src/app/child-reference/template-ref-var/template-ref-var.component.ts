import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'asd-template-ref-var',
  templateUrl: './template-ref-var.component.html',
  styleUrls: ['./template-ref-var.component.css']
})
export class TemplateRefVarComponent {

  onCall1(phoneNumber: string){
    console.log(phoneNumber);
  }

  /** ViewChild로 템플릿 참조 */
  @ViewChild('phone') myPhone: ElementRef;
  onCall2(){
    console.log(this.myPhone.nativeElement.value);
  }

}


