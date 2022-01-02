import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { GoogleSigninService } from 'src/app/Services/auth/gmailAuth/google-signin.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
  
export class AuthComponent implements OnInit {
     clientForm = new FormGroup({
       username: new FormControl(''),
       password:new FormControl('')
     })
  
  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser;
  declare  window: any;

  constructor(private signInService: GoogleSigninService, private authService: AuthService
  , private utilisateur: UtilisateurService) { }

  ngOnInit() {
    this.window = window;
   }
  // signOut() {
  //   this.signInService.signOut(); }
  async onSubmit() {
    await this.authService.getToken(this.clientForm.value);

    console.log(this.utilisateur.getUser());   
 /*    if (this.clientForm.value.email == "a" && this.clientForm.value.pwd == "a") {
        if (typeof this.window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  let accounts= await this.window.ethereum.request({method:"eth_requestAccounts"})
  console.log(accounts[0])
} */
    }
   
  }
  async signIn() {
  // await this.signInService.getToken();
  //  await this.signInService.signIn();   
  //  console.log(this.signInService.user.getBasicProfile());
  }
  

}
