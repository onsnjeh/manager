import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bouton-add-document',
  templateUrl: './bouton-add-document.component.html',
  styleUrls: ['./bouton-add-document.component.css']
})
export class BoutonAddDocumentComponent {
//modal
closeResult = '';
registerForm:any = FormGroup;
submitted = false;
constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {}

open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  );
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
}
