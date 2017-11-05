import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentchildRefContentchildComponent } from './contentchild-ref-contentchild.component';

describe('ContentchildRefContentchildComponent', () => {
  let component: ContentchildRefContentchildComponent;
  let fixture: ComponentFixture<ContentchildRefContentchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentchildRefContentchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentchildRefContentchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
