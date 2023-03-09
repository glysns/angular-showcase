import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorCreditoCorrentistaLayoutComponent } from './monitor-credito-correntista-layout.component';

describe('MonitorCreditoCorrentistaLayoutComponent', () => {
  let component: MonitorCreditoCorrentistaLayoutComponent;
  let fixture: ComponentFixture<MonitorCreditoCorrentistaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorCreditoCorrentistaLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorCreditoCorrentistaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
