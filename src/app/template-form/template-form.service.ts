import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateFormService {

  constructor(private HttpClient:HttpClient) { }

  buscar(cep:string){
    return this.HttpClient.get(`Https://viacep.com.br/ws/${cep}/json`)
  }
}
