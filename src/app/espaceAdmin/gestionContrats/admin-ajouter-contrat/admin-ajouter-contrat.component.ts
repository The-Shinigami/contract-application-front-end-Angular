import { Component, OnInit } from '@angular/core';
import { hide } from '@popperjs/core';

@Component({
  selector: 'app-admin-ajouter-contrat',
  templateUrl: './admin-ajouter-contrat.component.html',
  styleUrls: ['./admin-ajouter-contrat.component.css']
})
export class AdminAjouterContratComponent implements OnInit {
  modals: NodeListOf<Element>;
  pageNumber = 0;
  constructor() { }
  
   ngOnInit(): void {
    this.modals = document.querySelectorAll(".ajouter-modal");   
    this.modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
      
    });
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

  next() {
    this.modals[this.pageNumber++].classList.add("hidden");
     this.modals[this.pageNumber].classList.remove("hidden");
  }
}
