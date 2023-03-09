import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaAlertasComponent } from './monitor-credito-correntista-alertas.component';

describe('MonitorCreditoCorrentistaAlertasComponent', () => {
  let component: MonitorCreditoCorrentistaAlertasComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaAlertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaAlertasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaAlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
