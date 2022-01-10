import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: any;

  constructor() { }
  async setClients() {
  await  axios.get("http://localhost:9191/api/users/users")
      .then(
        (response) => {
          this.clients = response.data;
      }
    )
  }
  getClients() {
    return this.clients;
  }


}
