import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { visualizarservice } from '../visualizar/visualizar.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  constructor(private serviceDados: visualizarservice) { }

  cadastroVisualizacaoGroup: FormGroup;

  tipos = ['Casa', 'Escritório', 'Lazer'];

  localizacoes: Map<string, string>;

  
  
 Localizacoes = [ ]
  

  ngOnInit() {
    // buscar lista do localstorage
    this.serviceDados.setTopnav({
      nome: 'Lemobs',
      tipo: 'Casa',
      lat: -22.8782083,
      long: -43.2717735
    })

    this.serviceDados.setTopnav({
      nome: 'CCBB',
      tipo: 'Lazer',
      lat: -22.9986777,
      long: -43.3470777
    });

    this.Localizacoes = [
      {
        nome: 'Lemobs',
        tipo: 'Casa',
        lat: -22.8657199,
        long: -43.2211524
      },
      {
      
        nome: 'CCBB',
        tipo: 'Lazer',
        lat: -22.9986777,
        long: -43.3470777
      },
      {
        nome: 'INFNET',
        tipo: 'Escritório',
        lat: -22925086,
        long: -43361106
      }
    ]

    this.Localizacoes.push({
      nome: 'CCBB',
      tipo: 'Lazer',
      lat: -22.9986777,
      long: -43.3470777
    })
    this.Localizacoes.push({
      nome: 'INFNET',
      tipo: 'Escritório',
      lat: -22.9060548,
      long: -43.1790855
    })
    this.Localizacoes.push({
      nome: 'Lemobs',
        tipo: 'Casa',
        lat: -22.8782083,
        long: -43.2717735
    })

     
    // converter string to array 
    this.cadastroVisualizacaoGroup = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      tipo: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lat: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      long: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    });
    this.localizacoes = new Map();
  }

  cadastrar() {
    // console.log("testes");
    if (this.cadastroVisualizacaoGroup.invalid) {
      return;
    } else {
      Object.keys(this.cadastroVisualizacaoGroup.controls).forEach(function (control, index) {
        this.localizacoes.set(control, this.cadastroVisualizacaoGroup.controls[control].value);

      }.bind(this));
        this.serviceDados.setTopnav({
        nome: this.cadastroVisualizacaoGroup.get('nome').value,//inserir um if para cada um dos tipos relacionados ao iconUrl
        tipo: this.cadastroVisualizacaoGroup.get('tipo').value,
        lat: this.cadastroVisualizacaoGroup.get('lat').value,
        long: this.cadastroVisualizacaoGroup.get('long').value
      });
      
      console.log(this.localizacoes)
      window.localStorage.setItem('localizacoes', JSON.stringify(this.localizacoes));
      console.log(localStorage.getItem('localizacoes'));
    }
  }

  teste() {
    console.log(this.serviceDados.getTopnav())
  }

}