import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildRefComponent } from './viewchild-ref.component';

describe('ViewchildRefComponent', () => {
  let component: ViewchildRefComponent;
  let fixture: ComponentFixture<ViewchildRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewchildRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewchildRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
