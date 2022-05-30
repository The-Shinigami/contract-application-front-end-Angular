import { Injectable } from '@angular/core';
import 'leader-line';
declare let LeaderLine: any;
@Injectable({
  providedIn: 'root'
})
export class DemoService {
 
  private line: any;
  private audio: any;
  private skipState = false;
  constructor() { 
    if (localStorage.getItem('demo') == "done") {
      this.skipState = true;
    }
   }
  step1() {
    localStorage.setItem('demo', 'done');
    if (!this.skipState) {
      document.getElementById("start_1")?.classList.remove('hidden');
      var start = document.getElementById("start_1");
      var end = document.getElementById("end_1");
      this.line = new LeaderLine(start, end, { dash: { animation: true }, dropShadow: true, color: 'black', size: 5 });
    } else {
       document.getElementById("demo")?.classList.remove('w-full');   
      document.getElementById("demo")?.classList.remove('h-full');  
     document.getElementById("end_1")?.classList.remove('absolute');   
    }
  }
  
  step2() {
    document.getElementById("end_1")?.classList.remove('absolute');     
    document.getElementById("start_1")?.classList.add('hidden');  
    document.getElementById("start_3")?.classList.add('hidden'); 
    if (!this.skipState) {
    document.getElementById("demo")?.classList.remove('w-full');   
    document.getElementById("demo")?.classList.remove('h-full');   
    document.getElementById("start_2")?.classList.remove('hidden');
    this.line.remove();
    var start = document.getElementById("start_2");
      var end = document.getElementById("end_2");
    this.line =  new LeaderLine(start,end,{dash: {animation: true},dropShadow: true,color: 'black', size: 5});
    }
  }
  step3(order: any) {
    document.getElementById("end_2")?.classList.remove('absolute');     
    document.getElementById("start_2")?.classList.add('hidden');  
    document.getElementById("start_1")?.classList.add('hidden'); 
    if (!this.skipState) {   
    document.getElementById("start_3")?.classList.remove('hidden');
    this.line.remove();
      var start = document.getElementById("start_3");
      if(order == 0)
       { var end = document.getElementsByClassName("end_3")[0];
       this.line = new LeaderLine(start, end, { dash: { animation: true }, dropShadow: true, color: 'black', size: 5 });}
      else if (order == 1)
      {  var end_1 = document.getElementsByClassName("end_3")[1]; 
      this.line =  new LeaderLine(start,end_1,{dash: {animation: true},dropShadow: true,color: 'black', size: 5});}
    
    }
  }
  step4() {
    document.getElementById("end_3")?.classList.remove('absolute');     
    document.getElementById("start_2")?.classList.add('hidden');  
     document.getElementById("start_1")?.classList.add('hidden'); 
     document.getElementById("start_3")?.classList.add('hidden'); 
    if (!this.skipState) {   
    document.getElementById("start_4")?.classList.remove('hidden');
    this.line.remove();
      var start = document.getElementById("start_4");   
      var end = document.getElementById("end_4"); 
      this.line =  new LeaderLine(start,end,{dash: {animation: true},dropShadow: true,color: 'black', size: 5});
    
    }
   }
  step5() {
    document.getElementById("end_4")?.classList.remove('absolute');     
    document.getElementById("start_2")?.classList.add('hidden');  
     document.getElementById("start_1")?.classList.add('hidden'); 
      document.getElementById("start_3")?.classList.add('hidden'); 
      document.getElementById("start_4")?.classList.add('hidden'); 
    if (!this.skipState) {   
    document.getElementById("start_5")?.classList.remove('hidden');
    this.line.remove();
      var start = document.getElementById("start_5");   
      var end = document.getElementById("end_5"); 
      this.line =  new LeaderLine(start,end,{dash: {animation: true},dropShadow: true,color: 'black', size: 5});  
    }
  }
  step6() {    
    document.getElementById("end_1")?.classList.remove('absolute');  
     document.getElementById("demo")?.classList.remove('w-full');   
    document.getElementById("demo")?.classList.remove('h-full'); 
    if (!this.skipState) { 
    document.getElementById("start_6")?.classList.remove('hidden');
    }
    this.skip();
  }
  
  
  getLine() {
    return this.line;
  }
  setLine(line: any) {
    this.line = line;
  }

  skip() {
    this.line.remove()
    document.getElementById("start_1")?.classList.add('hidden');
    document.getElementById("start_2")?.classList.add('hidden');
    document.getElementById("start_3")?.classList.add('hidden');
    document.getElementById("start_4")?.classList.add('hidden');
    document.getElementById("start_5")?.classList.add('hidden');
    document.getElementById("end_1")?.classList.remove('absolute');
    document.getElementById("demo")?.classList.add('hidden');
    var start = document.getElementById("start");   
      var end = document.getElementById("end"); 
     this.line =  new LeaderLine( start,end,{dash: {animation: true},dropShadow: true,color: 'black', size: 1});  
    this.line.remove()
    this.skipState = true;
  }

  play() {
    this.audio = new Audio();
    this.audio.src = "../../assets/audio/cong.mp3";
    this.audio.load();
    this.audio.play();
   }
  stop() {
    this.audio.pause();
    this.audio = null;
  }
}
