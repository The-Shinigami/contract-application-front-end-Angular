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
  list: any=[];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {  
    var i = 0;
    console.log(this.contratsBeforeRecherch);
    this.contratsBeforeRecherch.forEach((element: any) => {
      if (element.date.indexOf(this.contractForm.value.valeur) != -1 ) {
        this.list[i] = element;
        i++;
      }
      else if (element.prop.id == this.contractForm.value.valeur ) {
        this.list[i] = element;
        i++;
      }
    });
    console.log(this.list);
    this.contratsAfterRecherch.emit(this.list);
    this.list = [];
  }


}
