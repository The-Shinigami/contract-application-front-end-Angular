import {
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  hide
} from '@popperjs/core';
import {
  ContratsService
} from 'src/app/Services/contrats/contrats.service';
import { DemoService } from 'src/app/Services/demo/demo.service';

@Component({
  selector: 'app-admin-ajouter-contrat',
  templateUrl: './admin-ajouter-contrat.component.html',
  styleUrls: ['./admin-ajouter-contrat.component.css']
})
export class AdminAjouterContratComponent implements OnInit {
  modals: NodeListOf < Element > ;
  pageNumber = 0;
  buyerForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    cin: new FormControl(''),
    tel: new FormControl('')
  })
  sellerForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    cin: new FormControl(''),
    tel: new FormControl('')
  })
  propForm = new FormGroup({
    typePrp: new FormControl(''),
    desc: new FormControl(''),
    cost: new FormControl(''),
    date: new FormControl('')
  })

  @Output()
  callContrats = new EventEmitter();
load: boolean = true;
  constructor(public contratsService: ContratsService, private demo:DemoService) {}

  ngOnInit(): void {
    this.modals = document.querySelectorAll(".ajouter-modal");
    this.showModal(this.modals[0]);

    this.modals.forEach((element: any) => {
      this.hideModal(element);
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
    if (this.pageNumber < 2) {
      this.modals[this.pageNumber].classList.add("hidden");
      this.modals[this.pageNumber + 1].classList.remove("hidden");
      this.pageNumber++;
    } else {
      this.modals[this.pageNumber].classList.add("hidden");
      this.pageNumber = 0;
    }
  }
  onSubmitBuyer() {
     this.contratsService.setNewContractBuyer(this.buyerForm.value);
   
  }
  onSubmitSeller() {
    this.contratsService.setNewContractseller(this.sellerForm.value);
  }
  async onSubmitProp() {
      this.load = false;
    if(localStorage.getItem("prop") == null)
    { await  this.contratsService.setNewContractProp({
         typePrp: this.propForm.value.typePrp,
       desc: this.propForm.value.desc,
         owner : this.contratsService.newContract.buyer
       });}
    this.contratsService.setNewContractDate(this.propForm.value.date);
    this.contratsService.setNewContractCost(this.propForm.value.cost);   
    await this.contratsService.addNewContract();
    this.callContrats.emit(); 
    this.demo.step6();
      this.load = true;
    this.demo.play();
  }
  setSeller(seller: any) {
    this.contratsService.setContractSeller(seller);
    setTimeout(() => {
      this.next();
    }, 1100);
  }
  setBuyer(buyer: any) {
    this.contratsService.setContractBuyer(buyer);
    setTimeout(() => {
      this.next();
    }, 1100);
  }
  setProduit(produit: any) {
    this.contratsService.setContractProp({
         id: produit.id,
         typePrp: produit.typePrp,
         desc: produit.desc,
         owner : this.contratsService.newContract.buyer
       });
    this.propForm.setValue({
    typePrp: produit.typePrp,
    desc: produit.desc,
    cost: "",
    date: ""
    });
  }
  
  showDemo1() {
    setTimeout(() => {
      this.demo.step2();
    }, 20);
    
  }

  skip() {
    this.demo.skip();
  }
}