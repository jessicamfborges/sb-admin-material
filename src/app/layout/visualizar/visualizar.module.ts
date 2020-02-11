import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { VisualizarComponent } from './visualizar.component';
import { cadastrarmodel } from '../cadastrar/cadastrar.module';
import { visualizarservice } from './visualizar.service';

@NgModule({
    declarations: [VisualizarComponent],
    imports: [
        CommonModule,
        cadastrarmodel,
        visualizarservice
       
    ]
})
 export class visualizarmodel {}