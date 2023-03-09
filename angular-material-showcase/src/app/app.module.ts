import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatListModule} from '@angular/material/list'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
 

import { ConsultaCreditoCorrentistaComponent } from './consulta-credito-correntista/consulta-credito-correntista.component';
import { MonitorCreditoCorrentistaLayoutComponent } from './monitor/monitor-credito-correntista-layout/monitor-credito-correntista-layout.component';
import { MonitorCreditoCorrentistaPerfilComponent } from './monitor/monitor-credito-correntista-perfil/monitor-credito-correntista-perfil.component';
import { MonitorCreditoCorrentistaOperacaoComponent } from './monitor/monitor-credito-correntista-operacao/monitor-credito-correntista-operacao.component';
import { MonitorCreditoCorrentistaInternasComponent } from './monitor/monitor-credito-correntista-internas/monitor-credito-correntista-internas.component';
import { MonitorCreditoCorrentistaExternasComponent } from './monitor/monitor-credito-correntista-externas/monitor-credito-correntista-externas.component';
import { MonitorCreditoCorrentistaHierarquiaComponent } from './monitor/monitor-credito-correntista-hierarquia/monitor-credito-correntista-hierarquia.component';
import { MonitorCreditoCorrentistaAlertasComponent } from './monitor/monitor-credito-correntista-alertas/monitor-credito-correntista-alertas.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ConsultaCreditoCorrentistaComponent,
    MonitorCreditoCorrentistaLayoutComponent,
    MonitorCreditoCorrentistaPerfilComponent,
    MonitorCreditoCorrentistaOperacaoComponent,
    MonitorCreditoCorrentistaInternasComponent,
    MonitorCreditoCorrentistaExternasComponent,
    MonitorCreditoCorrentistaHierarquiaComponent,
    MonitorCreditoCorrentistaAlertasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatTreeModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
