import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundChildComponent } from './playground-child.component';

describe('PlaygroundChildComponent', () => {
  let component: PlaygroundChildComponent;
  let fixture: ComponentFixture<PlaygroundChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
