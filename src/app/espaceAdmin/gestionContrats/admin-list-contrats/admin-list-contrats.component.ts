import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DetailContratComponent } from 'src/app/espaceContrat/detail-contrat/detail-contrat.component';
import { ContratsService } from 'src/app/Services/contrats/contrats.service';
import { AdminDetailContratComponent } from '../admin-detail-contrat/admin-detail-contrat.component';

 
@Component({
  selector: 'app-admin-list-contrats',
  templateUrl: './admin-list-contrats.component.html',
  styleUrls: ['./admin-list-contrats.component.css']
})
export class AdminListContratsComponent implements OnInit  {
  contrats: any = null;
  sourceContrats: any = {};
  load: boolean = false;
  constructor(public contratsService:ContratsService ) {
    this.getContrats();
  }
  public async getContrats() {
    this.contrats = await this.contratsService.getAll();   
    this.sourceContrats = this.contrats;
    setTimeout(() => {
      this.load = true;
    }, 500);
    setTimeout(
     ()=> {
          this.afterInit();
      }, 1000);
 
  }
  ngOnInit(): void {}
  afterInit() { 
       AdminDetailContratComponent.modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    });
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
