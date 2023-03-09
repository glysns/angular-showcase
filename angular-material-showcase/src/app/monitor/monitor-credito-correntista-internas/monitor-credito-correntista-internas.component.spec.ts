import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaInternasComponent } from './monitor-credito-correntista-internas.component';

describe('MonitorCreditoCorrentistaInternasComponent', () => {
  let component: MonitorCreditoCorrentistaInternasComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaInternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaInternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaInternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
