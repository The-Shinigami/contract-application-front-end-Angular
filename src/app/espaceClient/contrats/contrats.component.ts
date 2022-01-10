import { Component, OnInit } from '@angular/core';
import { ContratsService } from 'src/app/Services/contrats/contrats.service';
import { ClientDetailContratComponent } from '../client-detail-contrat/client-detail-contrat.component';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  contrats: any = null;
  sourceContrats: any = {};
   constructor(public contratsService:ContratsService) {
    
  }
  public async  getContrats() {  
       this.contrats = await this.contratsService.getAllForUser();
   
    this.sourceContrats = this.contrats;
    setTimeout(
     ()=> {
          this.afterInit();
      }, 1000);
 
  }
  async ngOnInit() {
 await  this.getContrats();
  }
  afterInit() { 
      ClientDetailContratComponent.modals.forEach((element: any) => {
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
