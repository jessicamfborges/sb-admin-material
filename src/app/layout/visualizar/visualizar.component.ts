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
  minhasLocalizacoes: any = [];


  // minhasLocalizacoes = [
  //   {
  //     nome: 'Lemobs',
  //     lat: -22.8782083,
  //     long: -43.2717735
  //   },
  //   {
  //     nome: 'CCBB',
  //     lat: -22.9986777,
  //     long: -43.3470777
  //   },
  //   {
  //     nome: 'INFNET',
  //     lat: -22925086,
  //     long: -43361106
  //   }
  // ]

  ngOnInit(): void {
    
    this.localizacoesMap = new Map();

  }

  teste(){
    console.log(this.serviceDados.getTopnav())
    console.log(this.agmMarker)
    this.minhasLocalizacoes = this.serviceDados.getTopnav();
  }

}


