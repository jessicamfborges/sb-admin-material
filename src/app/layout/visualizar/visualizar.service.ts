import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class visualizarservice{
    
    

    // setTopnav(topnav: visualizarservice) { this.topnavSubject.next(topnav); }
    //getTopnava(algo: any) {this.listaCoordenadas.push(algo)}
    getTopnav(){ return this.listaCoordenadas; }

    listaCoordenadas:any = [];

    setTopnav(algo: any) { this.listaCoordenadas.push(algo) }

    // // getData(key: string): any{
    // //     return JSON.parse(localStorage.getItem(key));
    // }
 
}