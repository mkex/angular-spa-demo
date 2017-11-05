import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildRefChildComponent } from './contentchild-ref-child.component';

describe('ContentchildRefChildComponent', () => {
  let component: ContentchildRefChildComponent;
  let fixture: ComponentFixture<ContentchildRefChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildRefChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildRefChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
