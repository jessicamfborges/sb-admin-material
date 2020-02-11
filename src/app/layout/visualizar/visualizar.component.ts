import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { visualizarservice } from './visualizar.service';
import { AgmMarker } from '@agm/core';


@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  constructor(private serviceDados: visualizarservice) { }

  @ViewChild('agmMarker', {read: ViewContainerRef}) agmMarker: AgmMarker;

  lat = -22.9311594;
  long = -43.3584189;

  localizacoesMap: any=[];
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

  ngOnInit(): void {
    
    this.localizacoesMap = new Map();

  }

  teste(){
    console.log(this.serviceDados.getTopnav())
    console.log(this.agmMarker)
    this.minhasLocalizacoes = this.serviceDados.getTopnav();
  }

}


