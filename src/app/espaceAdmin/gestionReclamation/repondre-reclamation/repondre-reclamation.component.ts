import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  ReclamationService
} from 'src/app/Services/reclamation/reclamation.service';

@Component({
  selector: 'app-repondre-reclamation',
  templateUrl: './repondre-reclamation.component.html',
  styleUrls: ['./repondre-reclamation.component.css']
})
export class RepondreReclamationComponent implements OnInit {
  reclamationForm = new FormGroup({
    email: new FormControl(''),
    reponse: new FormControl(''),
    id: new FormControl(''),
    date: new FormControl(''),
    desc:new FormControl('')
  })
  @Input()
  reclamation: any;
  @Output()
  reponse = new EventEmitter();

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    var modals = document.querySelectorAll(".modal");
    modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    });
    this.reclamationForm.setValue({
      email: this.reclamation.email,
      reponse: this.reclamationForm.value.reponse,
      id: this.reclamation.id,
      date: this.reclamation.date,
      desc: this.reclamation.desc
    })
  }
  onSubmit() {
    this.reclamationService.sendResponse(this.reclamationForm.value)
    this.reponse.emit(this.reclamationForm.value)
  }
  hideModal(element: any) {
    element.querySelector(".close-modal").addEventListener('click', () => {
      element.classList.add("hidden");
    });
  }
  showModal(element: any) {
    element.previousElementSibling.addEventListener('click', () => {
      element.classList.remove("hidden");
    });

  }
}