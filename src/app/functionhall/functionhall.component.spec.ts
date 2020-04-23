import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionhallComponent } from './functionhall.component';

describe('FunctionhallComponent', () => {
  let component: FunctionhallComponent;
  let fixture: ComponentFixture<FunctionhallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionhallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionhallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
