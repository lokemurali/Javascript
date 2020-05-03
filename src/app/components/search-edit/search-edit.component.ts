import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-search-edit',
  templateUrl: './search-edit.component.html',
  styleUrls: ['./search-edit.component.css']
})
export class SearchEditComponent implements OnInit {

  AddPage: boolean = false;
  EditForm: FormGroup;
  message: string;
  Flag: string;
  modalRef: BsModalRef;
  btnName: string;


  constructor(private formBuilder: FormBuilder, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  BacktoSearchResult(){

  }

  decline(): void {
    this.modalRef.hide();
}

confirm(): void {
  if (this.Flag === 'A') {
      this.modalRef.hide();
      this.Add();

  }
  if (this.Flag === 'U') {
      this.modalRef.hide();
      this.Update();
  }
  if (this.Flag === 'D') {
      this.modalRef.hide();
      this.Delete();
  }
  if (this.Flag === 'R') {
      this.modalRef.hide();
      this.Reset();
  }

}

Add(){

}

Update(){

}

Delete(){
  
}

Reset()
{
  
}


  createForm() {
    this.EditForm = this.formBuilder.group({
        ReportedDateTime: new FormControl(),
        IA: new FormControl(),
        IR: new FormControl(),
        Severity: new FormControl(),
        FunctionalArea: new FormControl(),
        ReportedBy: new FormControl(),
        ProblemReported: new FormControl(),
        RootCause: new FormControl(),
        ActionResolutionWorkaround: new FormControl(),
        LongTermSolutionNeeded: new FormControl(),
        Redirectedtootherteams: new FormControl(),
        Timetakentoresolvetheproblem: new FormControl(),
        Team: new FormControl()
    });

}

openModal(template: TemplateRef<any>, action) {
  if (action === 'Add') {
      this.message = "Are you sure want to Add ?";
      this.Flag = 'A';
  }
  if (action === 'Update') {
      this.message = "Are you sure want to update ?";
      this.Flag = 'U';
  }
  else if (action === 'delete') {
      this.message = "Are you sure want to delete ?";
      this.Flag = 'D';
  }
  else if (action === 'reset') {
      this.message = "Are you sure want to clear ?";
      this.Flag = 'R';
  }
  this.modalRef = this.modalService.show(template, { class: 'modal-sm' });

}

}