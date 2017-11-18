import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[myUnless]'
})
export class UnlessDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    //** condition 변수의 값에 따라 DOM이 추가되거나 제거됨 */
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else if (condition) {
      this.viewContainer.clear();
    }
  }
}
