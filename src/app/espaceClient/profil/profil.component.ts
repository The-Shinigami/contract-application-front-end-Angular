import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/Services/clients/clients.service';
import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  utilisateur: any;
  constructor(public utilisateurService :UtilisateurService,private clientsService : ClientsService) { }
    userForm = new FormGroup({
   id_user :new FormControl(''),
    nom: new FormControl(''),
  prenom: new FormControl(''),
   username: new FormControl(''),
  password: new FormControl(''),
  cin: new FormControl(''),
  tel: new FormControl(''),
    roles : new FormControl('')
  })
  ngOnInit(): void {
    this.utilisateur = this.utilisateurService.getUser();
    this.utilisateur.role = this.utilisateurService.getRole();
    this.userForm.setValue({
  id_user:this.utilisateur.id,
  nom:this.utilisateur.nom,
  prenom: this.utilisateur.prenom,
   username:  this.utilisateur.username,
  password: this.utilisateur.password,
  cin: this.utilisateur.cin,
  tel: this.utilisateur.tel,
    roles : this.utilisateur.role
    })
  }
  onSubmit() {
   var user = {
      id_user:this.utilisateur.id,
  nom:this.userForm.value.nom,
  prenom: this.userForm.value.prenom,
   username:  this.userForm.value.username,
  password:this.userForm.value.password,
  cin: this.userForm.value.cin,
  tel: this.userForm.value.tel,
    roles : [this.userForm.value.roles]
   }
    
  this.clientsService.updateClient(user);
  
    var client = {
      id:user.id_user,
  nom:user.nom,
  prenom:user.prenom,
   username:  user.username,
  password:user.password,
  cin: user.cin,
  tel:user.tel,
    role :this.userForm.value.roles
    }
  this.utilisateur = client;
  }
}
