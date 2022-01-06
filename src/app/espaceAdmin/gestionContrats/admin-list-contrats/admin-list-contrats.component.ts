import { Component, OnInit } from '@angular/core';
import { ContratsService } from 'src/app/Services/contrats/contrats.service';

@Component({
  selector: 'app-admin-list-contrats',
  templateUrl: './admin-list-contrats.component.html',
  styleUrls: ['./admin-list-contrats.component.css']
})
export class AdminListContratsComponent implements OnInit {
 contrats: any = null;
  sourceContrats: any = {};
  constructor(public contratsService:ContratsService ) {
    this.getContrats();
  }
  public async getContrats() {
    this.contrats = await this.contratsService.getAll();   
    this.sourceContrats = this.contrats;
    console.log(this.contrats)
    setTimeout(
     ()=> {
          this.afterInit();
      }, 1000);
 
  }
  ngOnInit(): void {}
  afterInit() { 
    /*   DetailContratComponent.modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    }); */
  }
  setContracts(contrats: any) {
    this.contrats = contrats;
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
