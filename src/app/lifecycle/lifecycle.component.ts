import { Component, OnInit, OnDestroy, AfterContentInit, 
         AfterViewInit, OnChanges, SimpleChanges, DoCheck, 
         AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'asd-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements 
                                OnInit, OnDestroy,
                                OnChanges, DoCheck,
                                AfterContentInit, AfterViewInit,
                                AfterContentChecked, AfterViewChecked {

  constructor() {
    /** 객체 생성 시점에 호출됨 */
    console.log('constructor called!');
  }

  ngOnInit() {
    /** Called once the component is initialized */
    console.log('OnInit called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    /**  Called after a bound input property changes */
    console.log('OnChanges called!');
    console.log(changes);
  }

  ngDoCheck(): void {
    /**  Called during every change detection run */
    console.log('DoCheck called!');
  }

  ngAfterContentInit(): void {
    /**  Called after content(ng-content) has been projected into view */
    console.log('AfterContentInit called!');
  }

  ngAfterContentChecked(): void {
    /**  Called every time the projected content has been checked */ 
    console.log('AfterContentChecked called!');
  }  

  ngAfterViewInit(): void {
    /**  Called after the component's view(and child views) has been initialized */
    console.log('AfterViewInit called!');
  }                 
                    
  ngAfterViewChecked(): void {
    /**  Called every time the view(and child views) have been checked */
    console.log('AfterViewChecked called!');
  }

  ngOnDestroy(): void {
    // Called once the component is about to be destroyed */
    console.log('OnDestroy called!');
  }

}
