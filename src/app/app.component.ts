
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  @ViewChild('mobileMenu') mobileMenu: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('toggleDarkUrl') toggleDarkUrl: ElementRef<HTMLInputElement> = {} as ElementRef;
   @ViewChild('logoUrl') logoUrl: ElementRef<HTMLInputElement> = {} as ElementRef;
  @HostBinding("style.--lightGray") 
  lighitGray: String = '';
  @HostBinding("style.--textColor") 
  textColor: String = '';
  title = 'ContratProjet';
  navbarUrls: any; 
  cssColors: any = {
    lighitGray: "#EAECEF",
    darktGray: "#0d0c16",
    white: "#F5FFFA",
    black:"#000000"
    };
  
  constructor(private route: Router, private elementRef: Renderer2) {}

  ngAfterViewInit() {
     this.navbarUrls = document.getElementsByClassName("under-line-lightMotard");
    for (let index = 0; index < this.navbarUrls.length; index++) {
      const element = this.navbarUrls[index];     
      const element_mobile =  this.navbarUrls.length >index+6 ?this.navbarUrls[index+6]: this.navbarUrls[index-6];
  
      element.addEventListener("click", () => {
        //remove  under lign from all navbar elements
        for (let index = 0; index < this.navbarUrls.length; index++) {
          this.navbarUrls[index].classList.remove("under-line-lightMotard-check");
        }
        //add under ligne to the element clicked
        element.classList.toggle("under-line-lightMotard-check");
        element_mobile.classList.toggle("under-line-lightMotard-check");
      });   
    }
    //add under ligne when the acess is from the link directly
    this.addUnderLigneAcessFromUrl(window.location.href.replace("http://"+window.location.host+"/",""));
  }
  toggleMobileMenu() {
    this.mobileMenu.nativeElement.classList.toggle("hidden");
  }
  toggleUnderLigne(choix: String) {  
    this.route.navigate([choix]);
  }
   
  addUnderLigneAcessFromUrl(Url: String) {
    switch (Url) {
      case "": this.navbarUrls[0].classList.add("under-line-lightMotard-check");
               this.navbarUrls[6].classList.add("under-line-lightMotard-check");
        break;
      case "aProposDeNous": this.navbarUrls[1].classList.add("under-line-lightMotard-check");
                            this.navbarUrls[7].classList.add("under-line-lightMotard-check");
        break;
      case "notreService": this.navbarUrls[2].classList.add("under-line-lightMotard-check");
        this.navbarUrls[8].classList.add("under-line-lightMotard-check");
        break;
      case "espaceContrat": this.navbarUrls[4].classList.add("under-line-lightMotard-check");
        this.navbarUrls[10].classList.add("under-line-lightMotard-check");
        break;
      default: this.navbarUrls[0].classList.add("under-line-lightMotard-check");
               this.navbarUrls[6].classList.add("under-line-lightMotard-check");
    }
  }

  toggleDarkMode() {
    if (this.lighitGray ==  this.cssColors.darktGray)
    { 
      this.lighitGray = this.cssColors.lightGray;
      this.textColor = this.cssColors.black;
      this.toggleDarkUrl.nativeElement.setAttribute("src", "/assets/imgs/toggle-on.svg");
      this.toggleDarkUrl.nativeElement.setAttribute("style",
        "filter: invert(0%) sepia(83%) saturate(7500%) hue-rotate(210deg) brightness(115%) contrast(115%);");
      this.logoUrl.nativeElement.setAttribute("src","/assets/imgs/logo_dark.png")
    } 
    else if (this.lighitGray == this.cssColors.lightGray|| this.lighitGray == '' )
    {
      this.lighitGray = this.cssColors.darktGray;
      this.textColor = this.cssColors.white;
      this.toggleDarkUrl.nativeElement.setAttribute("src", "/assets/imgs/toggle-off.svg");
        this.toggleDarkUrl.nativeElement.setAttribute("style",
        "filter: invert(100%) sepia(65%) saturate(2%) hue-rotate(310deg) brightness(109%) contrast(101%);");
      this.logoUrl.nativeElement.setAttribute("src","/assets/imgs/logo.png")
    }
      
   
  }
}
