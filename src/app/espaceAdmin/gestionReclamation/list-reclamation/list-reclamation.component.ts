import { Component, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/Services/reclamation/reclamation.service';

@Component({
  selector: 'app-list-reclamation',
  templateUrl: './list-reclamation.component.html',
  styleUrls: ['./list-reclamation.component.css']
})
export class ListReclamationComponent implements OnInit {
  reclamations: any;
  load = false;
  page = 1;
  constructor(private reclamationService:ReclamationService) { }

  ngOnInit(): void {
    this.getReclamation()
     setTimeout(() => {
      this.load = true;
    }, 500);
  }

 async getReclamation() {
    this.reclamations = await this.reclamationService.getReclamation();
 }
  setReclamation(reclamation: any) {
     for (let index = 0; index < this.reclamations.length; index++) {
    if (this.reclamations[index].id == reclamation.id) {      
          this.reclamations[index] = reclamation;    
      }
  }
  }

  changePage(n:number) {
    this.page = n;
      var Ar = document.getElementById("Ar");
      var Sr = document.getElementById("Sr");
    if (n == 1) {
      Sr?.classList.add("border-slate-400")
      Sr?.classList.add("border-b-4")
      Ar?.classList.remove("border-slate-400")
    } else {
      Sr?.classList.remove("border-slate-400")
      Ar?.classList.add("border-slate-400")
      Ar?.classList.add("border-b-4")
    }
  }
  

}
