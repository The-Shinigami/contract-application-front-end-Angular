import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-contactez-nous',
  templateUrl: './contactez-nous.component.html',
  styleUrls: ['./contactez-nous.component.css']
})
export class ContactezNousComponent implements OnInit {
  
  reclamationForm = new FormGroup({
    email: new FormControl(''),
    desc: new FormControl(''),
    date: new FormControl('')
  })
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    var date = new Date();
    this.reclamationForm.setValue({
      email: this.reclamationForm.value.email,
      desc: this.reclamationForm.value.desc,
      date: date.getDate() + "/" + (date.getMonth()+1)+ "/" + date.getFullYear()+ " " + date.getHours()+ ":" + date.getMinutes()
    })
    console.log(this.reclamationForm.value)
  }
}