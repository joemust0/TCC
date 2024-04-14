import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorCalcComponent } from './motor-calc.component';

describe('MotorCalcComponent', () => {
  let component: MotorCalcComponent;
  let fixture: ComponentFixture<MotorCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotorCalcComponent]
    });
    fixture = TestBed.createComponent(MotorCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
