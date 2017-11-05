import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildRefChildComponent } from './viewchild-ref-child.component';

describe('ViewchildRefChildComponent', () => {
  let component: ViewchildRefChildComponent;
  let fixture: ComponentFixture<ViewchildRefChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildRefChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildRefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
