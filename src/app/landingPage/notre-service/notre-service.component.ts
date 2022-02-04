import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
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
    // setTimeout(() => {
    //   this.animateDiv()
    // }, 500);   
  }

 makeNewPosition(){
    // Get viewport dimensions (remove the dimension of the div)
    var h =  20;
    var w =  20;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh,nw];    
    
 }
  animateDiv() {
    var newq = this.makeNewPosition();
    var oldq: any = $('.card-container_1').offset();
    var speed = this.calcSpeed([oldq.top, oldq.left], newq);
     var thiss: any = this;
    $('.card-container_1').animate({ top: newq[0], left: newq[1] }, speed, function(){
     thiss.animateDiv();        
    });  
    var newq_2 = this.makeNewPosition();
    var oldq_2: any = $('.card-container_2').offset();
    var speed_2 = this.calcSpeed([oldq_2.top, oldq_2.left], newq_2);
     var thiss: any = this;
    $('.card-container_2').animate({ top: newq_2[0], left: newq_2[1] }, speed_2, function(){
     thiss.animateDiv();        
    });  
   }
  calcSpeed(prev: any, next:any) {   
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);    
    var greatest = x > y ? x : y;    
    var speedModifier = 0.3;
    var speed = Math.ceil(greatest/speedModifier);
    return speed;
  }
 
}
