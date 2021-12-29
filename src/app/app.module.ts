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
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AProposDeNousComponent,
    NotreServiceComponent,
    ListContratsComponent,
    DetailContratComponent,
    TrieContratsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
