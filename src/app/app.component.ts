import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    result : any;
    urlToJson = 'assets/json/bairros.json';

    constructor(public http: HttpClient) {
       // translate.setDefaultLang('en');
    }

    ngOnInit(): void {
        // console.log(Bairros.bairros)
        // this.http.get<any>(this.urlToJson).subscribe(Response =>  
        //     {
        //         this.result = Response;

        //     });
    }
    title = 'angular-json-file';
}
