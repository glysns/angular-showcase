import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaExternasComponent } from './monitor-credito-correntista-externas.component';

describe('MonitorCreditoCorrentistaExternasComponent', () => {
  let component: MonitorCreditoCorrentistaExternasComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaExternasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaExternasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaExternasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
