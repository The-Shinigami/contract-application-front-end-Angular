import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { ISourceOptions, Main } from 'tsparticles';
import { loadConfettiShape } from 'tsparticles-shape-confetti';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  load: boolean = false;
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 500);
    setTimeout(() => {
     var canvas = document.querySelector("canvas");
    if(canvas != null)
    {
    canvas.style.position="fixed"
     canvas.style.top = "100px"
    } 
    }, 1000);
    
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
            value: "#FCD535"
        },
        links: {
            color: "#FCD535",
            distance: 200,
            enable: true,
            opacity: 0.7,
            width: 1.5
        },
        collisions: {
            enable: true
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
            type: "diamond"
        },
        size: {
            random: true,
            value: 3
        }

    },
    detectRetina: true  
  };

  particlesInit(main: Main): void {
    loadConfettiShape(main);
  }
 
 
}
