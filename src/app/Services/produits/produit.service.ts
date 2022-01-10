import { Injectable } from '@angular/core';
import axios from 'axios';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: any;

  constructor(public utilisateurService :UtilisateurService) { }
  async setProduits() {
  await  axios.get("http://localhost:9191/api/propreties/propreties/" + this.utilisateurService.getUser().id)
      .then(
        (response) => {
          this.produits = response.data;
      }
    )
  }
  getProduits() {
    return this.produits;
  }



}
