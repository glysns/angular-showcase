import { Component } from '@angular/core';

import { Router } from '@angular/router';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';



/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

export interface Section {
  name: string;
  updated: Date;
}

export interface Layout {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-consulta-credito-correntista',
  templateUrl: './consulta-credito-correntista.component.html',
  styleUrls: ['./consulta-credito-correntista.component.css']
})
export class ConsultaCreditoCorrentistaComponent {
   
  constructor(private router:Router) {
  }

  displayedColumns: string[] = ['id', 'proponente', 'origem', 'cpfCnpj','vip','garantia','dataInclusao','alcada','usuario','tempoEspera','tempoAnalise','inicioAnalise','acoes'];
  dsTable = new MatTableDataSource<Proposta>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dsTable.paginator = this.paginator;
  }

  selecionar(row:any, evt:any){
    console.log(row);
    this.router.navigate(['/monitor/perfil']);
  }
}

export interface Proposta {
  id: string;
  proponente: string;
  origem: string;
  cpfCnpj: string;
  vip: string;
  garantia: string;
  dataInclusao: string;
  alcada: string;
  usuario: string;
  tempoEspera: string;
  tempoAnalise: string;
  inicioAnalise: string;
}

const ELEMENT_DATA: Proposta[] = [
  {id: '1', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '2', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '3', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '4', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '5', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '6', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '7', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '8', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '9', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '10', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '11', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  {id: '12', proponente: 'ANA PAULA PEREIRA', origem:'AG', cpfCnpj: '005.193.391-00', vip:'SIM',garantia:'SUFOP', dataInclusao:'10/01/1022 15:00:43',alcada:'AN. JUNIOR',usuario:'DIOGSOU', tempoEspera:'00:07:01',tempoAnalise:'13:46:10',inicioAnalise:'07/03/2022 18:55:49' },
  
];
