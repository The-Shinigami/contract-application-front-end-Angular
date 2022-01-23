import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notre-service',
  templateUrl: './notre-service.component.html',
  styleUrls: ['./notre-service.component.css']
})
export class NotreServiceComponent implements OnInit {
  load: boolean = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 500);
  }

}
