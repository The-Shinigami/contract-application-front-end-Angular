import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UtilisateurService } from '../utilisateur/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public auth: AuthService, public router: Router,public utilisateurService :UtilisateurService) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.isAuthenticated == true) {
       if (route.data.role && route.data.role.indexOf(this.utilisateurService.getUser().roles[0]) !== -1) {
            return true;
          }
    } 
    this.router.navigate(['/espaceClient']);
    return false;
  }
}
