import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaPerfilComponent } from './monitor-credito-correntista-perfil.component';

describe('MonitorCreditoCorrentistaPerfilComponent', () => {
  let component: MonitorCreditoCorrentistaPerfilComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
