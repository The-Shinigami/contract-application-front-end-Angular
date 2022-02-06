import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { DemoService } from 'src/app/Services/demo/demo.service';

@Component({
  selector: 'app-admin-get-prop',
  templateUrl: './admin-get-prop.component.html',
  styleUrls: ['./admin-get-prop.component.css']
})
export class AdminGetPropComponent implements OnInit {

  modals: any;
   chercheForm = new FormGroup({
       idProduit: new FormControl('')
   })
  produit: any;
  alertMessage: any = "";
  successMessage: any = "";
  constructor(private demo:DemoService) { }
@Output()
produitChercher = new EventEmitter(); 
   ngOnInit(): void {
     this.modals = document.querySelectorAll(".get-produit-modal");   
      this.modals.forEach((element:any) => {
        this.hideModal(element);
        this.showModal(element);
      });     
   }
  hideModal(element: any) {
    element.querySelector(".close-modal-get-produit").addEventListener('click', () => {
      element.classList.add("hidden");
    });
  }
  showModal(element: any) {
    element.previousElementSibling.addEventListener('click', () => {
      element.classList.remove("hidden");
    });
  }
  onSubmit() {
    console.log(this.chercheForm.value);
    this.getProduit(this.chercheForm.value.idProduit);
      this.modals = document.querySelectorAll(".get-produit-modal");   
    this.modals.forEach((element: any) => {
        element.classList.add("hidden");
    }); 
    this.demo.step5();
  }

 async getProduit(idProduit:string) {
   await axios.get("http://localhost:9191/api/propreties/getPropById/"+idProduit).then(
     (response) => {
       this.produit = response.data,
         this.successMessage = "Les données du produit sont récupérées",
         this.produitChercher.emit(this.produit)
   }
   ).catch(()=>this.alertMessage = "Produit n'exist pas")
   
   setTimeout(() => {
     this.alertMessage = "",
     this.successMessage = ""
   }, 1000);
  }
}
