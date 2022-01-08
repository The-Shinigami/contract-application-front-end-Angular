import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { GoogleSigninService } from 'src/app/Services/auth/gmailAuth/google-signin.service';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { UtilisateurService } from 'src/app/Services/utilisateur/utilisateur.service';
import { MetaMaskService } from 'src/app/Services/auth/metaMask/meta-mask.service';
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
 
  alertMessage = "";

  constructor(private signInService: GoogleSigninService, private authService: AuthService
    , private utilisateur: UtilisateurService,private metaMaskService :MetaMaskService) {
   }

  ngOnInit() {
   
   }
  // signOut() {
  //   this.signInService.signOut(); }
  async onSubmit() {
    await this.authService.signIn(this.clientForm.value); 
    this.alertMessage = this.authService.message;
    this.authService.redirectSRole(); 
    setTimeout(
     ()=> {
        this.authService.message = ""
        this.alertMessage =""
      }, 2000); 
  }
  async signIn() {
  // await this.signInService.getToken();
  //  await this.signInService.signIn();   
  //  console.log(this.signInService.user.getBasicProfile());
  }
  

}
