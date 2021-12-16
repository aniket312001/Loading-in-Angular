import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyfeatureComponent } from './companyfeature/companyfeature.component';

const routes: Routes = [
  {path:'',component:CompanyfeatureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
