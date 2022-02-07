import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import axios from 'axios';
import { DemoService } from 'src/app/Services/demo/demo.service';

@Component({
  selector: 'app-admin-get-client',
  templateUrl: './admin-get-client.component.html',
  styleUrls: ['./admin-get-client.component.css']
})
export class AdminGetClientComponent implements OnInit {
  modals: any;
   static count = 0;
  order = 0;
   chercheForm = new FormGroup({
       username: new FormControl('')
   })
  client: any;
  alertMessage: any = "";
  successMessage: any = "";
  constructor(private demo: DemoService) {
     this.order =  AdminGetClientComponent.count;
     AdminGetClientComponent.count++; 
   }
@Output()
clientChercher = new EventEmitter();
  
   ngOnInit(): void {
     this.modals = document.querySelectorAll(".get-client-modal");   
      this.modals.forEach((element:any) => {
        this.hideModal(element);
        this.showModal(element);
      });     
   }
  hideModal(element: any) {
    element.querySelector(".close-modal-get-client").addEventListener('click', () => {
      element.classList.add("hidden");
    });
  }
  showModal(element: any) {
    element.previousElementSibling.addEventListener('click', () => {
      element.classList.remove("hidden");
    });
  }
   onSubmit() { 
     this.getClient(this.chercheForm.value.username);
      
      if(this.order == 0) 
      {
       setTimeout(() => { this.demo.step2();}, 1000);
      }
    else if (this.order == 1) {
    setTimeout(() => {  this.demo.step4();}, 1000);
    }
   
  }

 async getClient(username:string) {
   await axios.get("http://localhost:9191/api/users/getUserByUsername/" + username).then(
     (response) => {
       this.client = response.data,
         this.successMessage = "Les données du client sont récupérées",
         this.clientChercher.emit(this.client)
        
   }
   ).catch(()=>this.alertMessage = "Client n'exist pas"
   )
   console.log(this.client);
   setTimeout(() => {
     this.alertMessage = "",
        this.successMessage = ""
   }, 1000);
  
 }
  
  showDemo() {
    setTimeout(() => {
      this.demo.step3(this.order);
    },200);  
  }

}
