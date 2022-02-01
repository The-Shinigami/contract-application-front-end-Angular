import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clients: any;
 api = axios.create({ baseURL: 'http://localhost:9191/api/users' })
  constructor() { }
  async setClients() {
  await  this.api.get("/users")
      .then(
        (response) => {
          this.clients = response.data;
      }
    )
  }
  getClients() {
    return this.clients;
  }
  async updateClient(client:any) {
    await  this.api.put("/updateUser/"+client.id_user,client)
      .then(
        (response) => {
          console.log(response.data)
      }
    )
  }

}
