import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {
  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser;

 


  constructor() {
    this.ngOnInit();
  }
   async ngOnInit() {

    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();
    }
  }
  public async signIn() {
   // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
  return  await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error 
      );
     ;
  }
   async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    return this.authInstance.isSignedIn.get();
  }
  public signOut() {
      new Promise(async () => {
      await this.authInstance.signOut();
    });
  }
  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve 
    // function is the callback passed to gapi.load
    var pload  ;
    if(gapi!=undefined)
    {
      pload = new Promise((resolve) => {
        gapi.load('auth2', resolve);
      });

    // When the first promise resolves, it means we have gapi
    // loaded and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '339508889019-jeuakot00eobtroklb6kgbl9t5ojte5e.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
    }  
  }

 

}
