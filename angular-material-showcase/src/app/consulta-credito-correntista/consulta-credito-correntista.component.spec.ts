import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCreditoCorrentistaComponent } from './consulta-credito-correntista.component';

describe('ConsultaCreditoCorrentistaComponent', () => {
  let component: ConsultaCreditoCorrentistaComponent;
  let fixture: ComponentFixture<ConsultaCreditoCorrentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaCreditoCorrentistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaCreditoCorrentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
