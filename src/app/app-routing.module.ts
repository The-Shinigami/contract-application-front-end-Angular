import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landingPage/home/home.component';
import { AProposDeNousComponent } from './landingPage/apropos-de-nous/apropos-de-nous.component';
import { NotreServiceComponent } from './landingPage/notre-service/notre-service.component';
import { ListContratsComponent } from './espaceContrat/list-contrats/list-contrats.component';
import { AuthComponent } from './espaceClient/auth/auth.component';
import { ProfilComponent } from './espaceClient/profil/profil.component';
import { AuthGuardService } from './Services/authguard/auth-guard.service';
import { ContratsComponent } from './espaceClient/contrats/contrats.component';
import { EspaceAdminComponent } from './espaceAdmin/espace-admin/espace-admin.component';
import { AdminListContratsComponent } from './espaceAdmin/gestionContrats/admin-list-contrats/admin-list-contrats.component';
import { ClientProduitsComponent } from './espaceClient/client-produits/client-produits.component';
import { ListClientsComponent } from './espaceAdmin/gestionClients/list-clients/list-clients.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'aProposDeNous', pathMatch: 'full', component: AProposDeNousComponent }, 
  { path: 'notreService', pathMatch: 'full', component: NotreServiceComponent },
  { path: 'espaceContrat', pathMatch: 'full', component: ListContratsComponent },
  { path: 'espaceClient', pathMatch: 'full', component: AuthComponent},
  { path: 'espaceClientContrats',data: {role: 'ROLE_USER'},canActivate: [AuthGuardService], pathMatch: 'full', component: ContratsComponent },
  { path: 'espaceClientProfil',data: {role: 'ROLE_USER'}, canActivate: [AuthGuardService], pathMatch: 'full', component: ProfilComponent },
  { path: 'espaceAdminProfil', data: { role: 'ROLE_ADMIN' }, canActivate: [AuthGuardService], pathMatch: 'full', component: EspaceAdminComponent },
  { path: 'espaceAdminContrats', data: { role: 'ROLE_ADMIN' }, canActivate: [AuthGuardService], pathMatch: 'full', component: AdminListContratsComponent },
   { path: 'clientProduits',data: {role: 'ROLE_USER'},canActivate: [AuthGuardService], pathMatch: 'full', component: ClientProduitsComponent },
    { path: 'espaceAdminClients',data: {role: 'ROLE_ADMIN'},canActivate: [AuthGuardService], pathMatch: 'full', component: ListClientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
