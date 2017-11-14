import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChild2Component } from './state-child2.component';

describe('StateChild2Component', () => {
  let component: StateChild2Component;
  let fixture: ComponentFixture<StateChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
