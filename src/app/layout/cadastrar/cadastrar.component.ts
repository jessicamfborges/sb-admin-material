import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  constructor() { }

  cadastroVisualizacaoGroup: FormGroup;

  tipos = ['Casa', 'Escritório', 'Lazer'];

  localizacoes: Map<string, string>;

  ngOnInit() {
    this.cadastroVisualizacaoGroup = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      tipo: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      lat: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      long: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
    });
    this.localizacoes = new Map();
  }

  cadastrar() {
    if (this.cadastroVisualizacaoGroup.invalid) {
      return;
    } else {
      Object.keys(this.cadastroVisualizacaoGroup.controls).forEach(function (control, index) {
        this.localizacoes.set(control, this.cadastroVisualizacaoGroup.controls[control].value);
      }.bind(this));
      localStorage.setItem('localizacoes', JSON.stringify(this.localizacoes));
    }
  }

}
