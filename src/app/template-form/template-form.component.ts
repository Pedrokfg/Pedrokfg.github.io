import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { TemplateFormService } from './template-form.service';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],

})
export class TemplateFormComponent implements OnInit {

  constructor(private TemplateFormService:TemplateFormService){}


  consultaCep(cep:any, form:any){
    this.TemplateFormService.buscar(cep).subscribe((dados)=> this.popularForm(dados, form, ));
  }


  popularForm(dados:any, form:any, ){
    form.setValue({
      complemento:null,
      numeroRes:null,
      nome:null,
      sobrenome:null,
      cpf:null,
      nasc:null,
      email:null,
      sexo:null,
      telefoneP:null,
      telefoneS:null,
      rg:null,
      orgE:null,
      fotoRG:null,
      valor:dados.cep,
      logradouro:dados.logradouro,
      bairro:dados.bairro,
      cidade:dados.localidade,
      uf:dados.uf
    })
  }




  onSubmit(form:any){
    console.log(form.value);

  }

  ngOnInit(): void {
  }

}

