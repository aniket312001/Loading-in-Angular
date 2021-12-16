import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyfeatureComponent } from './companyfeature/companyfeature.component';


@NgModule({
  declarations: [
    CompanyfeatureComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule {
  constructor(){
    console.log("Company module")
  }
 }
