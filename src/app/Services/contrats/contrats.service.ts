import { Injectable } from '@angular/core';
import axios from 'axios';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
@Injectable({
  providedIn: 'root'
})
export class ContratsService {
  api = axios.create({ baseURL: 'http://localhost:9191/api/contrats/' })
  contrats: any;
  constructor(public utilisateur : UtilisateurService) {}

  public async getAll() {
    if(this.utilisateur.getUser().role = "user")
    {
      var contracts_1 : any =[];
      var contracts_2 : any =[];
      axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
          await  axios.get("http://localhost:9191/api/contrat/listAsSeller/"+this.utilisateur.getUser().id).then(
      (response) => {contracts_1 = response.data}
          )
       axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
          await  axios.get("http://localhost:9191/api/contrat/listAsBuyer/"+this.utilisateur.getUser().id).then(
      (response) => {contracts_2 = response.data}
          )
      this.contrats = contracts_1.concat(contracts_2);
    } else {
      await  this.api.get("listContracts").then(
      (response) => {this.contrats = response.data}
    )
    }
 
    return this.contrats
}

}

