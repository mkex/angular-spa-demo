import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildRefComponent } from './contentchild-ref.component';

describe('ContentchildRefComponent', () => {
  let component: ContentchildRefComponent;
  let fixture: ComponentFixture<ContentchildRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
