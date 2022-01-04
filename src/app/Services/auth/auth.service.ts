import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { UtilisateurService } from '../utilisateur/utilisateur.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = axios.create({ baseURL: 'http://localhost:9191/api/auth/' })
  isAuthenticated = false;
  public message: string = "";
  
  constructor(public utilisateur: UtilisateurService, public router: Router) {
    if(localStorage.getItem('user') != null)
    {
      utilisateur.setUser(JSON.parse(localStorage.getItem('user') + ""));
      utilisateur.setRole(localStorage.getItem('role')+"".toLowerCase());
    this.utilisateur.setIsLogged(true);
    this.isAuthenticated = true;
      this.redirect("");
    }
   }

    public async signIn(user:{}) {
      await this.api.post("/signin", user).then(
        response => {
          this.utilisateur.setUser(response.data)
          this.utilisateur.setIsLogged(true)
          this.utilisateur.setRole(response.data.roles[0].replace("ROLE_","").toLowerCase())
          localStorage.setItem('user', JSON.stringify(response.data));
          localStorage.setItem('role', response.data.roles[0].replace("ROLE_","").toLowerCase());
          this.isAuthenticated = true
        }
      ).catch(()=>
      {
        this.message = "Verifier vos données"
        this.utilisateur.setIsLogged(false)
      }
      );
      this.redirect("");
    }
      public signOut() { 
        this.isAuthenticated = false  
        this.router.navigate(['espaceClient']);
        document.getElementById("user-menu-button")?.classList.add("hidden");
        document.getElementById("user-menu")?.classList.add("hidden");
        localStorage.removeItem("user");
         localStorage.removeItem("role");
      }
  
  redirect(distanation:string) {
      if(this.utilisateur.getIsLogged()) 
 {  switch (this.utilisateur.getUser().roles[0]) {
        case "ROLE_USER":      
          document.getElementById("user-menu-button")?.classList.remove("hidden");
          document.getElementById("user-menu")?.classList.remove("hidden");
          if ("espaceClient" == distanation) {
            this.router.navigate(['espaceClientProfil']);
            
          }
          break;
         case "ROLE_ADMIN":
          this.router.navigate(['espaceAdminProfil']);
          break         
          default:
          break;
      }}
   
  }
}
