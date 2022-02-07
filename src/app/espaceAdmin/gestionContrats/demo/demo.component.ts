import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DemoService } from 'src/app/Services/demo/demo.service';
import { Main } from "tsparticles";
import { loadConfettiShape } from "tsparticles-shape-confetti";
import { ISourceOptions } from 'tsparticles';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterViewInit {
   line: any;
  constructor(private demo:DemoService ) { }

  ngOnInit(): void {
  }
    ngAfterViewInit() {
      this.demo.step1();   
  }
 

  skip() {
    this.demo.skip();
  }
  endDemo() {
    document.getElementById("start_6")?.classList.add("hidden");
    this.demo.stop();
  }
  
    title = "CodeSandbox";
  options: ISourceOptions = {
  background: {

        color: {
            value: "black"
        }

    },
    fpsLimit: 60,
    interactivity: {

        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }

    },
    particles: {

        color: {
        value: ["#1E00FF", "#FF0061", "#E1FF00", "#00FF9E"]
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            value: 1
        },
        shape: {
        type: "confetti",
        options: {
          confetti: {
            type:  "square"
          }
        }
      },
        size: {
            random: true,
            value: 3
        }

    },
    detectRetina: true,
     emitters: [
      {
        direction: "top-right",
        rate: {
          delay: 0.1,
          quantity: 10
        },
        position: {
          x: 0,
          y: 50
        },
        size: {
          width: 0,
          height: 0
        }
      },
      {
        direction: "top-left",
        rate: {
          delay: 0.1,
          quantity: 10
        },
        position: {
          x: 100,
          y: 50
        },
        size: {
          width: 0,
          height: 0
        }
      }
    ]

  };
  particlesInit(main: Main): void {
    loadConfettiShape(main);
  }
 


}