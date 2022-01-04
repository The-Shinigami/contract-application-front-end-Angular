import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ContratsService {
  api = axios.create({ baseURL: 'http://localhost:9191/api/contrats/' })
  contrats: any;
  constructor() {
   
   }

 public  async getAll() {
 await    this.api.get("listAll").then(
      (response) => {
        this.contrats = response.data
      }
    ).catch(

    )
    return this.contrats
}

}

