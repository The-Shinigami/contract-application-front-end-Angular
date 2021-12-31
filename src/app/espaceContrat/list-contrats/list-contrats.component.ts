import {
  Component,
  OnInit,
  AfterViewInit
} from '@angular/core';
import {
  DetailContratComponent
} from '../detail-contrat/detail-contrat.component';
@Component({
  selector: 'app-list-contrats',
  templateUrl: './list-contrats.component.html',
  styleUrls: ['./list-contrats.component.css']
})
export class ListContratsComponent implements OnInit {
  contrats: any = {};
  sourceContrats: any = {};
  constructor() {

  }

  ngOnInit(): void {
    this.contrats = [{
        date: "2020.1.1",
        numeroContrat: "21587643",
        idProduit: "2020",
        owner: {
          id: "123556"
        },
        bayer: {
          id: "2545623"
        },
        type: "land contract",
        cost: 120,
        description: "aaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaa"
      },
      {
        date: "2020.2.1",
        numeroContrat: "21587643",
        idProduit: "507",
        owner: {
          id: "5555"
        },
        bayer: {
          id: "66666666"
        },
        type: "land contract",
        cost: 12,
        description: "aaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaa"
      },
      {
        date: "2020.3.1",
        numeroContrat: "21587643",
        idProduit: "505",
        owner: {
          id: "00000"
        },
        bayer: {
          id: "11111111"
        },
        type: "land contract",
        cost: 190,
        description: "aaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaa aaaaaa"
      }
    ]
    this.sourceContrats = this.contrats;
  }
  ngAfterViewInit() {
    DetailContratComponent.modals.forEach((element: any) => {
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