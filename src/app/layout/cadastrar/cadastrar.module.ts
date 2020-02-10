import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { CadastrarComponent } from './cadastrar.component';
import { visualizarmodel } from '../visualizar/visualizar.module';



@NgModule({
    declarations: [CadastrarComponent],
    imports: [
        CommonModule,
        visualizarmodel
        
    ]
})
 export class cadastrarmodel {}
 