import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalExtratoComponent } from './bal-extrato.component';

describe('BalExtratoComponent', () => {
  let component: BalExtratoComponent;
  let fixture: ComponentFixture<BalExtratoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalExtratoComponent]
    });
    fixture = TestBed.createComponent(BalExtratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
