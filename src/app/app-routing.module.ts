import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landingPage/home/home.component';
import { AProposDeNousComponent } from './landingPage/apropos-de-nous/apropos-de-nous.component';
import { NotreServiceComponent } from './landingPage/notre-service/notre-service.component';
import { ListContratsComponent } from './espaceContrat/list-contrats/list-contrats.component';
import { AuthComponent } from './espaceClient/auth/auth.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'aProposDeNous', pathMatch: 'full', component: AProposDeNousComponent }, 
  { path: 'notreService', pathMatch: 'full', component: NotreServiceComponent },
  { path: 'espaceContrat', pathMatch: 'full', component: ListContratsComponent },
  { path: 'espaceClient', pathMatch: 'full', component:  AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
