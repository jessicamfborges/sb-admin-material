import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  @ViewChild('agmMarker') agmMarker

  lat = -22.9311594;
  long = -43.3584189;

  localizacoesMap: Map<string, string>;
  data: string;

  minhasLocalizacoes = [
    {
      nome: 'Lemobs',
      lat: -22.8657199,
      long: -43.2211524
    },
    {
      nome: 'CCBB',
      lat: -22.9986127,
      long: -43.3470666
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


