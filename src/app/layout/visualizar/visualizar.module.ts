import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { VisualizarComponent } from './visualizar.component';
import { cadastrarmodel } from '../cadastrar/cadastrar.module';

@NgModule({
    declarations: [VisualizarComponent],
    imports: [
        CommonModule,
        cadastrarmodel
       
    ]
})
 export class visualizarmodel {}