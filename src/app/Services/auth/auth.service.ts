import { Injectable } from '@angular/core';
import axios from 'axios';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = axios.create({ baseURL: 'http://localhost:9191/api/auth/' })
  utilisateur: UtilisateurService;

  constructor(utilisateur: UtilisateurService) {
    this.utilisateur = utilisateur;
   }

    public async getToken(user:{}) {
   await this.api.post("/signin", user).then(
      response => {
        this.utilisateur.setUser(response.data)
      }
    )    
  }
}
