import {
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import {
  ClientsService
} from 'src/app/Services/clients/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {

  clients: any;
  load: boolean = false;
  constructor(public clientsService: ClientsService,public cd: ChangeDetectorRef) {}
  async ngOnInit() {
    await this.clientsService.setClients();
    this.clients = this.clientsService.getClients();
    setTimeout(() => {
      this.load = true;
    }, 500);
  }
  setClient(client: any) {
   
  for (let index = 0; index < this.clients.length; index++) {
    this.clients[index];
    if (this.clients[index].id_user == client.id_user) {      
          this.clients[index] = client;    
      }
  }
  }
}