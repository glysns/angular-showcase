import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

 

import {ConsultaCreditoCorrentistaComponent} from './consulta-credito-correntista/consulta-credito-correntista.component';

import {MonitorCreditoCorrentistaLayoutComponent} from './monitor/monitor-credito-correntista-layout/monitor-credito-correntista-layout.component';

import {MonitorCreditoCorrentistaAlertasComponent} from './monitor/monitor-credito-correntista-alertas/monitor-credito-correntista-alertas.component';

import {MonitorCreditoCorrentistaPerfilComponent} from './monitor/monitor-credito-correntista-perfil/monitor-credito-correntista-perfil.component';

import {MonitorCreditoCorrentistaOperacaoComponent} from './monitor/monitor-credito-correntista-operacao/monitor-credito-correntista-operacao.component';

import {MonitorCreditoCorrentistaInternasComponent} from './monitor/monitor-credito-correntista-internas/monitor-credito-correntista-internas.component';

import {MonitorCreditoCorrentistaExternasComponent} from './monitor/monitor-credito-correntista-externas/monitor-credito-correntista-externas.component';

import {MonitorCreditoCorrentistaHierarquiaComponent} from './monitor/monitor-credito-correntista-hierarquia/monitor-credito-correntista-hierarquia.component';

const routes: Routes = [

  {path:'', component:ConsultaCreditoCorrentistaComponent},

  {path:'monitor', component:MonitorCreditoCorrentistaLayoutComponent,

    children:[

      {path:'alertas', component:MonitorCreditoCorrentistaAlertasComponent},

      {path:'perfil', component:MonitorCreditoCorrentistaPerfilComponent},

      {path:'operacao', component:MonitorCreditoCorrentistaOperacaoComponent},

      {path:'internas', component:MonitorCreditoCorrentistaInternasComponent},

      {path:'externas', component:MonitorCreditoCorrentistaExternasComponent},

      {path:'hierarquia', component:MonitorCreditoCorrentistaHierarquiaComponent},

    ]

  }

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }

 