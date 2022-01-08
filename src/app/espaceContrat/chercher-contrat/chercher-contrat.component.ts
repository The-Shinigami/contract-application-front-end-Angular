import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-chercher-contrat',
  templateUrl: './chercher-contrat.component.html',
  styleUrls: ['./chercher-contrat.component.css']
})
export class ChercherContratComponent implements OnInit {
  contractForm = new FormGroup({
    valeur: new FormControl('')
  })
  @Input()
  contratsBeforeRecherch: any;
  @Output()
  contratsAfterRecherch = new EventEmitter();
  list: any = [];
  constructor() {
  }

  ngOnInit(): void {
    var modals = document.querySelectorAll(".chercher-modal");
    modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    });
  }

  onSubmit() {
    var i = 0;
    this.contratsBeforeRecherch.forEach((element: any) => {
      if (element.date.indexOf(this.contractForm.value.valeur) != -1) {
        this.list[i] = element;
        i++;
      }
      else if (element.prop.id == this.contractForm.value.valeur) {
        this.list[i] = element;
        i++;
      }
    });
    this.contratsAfterRecherch.emit(this.list);
    this.list = [];
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
