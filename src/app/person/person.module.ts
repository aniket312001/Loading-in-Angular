import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonfullInformationsComponent } from './personfull-informations/personfull-informations.component';


@NgModule({
  declarations: [
    PersonListComponent,
    PersonDetailComponent,
    PersonfullInformationsComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
 
})
export class PersonModule { 
  constructor(){
    console.log("person module")
  }
}
