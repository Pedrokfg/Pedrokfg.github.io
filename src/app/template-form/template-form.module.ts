import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TemplateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class TemplateFormModule { }
