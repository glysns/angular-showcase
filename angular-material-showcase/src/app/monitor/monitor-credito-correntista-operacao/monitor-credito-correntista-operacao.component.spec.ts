import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaOperacaoComponent } from './monitor-credito-correntista-operacao.component';

describe('MonitorCreditoCorrentistaOperacaoComponent', () => {
  let component: MonitorCreditoCorrentistaOperacaoComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaOperacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaOperacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaOperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
