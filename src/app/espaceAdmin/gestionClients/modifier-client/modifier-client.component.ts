import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClientsService } from 'src/app/Services/clients/clients.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent implements OnInit {
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
  @Input()
 user: any;
  @Output()
  newUser = new EventEmitter();
  constructor(private clientsService : ClientsService) {}

  ngOnInit(): void {
    var modals = document.querySelectorAll(".trie-modal");
    modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    });

    var role = this.user.roles[0].name == "ROLE_ADMIN" ||this.user.roles[0].name == "admin" ? "admin" : "user";
    this.userForm.setValue({
  id_user:this.user.id_user,
  nom:this.user.nom,
  prenom: this.user.prenom,
   username:  this.user.username,
  password: "",
  cin: this.user.cin,
  tel: this.user.tel,
    roles : role
    })
  }

  onSubmit() {
   var user = {
      id_user:this.userForm.value.id_user,
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
      id_user:this.userForm.value.id_user,
  nom:this.userForm.value.nom,
  prenom: this.userForm.value.prenom,
   username:  this.userForm.value.username,
  password:this.userForm.value.password,
  cin: this.userForm.value.cin,
  tel: this.userForm.value.tel,
    roles : [{name:this.userForm.value.roles}]
   }
   this.newUser.emit(client);
  }
hideModal(element: any) {
    element.querySelector(".close-modal").addEventListener('click', () => {
      element.classList.add("hidden");
    });
  }
  showModal(element: any) {
    element.previousElementSibling.addEventListener('click', () => {
      element.classList.remove("hidden");
    });

  }

}
