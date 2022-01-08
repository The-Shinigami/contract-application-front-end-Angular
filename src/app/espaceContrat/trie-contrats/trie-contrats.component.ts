import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  FormGroup,
  FormControl
} from '@angular/forms';
@Component({
  selector: 'app-trie-contrats',
  templateUrl: './trie-contrats.component.html',
  styleUrls: ['./trie-contrats.component.css']
})
export class TrieContratsComponent implements OnInit {
  contractForm = new FormGroup({
    choix: new FormControl(''),
    variation: new FormControl('')
  })
  @Input()
  contratsBeforeTrie: any;
  @Output()
  contratsAfterTrie = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    var modals = document.querySelectorAll(".trie-modal");
    modals.forEach((element: any) => {
      this.hideModal(element);
      this.showModal(element);
    });
  }

  onSubmit() {
    switch (this.contractForm.value.choix) {
      case "date":
        if (this.contractForm.value.variation == "croi") {

          this.contratsBeforeTrie.sort(function (a: any, b: any) {
            var nameA = a.date.toUpperCase(); // ignore upper and lowercase
            var nameB = b.date.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
        } else if (this.contractForm.value.variation == "decroi") {

          this.contratsBeforeTrie.sort(function (a: any, b: any) {
            var dateA = a.date.toUpperCase(); // ignore upper and lowercase
            var dateB = b.date.toUpperCase(); // ignore upper and lowercase
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
              return 1;
            }

            // names must be equal
            return 0;
          }).reverse();
        }
        break;
      case "prix":
        if (this.contractForm.value.variation == "croi") {
          this.contratsBeforeTrie.sort(function (a: any, b: any) {
            var costA = a.cost
            var costB = b.cost
            if (costA < costB) {
              return -1;
            }
            if (costA > costB) {
              return 1;
            }

            // names must be equal
            return 0;
          });
        } else if (this.contractForm.value.variation == "decroi") {
          this.contratsBeforeTrie.sort(function (a: any, b: any) {
            var costA = a.cost
            var costB = b.cost
            if (costA < costB) {
              return -1;
            }
            if (costA > costB) {
              return 1;
            }

            // names must be equal
            return 0;
          }).reverse();
        }
        break;

    }
    this.contratsAfterTrie.emit(this.contratsBeforeTrie);
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