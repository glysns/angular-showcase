import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-monitor-credito-correntista-layout',
  templateUrl: './monitor-credito-correntista-layout.component.html',
  styleUrls: ['./monitor-credito-correntista-layout.component.css']
})
export class MonitorCreditoCorrentistaLayoutComponent {
  constructor(private router:Router) {
  }

  exibirPerfil(){
    this.router.navigate(['/monitor/perfil']);
  }
  exibirAlertas(){
    this.router.navigate(['/monitor/alertas']);
  }
}
