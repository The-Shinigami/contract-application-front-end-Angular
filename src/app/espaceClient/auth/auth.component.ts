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
  declare window: any;
  alertMessage = "";

  constructor(private signInService: GoogleSigninService, private authService: AuthService
    , private utilisateur: UtilisateurService) {
   }

  ngOnInit() {
    this.window = window;
   }
  // signOut() {
  //   this.signInService.signOut(); }
  async onSubmit() {
    await this.authService.signIn(this.clientForm.value); 
    this.alertMessage = this.authService.message;
    this.authService.redirect("espaceClient");
    setTimeout(
     ()=> {
        this.authService.message = ""
        this.alertMessage =""
      }, 2000);
   /*  if (this.clientForm.value.username == "1" && this.clientForm.value.password == "1") {
        if (typeof this.window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  let accounts= await this.window.ethereum.request({method:"eth_requestAccounts"})
  console.log(accounts[0])
} 
    } */
   
  }
  async signIn() {
  // await this.signInService.getToken();
  //  await this.signInService.signIn();   
  //  console.log(this.signInService.user.getBasicProfile());
  }
  

}
