import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTdComponent } from './forms-td.component';

describe('FormsTdComponent', () => {
  let component: FormsTdComponent;
  let fixture: ComponentFixture<FormsTdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsTdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsTdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
