import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveBuiltinComponent } from './directive-builtin.component';

describe('DirectiveBuiltinComponent', () => {
  let component: DirectiveBuiltinComponent;
  let fixture: ComponentFixture<DirectiveBuiltinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveBuiltinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveBuiltinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
