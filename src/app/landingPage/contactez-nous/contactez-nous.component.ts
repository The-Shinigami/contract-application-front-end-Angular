import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  ReclamationService
} from 'src/app/Services/reclamation/reclamation.service';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.css']
})
export class ContactezNousComponent implements OnInit {
  alertMessage = ""
  successMessage = ""
  load: boolean = false;
  reclamationForm = new FormGroup({
    email: new FormControl(''),
    desc: new FormControl(''),
    date: new FormControl('')
  })
  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.load = true;
    }, 500); 
  }
  async onSubmit() {
    var date = new Date();
    this.reclamationForm.setValue({
      email: this.reclamationForm.value.email,
      desc: this.reclamationForm.value.desc,
      date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
    })
    await this.reclamationService.setReclamation(this.reclamationForm.value);
    if (this.reclamationService.state) {
      this.successMessage = "La reclamation a bien envoyez"
    } else {
      this.alertMessage = "La reclamation a echoué"
    }
    setTimeout(
     ()=> {
        this.successMessage= ""
        this.alertMessage =""
      }, 2000); 

  }

  async setReclamation(reclamationForm: any) {
    await this.reclamationService.setReclamation(reclamationForm);
  }
}