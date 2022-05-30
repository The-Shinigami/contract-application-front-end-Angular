import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetaMaskService {
  accounts: string[];
 declare window: any;
  constructor() {
     this.window = window;
   }
  public async signInWithMetaMask() {
    if (typeof this.window.ethereum !== 'undefined') {

      let accounts = await this.window.ethereum.request({ method: "eth_requestAccounts" })
      this.accounts = accounts;
    }
  }

  getAccounts() {
    return this.accounts;
  }
  setAccounts(accounts:string[]) {
    this.accounts = accounts;
  }
}
