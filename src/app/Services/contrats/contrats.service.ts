import { Injectable } from '@angular/core';
import axios from 'axios';
import { of } from 'rxjs';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
@Injectable({
  providedIn: 'root'
})
export class ContratsService {
  api = axios.create({ baseURL: 'http://localhost:9191/api' })
  contrats: any;
  newContract: {
    buyer: {},
    seller: {},
    cost: string,
    date: string,
    prop: {};
  };
  constructor(public utilisateur: UtilisateurService) {
       this.newContract = {
      buyer: {},
      seller: {},
      cost: "",
      date: "",
      prop: {}
    };
    if (localStorage.getItem("buyer") != null) {
      this.newContract.buyer = JSON.parse(localStorage.getItem('buyer') + "");
    }
        if (localStorage.getItem("seller") != null) {
      this.newContract.seller = JSON.parse(localStorage.getItem('seller') + "");
        }
        if (localStorage.getItem("prop") != null) {
      this.newContract.prop = JSON.parse(localStorage.getItem('prop') + "");
        }
 
  }

  public async getAll() {
    await this.api.get("/contrats/listContracts").then(
      (response) => {this.contrats = response.data}
      )
    return this.contrats
}
  public async getAllForUser() {
    
      var contracts_1 : any =[];
      var contracts_2 : any =[];
      axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
          await  this.api.get("/contrat/listAsSeller/"+this.utilisateur.getUser().id).then(
            (response) => {
              contracts_1 = response.data
            console.log(contracts_1)}
          )
    axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
          await this.api.get("/contrat/listAsBuyer/"+this.utilisateur.getUser().id).then(
            (response) => {
              contracts_2 = response.data
              console.log(contracts_2)
            }
          )
      this.contrats = contracts_1.concat(contracts_2);
   return this.contrats
  }
  
 async setNewContractBuyer(buyer: any) {
  await  this.api.post("/users/saveUser", buyer).then(
      response => {
        this.newContract.buyer = response.data
      })    
    localStorage.setItem('buyer', JSON.stringify(this.newContract.buyer));
 }
  setContractBuyer(buyer: any) {
    this.newContract.buyer = buyer;
     localStorage.setItem('buyer', JSON.stringify(this.newContract.buyer));
  }
  
async  setNewContractseller(seller: any) {
  await     this.api.post("/users/saveUser", seller).then(
      response => {
        this.newContract.seller = response.data
      })  
    localStorage.setItem('seller', JSON.stringify(this.newContract.seller));
}
     setContractSeller(seller: any) {
    this.newContract.seller = seller;
     localStorage.setItem('seller', JSON.stringify(this.newContract.seller));
  }
  setNewContractCost(cost: string) { this.newContract.cost = cost;}
  setNewContractDate(date: string) { this.newContract.date = date;}
async  setNewContractProp(prop: any) {
  await    this.api.post("/propreties/saveProprety", prop).then(
      response => {    
    this.newContract.prop = response.data
      })     
}
 
  
  async addNewContract() {
  await this.api.post("/contrats/addContract", this.newContract)
  localStorage.removeItem("seller");
  localStorage.removeItem("buyer");
  console.log("add success");
  }
  getNewContract() {
  return  this.newContract;
  }
}

