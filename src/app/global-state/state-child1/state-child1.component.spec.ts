import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateChild1Component } from './state-child1.component';

describe('StateChild1Component', () => {
  let component: StateChild1Component;
  let fixture: ComponentFixture<StateChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
