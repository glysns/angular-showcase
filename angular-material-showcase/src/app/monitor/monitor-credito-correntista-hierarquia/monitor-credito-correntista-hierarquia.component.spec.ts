import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaHierarquiaComponent } from './monitor-credito-correntista-hierarquia.component';

describe('MonitorCreditoCorrentistaHierarquiaComponent', () => {
  let component: MonitorCreditoCorrentistaHierarquiaComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaHierarquiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaHierarquiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaHierarquiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
