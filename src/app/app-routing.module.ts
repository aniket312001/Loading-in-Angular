import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, Router, RouterModule, Routes } from '@angular/router';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

const routes: Routes = [
  {path:"",redirectTo:"company",pathMatch:"full"},
  {path:"company", loadChildren: () => import('./company/company.module').then(m => m.CompanyModule)},
  {path:"person", loadChildren: () => import('./person/person.module').then(m => m.PersonModule),data:{preload:true,delay:true}},

];

@NgModule({
  // imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],  // all preloaded inbuilt
  imports:[RouterModule.forRoot(routes,{preloadingStrategy:CustomPreloadingStrategyService})], //For custom preloading 
  exports: [RouterModule],
  providers:[CustomPreloadingStrategyService],
  
})
export class AppRoutingModule { }
