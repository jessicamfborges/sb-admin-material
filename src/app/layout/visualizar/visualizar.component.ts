import { Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
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
export class VisualizarComponent implements OnInit {

  constructor(private serviceDados: visualizarservice) { }
  public infoWindow: InfoWindow = undefined



// infoWindowOpened = null
// previous_info_window = null

// close_window(){
// if (this.previous_info_window != null ) {
//   this.previous_info_window.close()
//   }    
// }

// select_marker(data,infoWindow){
//  if (this.previous_info_window == null)
//   this.previous_info_window = infoWindow;
//  else{
//   this.infoWindowOpened = infoWindow
//   this.previous_info_window.close()
//  }
//  this.previous_info_window = infoWindow
// }
//info
  
  @ViewChild('agmMarker', {read: ViewContainerRef}) agmMarker: AgmMarker;
  @ViewChild('mapa', {read: ViewContainerRef}) mapa: any;
 
  // polyline = Coordenadas.coordenadas
  polygonos = Bairros.bairros

  polyline = [        
    {"lat":-23.0213180, "lng":-43.4499750},
    {"lat":-23.0304021, "lng":-43.4840498},]


  lat = -22.9311594;
  long = -43.3584189;

  localizacoesMap:any = [];
  data: string;
  minhasLocalizacoes:any = [];

  markers: any[] = [];

  selectedLat: Number = 0;
  selectedLng: Number = 0;
  
  clickedMarker(lat: number, lng: number) {
  this.selectedLat = lat;
  this.selectedLng = lng;
  }
  
  ngOnInit(): void {
    //console.log(this.polyline);
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


