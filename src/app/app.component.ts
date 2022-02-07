
import {
  Component,
  ViewChild,
  ElementRef,
  Renderer2,
  HostBinding
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './Services/auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  
export class AppComponent {
  @ViewChild('mobileMenu') mobileMenu: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('toggleDarkUrl') toggleDarkUrl: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('toggleDarkUrlSmall') toggleDarkUrlSmall: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('logoUrl') logoUrl: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('profileMenu') profileMenu: ElementRef<HTMLInputElement> = {} as ElementRef;
   @ViewChild('profileMenuSmall') profileMenuSmall: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('adminProfileMenu') adminProfileMenu: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('adminProfileMenuSmall') adminProfileMenuSmall: ElementRef<HTMLInputElement> = {} as ElementRef;
   @ViewChild('darkModeIconeSmall') darkModeIconeSmall: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('darkModeIcone') darkModeIcone : ElementRef<HTMLInputElement> = {} as ElementRef;
  @HostBinding("style.--lightGray") 
  lighitGray: string = '';
  @HostBinding("style.--textColor") 
  textColor: string = '';

  title = 'ContratProjet';
  navbarUrls: any; 
  cssColors: any = {
    lighitGray: "#EAECEF",
    darktGray: "#0d0c16",
    white: "#F5FFFA",
    black:"#000000"
  };
  
  
  constructor(private route: Router, private elementRef: Renderer2, public authService: AuthService) { 
   
  }
   
  ngAfterViewInit() {   
     this.navbarUrls = document.getElementsByClassName("under-line-lightMotard");
    for (let index = 0; index < this.navbarUrls.length; index++) {
      const element = this.navbarUrls[index];     
      const element_mobile =  this.navbarUrls.length >index+7 ?this.navbarUrls[index+7]: this.navbarUrls[index-7];
  
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
    //add under ligne when the access is from the link directly
    this.addUnderLigneAcessFromUrl(window.location.href.replace("http://"+window.location.host+"/",""));
     
    this.authService.redirect("");
  }

  toggleMobileMenu() {
    this.mobileMenu.nativeElement.classList.toggle("hidden");
  }
  toggleUnderLigne(choix: string) {  
    this.route.navigate([choix]);
    //remove  under lign from all navbar elements
        for (let index = 0; index < this.navbarUrls.length; index++) {
          this.navbarUrls[index].classList.remove("under-line-lightMotard-check");
        }
    if (choix.includes("espaceAdmin")) {
       this.navbarUrls[6].classList.add("under-line-lightMotard-check");
      this.navbarUrls[13].classList.add("under-line-lightMotard-check");
    }
   else if (choix.includes("espaceClient")) {
       this.navbarUrls[5].classList.add("under-line-lightMotard-check");
      this.navbarUrls[12].classList.add("under-line-lightMotard-check");
      //redirect if user is logged
      this.authService.redirect(choix);
    }
    
  }
   
  addUnderLigneAcessFromUrl(Url: string) {
    switch (Url) {
      case "": this.navbarUrls[0].classList.add("under-line-lightMotard-check");
               this.navbarUrls[7].classList.add("under-line-lightMotard-check");
        break;
      case "aProposDeNous": this.navbarUrls[1].classList.add("under-line-lightMotard-check");
                            this.navbarUrls[8].classList.add("under-line-lightMotard-check");
        break;
      case "notreService": this.navbarUrls[2].classList.add("under-line-lightMotard-check");
        this.navbarUrls[9].classList.add("under-line-lightMotard-check");
        break;
      case "contactezNous": this.navbarUrls[3].classList.add("under-line-lightMotard-check");
        this.navbarUrls[10].classList.add("under-line-lightMotard-check");
        break;      
      case "espaceContrat": this.navbarUrls[4].classList.add("under-line-lightMotard-check");
        this.navbarUrls[11].classList.add("under-line-lightMotard-check");
        break;
      case "espaceClient": this.navbarUrls[5].classList.add("under-line-lightMotard-check");
        this.navbarUrls[12].classList.add("under-line-lightMotard-check");
        //redirect if user is logged
       this.authService.redirectSRole(); 
        break;
      case "espaceClientProfil": this.navbarUrls[5].classList.add("under-line-lightMotard-check");
        this.navbarUrls[12].classList.add("under-line-lightMotard-check");
        break;
      case "espaceAdminProfil": this.navbarUrls[6].classList.add("under-line-lightMotard-check");
        this.navbarUrls[13].classList.add("under-line-lightMotard-check"); 
        break;
      case "espaceClientContrats": this.navbarUrls[5].classList.add("under-line-lightMotard-check");
        this.navbarUrls[12].classList.add("under-line-lightMotard-check"); 
        break;
       case "espaceAdminContrats": this.navbarUrls[6].classList.add("under-line-lightMotard-check");
        this.navbarUrls[13].classList.add("under-line-lightMotard-check"); 
        break;
       case "espaceAdminReclamation": this.navbarUrls[6].classList.add("under-line-lightMotard-check");
        this.navbarUrls[13].classList.add("under-line-lightMotard-check"); 
        break;
       case "espaceAdminClients": this.navbarUrls[6].classList.add("under-line-lightMotard-check");
        this.navbarUrls[13].classList.add("under-line-lightMotard-check"); 
        break;
      default: this.navbarUrls[0].classList.add("under-line-lightMotard-check");
               this.navbarUrls[7].classList.add("under-line-lightMotard-check");
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
       this.toggleDarkUrlSmall.nativeElement.setAttribute("src", "/assets/imgs/toggle-on.svg");
      this.toggleDarkUrlSmall.nativeElement.setAttribute("style",
        "filter: invert(0%) sepia(83%) saturate(7500%) hue-rotate(210deg) brightness(115%) contrast(115%);");
      this.logoUrl.nativeElement.setAttribute("src", "/assets/imgs/logo_dark.png");
      
       this.darkModeIconeSmall.nativeElement.setAttribute("src", "/assets/imgs/day.png");
      this.darkModeIcone.nativeElement.setAttribute("src", "/assets/imgs/day.png");
    } 
    else if (this.lighitGray == this.cssColors.lightGray|| this.lighitGray == '' )
    {
      this.lighitGray = this.cssColors.darktGray;
      this.textColor = this.cssColors.white;
      this.toggleDarkUrl.nativeElement.setAttribute("src", "/assets/imgs/toggle-off.svg");
        this.toggleDarkUrl.nativeElement.setAttribute("style",
          "filter: invert(100%) sepia(65%) saturate(2%) hue-rotate(310deg) brightness(109%) contrast(101%);");
       this.toggleDarkUrlSmall.nativeElement.setAttribute("src", "/assets/imgs/toggle-off.svg");
        this.toggleDarkUrlSmall.nativeElement.setAttribute("style",
          "filter: invert(100%) sepia(65%) saturate(2%) hue-rotate(310deg) brightness(109%) contrast(101%);");

      this.logoUrl.nativeElement.setAttribute("src", "/assets/imgs/logo.png")
      
      this.darkModeIconeSmall.nativeElement.setAttribute("src", "/assets/imgs/night.png");
      this.darkModeIcone.nativeElement.setAttribute("src", "/assets/imgs/night.png");
    }
      
   
  }
  toggleProfileMenu() {
    ['ease-out', 'duration-100', 'scale-100'].map(
      c => this.profileMenu.nativeElement.classList.toggle(c));
    ['ease-in', 'duration-75', 'scale-95'].map(
      c => this.profileMenu.nativeElement.classList.toggle(c));
    this.profileMenu.nativeElement.classList.toggle("hidden");
    // ****************************************
     ['ease-out', 'duration-100', 'scale-100'].map(
      c => this.profileMenuSmall.nativeElement.classList.toggle(c));
    ['ease-in', 'duration-75', 'scale-95'].map(
      c => this.profileMenuSmall.nativeElement.classList.toggle(c));
    this.profileMenuSmall.nativeElement.classList.toggle("hidden");
  }
  toggleProfileAdminMenu() {
    ['ease-out', 'duration-100', 'scale-100'].map(
      c => this.adminProfileMenu.nativeElement.classList.toggle(c));
    ['ease-in', 'duration-75', 'scale-95'].map(
      c => this.adminProfileMenu.nativeElement.classList.toggle(c));
    this.adminProfileMenu.nativeElement.classList.toggle("hidden");
     ['ease-out', 'duration-100', 'scale-100'].map(
      c => this.adminProfileMenuSmall.nativeElement.classList.toggle(c));
    ['ease-in', 'duration-75', 'scale-95'].map(
      c => this.adminProfileMenuSmall.nativeElement.classList.toggle(c));
    this.adminProfileMenuSmall.nativeElement.classList.toggle("hidden");
  }
  signOut() {
    this.authService.signOut();
  }
 

}


