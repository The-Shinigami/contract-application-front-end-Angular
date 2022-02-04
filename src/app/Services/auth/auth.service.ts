import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import axios from 'axios';
import {
  UtilisateurService
} from '../utilisateur/utilisateur.service';
import {
  MetaMaskService
} from './metaMask/meta-mask.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api = axios.create({
    baseURL: 'http://localhost:9191/api/auth/'
  })
  isAuthenticated = false;
  public message: string = "";

  constructor(public utilisateur: UtilisateurService, public router: Router, public metaMaskService: MetaMaskService) {
    if (localStorage.getItem('user') != null) {
      utilisateur.setUser(JSON.parse(localStorage.getItem('user') + ""));
      utilisateur.setRole(localStorage.getItem('role') + "".toLowerCase());
      this.utilisateur.setIsLogged(true);
      this.isAuthenticated = true;
      this.redirect("");
      axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken;
    }
  }

  public async signIn(user: {}) {
    await this.api.post("/signin", user).then(
      response => {
        this.utilisateur.setUser(response.data)
        this.utilisateur.setIsLogged(true)
        this.utilisateur.setRole(response.data.roles[0].replace("ROLE_", "").toLowerCase())
        localStorage.setItem('user', JSON.stringify(response.data));
        localStorage.setItem('role', response.data.roles[0].replace("ROLE_", "").toLowerCase());
        this.isAuthenticated = true
        axios.defaults.headers.common['Authorization'] = this.utilisateur.getUser().accessToken
      }
    ).catch(() => {
      this.message = "Verifier vos données"
      this.utilisateur.setIsLogged(false)
    });
    this.redirectSRole();
  }
  public async signOut() {
    this.isAuthenticated = false
    this.router.navigate(['espaceClient']);
    document.getElementById("user-menu-button")?.classList.add("hidden");
    document.getElementById("user-menu")?.classList.add("hidden");
    document.getElementById("admin-menu-button")?.classList.add("hidden");
    document.getElementById("admin-menu")?.classList.add("hidden");
     document.getElementById("user-menu-button-small")?.classList.add("hidden");
    document.getElementById("user-menu-small")?.classList.add("hidden");
    document.getElementById("admin-menu-button-small")?.classList.add("hidden");
    document.getElementById("admin-menu-small")?.classList.add("hidden");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    var urlsAdmin = document.getElementsByClassName("espace-admin-url");
    var urlsClient = document.getElementsByClassName("espace-client-url");
    for (let index = 0; index < urlsAdmin.length; index++) {
      const elementAdmin = urlsAdmin[index];
      const elementClient = urlsClient[index];
      elementAdmin.classList.add("hidden");
      elementClient.classList.remove("hidden")
    }

    await this.api.post("/signout", this.utilisateur.getUser());
  }

  async redirect(distanation: string) {
    if (this.utilisateur.getIsLogged()) {
      switch (this.utilisateur.getUser().roles[0]) {
        case "ROLE_USER":
          document.getElementById("user-menu-button")?.classList.remove("hidden");
          document.getElementById("user-menu")?.classList.remove("hidden");
           document.getElementById("user-menu-button-small")?.classList.remove("hidden");
          document.getElementById("user-menu-small")?.classList.remove("hidden");
          if ("espaceClient" == distanation) {
            this.router.navigate(['espaceClientProfil']);
          }
          var urlsAdmin = document.getElementsByClassName("espace-admin-url");
          var urlsClient = document.getElementsByClassName("espace-client-url");
          for (let index = 0; index < urlsAdmin.length; index++) {
            const elementAdmin = urlsAdmin[index];
            const elementClient = urlsClient[index];
            elementAdmin.classList.add("hidden");
            elementClient.classList.remove("hidden")
          }
          break;
        case "ROLE_ADMIN":
          await this.metaMaskService.signInWithMetaMask();
          if (this.metaMaskService.getAccounts().includes(this.utilisateur.getUser().account_address.toLowerCase())) {
            document.getElementById("admin-menu-button")?.classList.remove("hidden");
            document.getElementById("admin-menu")?.classList.remove("hidden");
             document.getElementById("admin-menu-button-small")?.classList.remove("hidden");
            document.getElementById("admin-menu-small")?.classList.remove("hidden");
            var urlsAdmin = document.getElementsByClassName("espace-admin-url");
            var urlsClient = document.getElementsByClassName("espace-client-url");
            for (let index = 0; index < urlsAdmin.length; index++) {
              const elementAdmin = urlsAdmin[index];
              const elementClient = urlsClient[index];
              elementAdmin.classList.remove("hidden");
              elementClient.classList.add("hidden")
              if ("espaceAdmin" == distanation) {
                this.router.navigate(['espaceAdminProfil']);
              } else {
                this.message = "Verifier vos données"
                this.utilisateur.setIsLogged(false)
              }
            }

          } else {
            this.message = "Verifier votre walet ,compte introuvable";
            this.utilisateur.setIsLogged(false);
          }
          break
        default:
          break;
      }
    }

  }

  public redirectSRole() {
    if (this.utilisateur.getRole() == "user") {
      this.redirect("espaceClient");
    } else if (this.utilisateur.getRole() == "admin") {
      this.redirect("espaceAdmin");
    }

  }
}