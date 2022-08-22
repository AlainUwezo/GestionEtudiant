import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEtudiantComponent } from './share/components/add-etudiant/add-etudiant.component';
import { AddFiliereComponent } from './share/components/add-filiere/add-filiere.component';
import { ListEtudiantsComponent } from './share/components/list-etudiants/list-etudiants.component';
import { ListeFiliereComponent } from './share/components/liste-filiere/liste-filiere.component';

const routes: Routes = [
  {path:'', redirectTo:"list_etudiants", pathMatch: 'full'},
  {path: 'list_etudiants', component:ListEtudiantsComponent},
  {path:'add_etudiant', component:AddEtudiantComponent},
  {path:'list_filieres', component:ListeFiliereComponent},
  {path:'add_filiere', component: AddFiliereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
