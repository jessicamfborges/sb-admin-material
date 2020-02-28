import { Component, OnInit, ViewChild, ViewContainerRef, Injectable} from '@angular/core';
import { visualizarservice } from './visualizar.service';
import { AgmMarker } from '@agm/core';
import { InfoWindow } from '@agm/core/services/google-maps-types'
import {Bairros} from 'src/app/layout/visualizar/bairros';
import {Coordenadas} from 'src/app/layout/visualizar/coordenadas';
import { from } from 'rxjs';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']

  
})

export class  VisualizarComponent implements OnInit{

  constructor(private serviceDados: visualizarservice) { }
 //public infoWindow: InfoWindow = undefined

  changeText:boolean=true;
  
  @ViewChild('agmMarker', {read: ViewContainerRef}) agmMarker: AgmMarker;
  @ViewChild('mapa', {read: ViewContainerRef}) mapa: any;
 
  polygonos = Bairros.bairros

  polyline = [        
    {"lat":-23.0085425, "lng":-43.3289251},
    {"lat":-22.9288194, "lng":-43.3811098},
  ]


   lat = -22.9311594;
   long = -43.3584189;
  previous


    localizacoesMap:any = [];
    data: string;
    minhasLocalizacoes:any = [];

    markers: any[] = [];

    selectedLat: Number = 0;
    selectedLng: Number = 0;
    
    clickedMarker(localizacao,infowindow) {
    // this.selectedLat = lat;
    // this.selectedLng = lng;

      if(this.previous){
      this.previous.close();
    }
    this.previous = infowindow
  }
  
  
  ngOnInit(): void {
    console.log(this.polyline);
    this.localizacoesMap = new Map();  
  }



  teste(){
    console.log(this.serviceDados.getTopnav())
    console.log(this.agmMarker)

  }
  click(marker){
    console.log(marker)
  }
  
}


