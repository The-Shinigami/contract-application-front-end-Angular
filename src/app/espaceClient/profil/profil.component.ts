import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur: any;
  constructor(public utilisateurService :UtilisateurService) { }

  ngOnInit(): void {
    this.utilisateur = this.utilisateurService.getUser();
    this.utilisateur.role = this.utilisateurService.getRole();
  }

}
