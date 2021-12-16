import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonfullInformationsComponent } from './personfull-informations/personfull-informations.component';

const routes: Routes = [
  {path:"",component:PersonDetailComponent},
    // {path:"/person-list",component:PersonListComponent}
  {path:"info",component:PersonfullInformationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
