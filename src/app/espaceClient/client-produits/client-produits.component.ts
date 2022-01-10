import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/Services/produits/produit.service';

@Component({
  selector: 'app-client-produits',
  templateUrl: './client-produits.component.html',
  styleUrls: ['./client-produits.component.css']
})
export class ClientProduitsComponent implements OnInit {
  produits: any;
  constructor(public produitService: ProduitService) {
    
  }

 async ngOnInit(){
 await   this.produitService.setProduits();
    this.produits = this.produitService.getProduits();   
  }

}
