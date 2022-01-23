import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/Services/clients/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
   
  clients: any;
  load: boolean = false;
  constructor(public clientsService: ClientsService) {
    
  }

 async ngOnInit(){
 await   this.clientsService.setClients();
   this.clients = this.clientsService.getClients();   
   setTimeout(() => {
      this.load = true;
    }, 500);
  }

}

