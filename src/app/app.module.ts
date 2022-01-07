import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './landingPage/home/home.component';
import { AProposDeNousComponent } from './landingPage/apropos-de-nous/apropos-de-nous.component';
import { NotreServiceComponent } from './landingPage/notre-service/notre-service.component';
import { ListContratsComponent } from './espaceContrat/list-contrats/list-contrats.component';
import { DetailContratComponent } from './espaceContrat/detail-contrat/detail-contrat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TrieContratsComponent } from './espaceContrat/trie-contrats/trie-contrats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChercherContratComponent } from './espaceContrat/chercher-contrat/chercher-contrat.component';
import { AuthComponent } from './espaceClient/auth/auth.component';
import { ProfilComponent } from './espaceClient/profil/profil.component';
import { ContratsComponent } from './espaceClient/contrats/contrats.component';
import { EspaceAdminComponent } from './espaceAdmin/espace-admin/espace-admin.component';
import { AdminListContratsComponent } from './espaceAdmin/gestionContrats/admin-list-contrats/admin-list-contrats.component';
import { AdminDetailContratComponent } from './espaceAdmin/gestionContrats/admin-detail-contrat/admin-detail-contrat.component';
import { AdminChercherContratComponent } from './espaceAdmin/gestionContrats/admin-chercher-contrat/admin-chercher-contrat.component';
import { AdminModifierContratComponent } from './espaceAdmin/gestionContrats/admin-modifier-contrat/admin-modifier-contrat.component';
import { AdminAjouterContratComponent } from './espaceAdmin/gestionContrats/admin-ajouter-contrat/admin-ajouter-contrat.component';
import { ProfilAdminComponent } from './espaceAdmin/profil-admin/profil-admin.component';
import { AdminTrieContratsComponent } from './espaceAdmin/gestionContrats/admin-trie-contrats/admin-trie-contrats.component';
import { ClientDetailContratComponent } from './espaceClient/client-detail-contrat/client-detail-contrat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AProposDeNousComponent,
    NotreServiceComponent,
    ListContratsComponent,
    DetailContratComponent,
    TrieContratsComponent,
    ChercherContratComponent,
    AuthComponent,
    ProfilComponent,
    ContratsComponent,
    EspaceAdminComponent,
    AdminListContratsComponent,
    AdminDetailContratComponent,
    AdminChercherContratComponent,
    AdminModifierContratComponent,
    AdminAjouterContratComponent,
    ProfilAdminComponent,
    AdminTrieContratsComponent,
    ClientDetailContratComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
     ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
