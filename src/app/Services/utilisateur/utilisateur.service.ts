import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private isLogged = false;
  private role: string;
  private user: {};
  constructor() { }
  
  public setUser(user :{}) {
    this.user = user;
  }
    public getUser() {
    return this.user
    }
  public setIsLogged(isLogged :boolean) {
    this.isLogged = isLogged;
  }
    public getIsLogged() {
    return this.isLogged
  }  

  public setRole(role :string) {
    this.role = role;
  }
    public getRole() {
    return this.role
  }    
}
