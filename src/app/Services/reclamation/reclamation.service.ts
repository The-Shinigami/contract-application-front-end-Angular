import {
  Injectable
} from '@angular/core';
import axios from 'axios';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  reclamations: any;
  state = false;
 api = axios.create({ baseURL: 'http://localhost:9191/api/reclamation' })
  constructor(private utilisateur:UtilisateurService) { 
    this.state = false;
  }
  async setReclamation(rec: any) {
     axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
  await  this.api.post("/addComplaint",rec)
      .then((response) => {
          this.state = true
        }
  )

  }
  async getReclamation() {
     axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
    await  this.api.get("/listComplaints")
      .then(
        (response) => {
          this.reclamations = response.data;
      }
    )
    return this.reclamations;
  }
  async sendResponse(response: any) {
     axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
    await  this.api.post("/sendResponse",response)
      .then(
        (response) => {
          console.log(response.data)
      }
    )
  }
}