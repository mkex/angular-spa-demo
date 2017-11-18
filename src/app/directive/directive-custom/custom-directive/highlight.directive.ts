import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  //** 하이라이트 색상을 외부에서 설정 가능하도록 함 */
  @Input('myHighlight') highlightColor: string;
  
  //** 생성자를 통해 이 디렉티브가 선언된 곳의 HTML 엘리먼트를 클래스 지역변수로 정의 */
  constructor(private el: ElementRef) {
       this.highlight('gray'); //초기색상 지정
  }

  //** 디렉티브가 (호스트의) 이벤트에 반응하도록 함 */
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('gray');
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
