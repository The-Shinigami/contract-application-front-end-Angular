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
    AuthComponent
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
