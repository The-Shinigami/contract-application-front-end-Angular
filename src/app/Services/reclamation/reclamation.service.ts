import {
  Injectable
} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
   reclamations: any;
 api = axios.create({ baseURL: 'http://localhost:9191/api/users' })
  constructor() { }
  async setReclamation() {
  await  this.api.get("/users")
      .then(
        (response) => {
          this.reclamations = response.data;
      }
    )
  }
  getReclamation() {
    return this.reclamations;
  }
  async updateClient(reclamation:any) {
    await  this.api.put("/updateUser/"+reclamation.email)
      .then(
        (response) => {
          console.log(response.data)
      }
    )
  }
}