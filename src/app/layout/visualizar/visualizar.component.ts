import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  lat = -22.9311594;
  long = -43.3584189;

  localizacoesMap: Map<string, string>;
  data: string;

  minhasLocalizacoes = [
    {
      nome: 'Lemobs',
      lat: -22.8657187,
      long: -43.2211524
    },
    {
      nome: 'CCBB',
      lat: -22.9010769,
      long: -43.1787826
    },
    {
      nome: 'INFNET',
      lat: -22.9060548,
      long: -43.1790855
    }
  ]

  constructor() { }

  ngOnInit(): void {

    this.localizacoesMap = new Map();

  }

}
