import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
import { GoogleSigninService } from 'src/app/google-signin.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
  
export class AuthComponent implements OnInit {
     clientForm = new FormGroup({
       email: new FormControl(''),
       pwd:new FormControl('')
     })
  
  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser;
  declare  window: any;

  constructor(private signInService: GoogleSigninService) { }

  ngOnInit() {
    this.window = window;
   }
  // signOut() {
  //   this.signInService.signOut(); }
  async onSubmit() {
    if (this.clientForm.value.email == "a" && this.clientForm.value.pwd == "a") {
        if (typeof this.window.ethereum !== 'undefined') {
  console.log('MetaMask is installed!');
  let accounts= await this.window.ethereum.request({method:"eth_requestAccounts"})
  console.log(accounts[0])
}
    }
   
  }
 async signIn() {
   await this.signInService.signIn();   
   console.log(this.signInService.user.getBasicProfile());
  }
  

}
