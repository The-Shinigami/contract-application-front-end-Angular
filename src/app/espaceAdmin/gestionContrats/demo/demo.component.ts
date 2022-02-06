import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo/demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterViewInit {
   line: any;
  constructor(private demo:DemoService) { }

  ngOnInit(): void {
  }
    ngAfterViewInit() {
    this.demo.step1();      
  }
 

  skip() {
    this.demo.skip();
  }

}
