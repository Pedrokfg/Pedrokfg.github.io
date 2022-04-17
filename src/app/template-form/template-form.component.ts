import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],

})
export class TemplateFormComponent implements OnInit {


  consultaCEP(cep: any) {

    cep = cep.replace (/\D/g, '');

    if (cep != null && cep !== '') {
      let validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)){

        this.http.get(`//viacep.com.br/ws/${cep}/json/`)
          .pipe(map((dados: any) => dados))
          .subscribe(dados => console.log(dados));
      }
    }
}



  onSubmit(form: any){
    console.log(form.value);

  }


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
