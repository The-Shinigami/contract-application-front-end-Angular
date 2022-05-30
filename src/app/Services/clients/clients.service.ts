import { Injectable } from '@angular/core';
import axios from 'axios';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: any;
 api = axios.create({ baseURL: 'http://localhost:9191/api/users' })
  constructor(private utilisateur:UtilisateurService) { }
  async setClients() {
    axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
    await this.api.get("/users", {
    headers: {
      'Authorization': this.utilisateur.getUser().accessToken
    }})
      .then(
        (response) => {
          this.clients = response.data;
      }
    )
  }
  getClients() {
    return this.clients;
  }
  async updateClient(client: any) {
     axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
    await  this.api.put("/updateUser/"+client.id_user,client)
      .then(
        () => {
      }
    )
  }

}
