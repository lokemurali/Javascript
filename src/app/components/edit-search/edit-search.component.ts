import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ErrorStateMatcher } from '@angular/material/core';
import { SearchService } from 'src/app/services/search.service';
import { Router } from '@angular/router';
import { ToastConfig, Toaster, ToastType } from "ngx-toast-notifications";
import { dataModel } from 'src/model/dataModel';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-search',
  templateUrl: './edit-search.component.html',
  styleUrls: ['./edit-search.component.css']
})
export class EditSearchComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  AddPage: boolean = true;
  EditForm: FormGroup;
  message: string;
  Flag: string;
  modalRef: BsModalRef;
  btnName: string;
  public breakpoint: number;
  startDate = new Date(1990, 0, 1);
  supervisor:string;
  EditSearchData:any
  IR: any;
  OnDataModel: dataModel;
  public DialogResult;


  ngOnInit(): void {

      }

    createForm() {
    this.EditForm = this.formBuilder.group({
        SNO: new FormControl(),
        ReportedDateTime: new FormControl(null,[Validators.required]),
        IA: new FormControl(null,[Validators.required]),
        IR: new FormControl(null,[Validators.required]),
        Severity: new FormControl(null,[Validators.required]),
        FunctionalArea: new FormControl(null,[Validators.required]),
        ReportedBy: new FormControl(null,[Validators.required]),
        ProblemReported: new FormControl(null,[Validators.required]),
        RootCause: new FormControl(null,[Validators.required]),
        ActionResolutionWorkaround: new FormControl(null,[Validators.required]),
        LongTermSolutionNeeded: new FormControl(null,[Validators.required]),
        Redirectedtootherteams: new FormControl(null,[Validators.required]),
        Timetakentoresolvetheproblem: new FormControl(null,[Validators.required]),
        Team: new FormControl(null,[Validators.required])
    });
    
}

formChanged()
  {

  }
  BacktoSearchResult(){
      this.router.navigate(['/list']);
  }

  Add() {
    console.log("Update details");
    var NewData = [];
    NewData.push(this.EditForm.value);

    this.SearchSer.AddData(NewData[0])
        .subscribe(data => {
            this.toaster.open({
                caption: "Add Successfully",
                type: "success",
                position: "top-right"
            });
            this.Reset();
        },
            error => {
                this.toaster.open({
                    caption: error,
                    type: "danger",
                    position: "top-right"
                });
            });
}


// Update or Edit existing details
Update(){
  console.log("Update details");
    var EditData = [];
    EditData.push(this.EditForm.value);
    this.OnDataModel = this.EditForm.value;
    // console.log("after edit-form",this.OnDataModel);
    // console.log("search ID",this.EditSearchData.ID);
    // EditData.push(this.EditForm.value);
    console.log("check for SNO",this.OnDataModel);
    console.log("up", this.EditSearchData._id);
    console.log("up", this.OnDataModel.IR_NO);

    this.SearchSer.updateData(this.EditSearchData._id, EditData[0])
        .subscribe(data => {
            this.toaster.open({
                caption: "Updated Successfully",
                type: "success",
                position: "top-right"
            });
            this.BacktoSearchResult()
        },
            error => {
                this.toaster.open({
                    caption: error,
                    type: "danger",
                    position: "top-right"
                });
            });
}


Delete(){
  console.log("delete details");
    console.log("up", this.EditSearchData._id);
    this.SearchSer.deleteData(this.EditSearchData._id)
        .subscribe(data => {
            this.toaster.open({
                caption: "Deleted Successfully",
                type: "success",
                position: "top-right"
            });
            this.BacktoSearchResult()
        },
            error => {
                this.toaster.open({
                    caption: error,
                    type: "danger",
                    position: "top-right"
                });
            });

}

Reset() {
  this.EditForm.reset();
}

onSubmit(){
  console.log("Add/Update");
}

openDialog(action) {
  console.log("in dialog", action);
  if (action === 'Add') {
      this.message = "Are you sure want to Add ?";
      this.Flag = 'A';
  }
  if (action === 'Update') {
      this.message = "Are you sure want to update ?";
      console.log("print msg",this.message);
      this.Flag = 'U';
  }
  else if (action === 'Delete') {
      this.message = "Are you sure want to delete ?";
      this.Flag = 'D';
  }
  else if (action === 'Reset') {
      this.message = "Are you sure want to clear ?";
      this.Flag = 'R';
  }

  let dialogref = this.dialog.open(DialogComponent, {data: {text : this.message}});

  dialogref.afterClosed().subscribe(results => {
    console.log("dialog results:",results);
    if(results)
    {
      this.DialogResult = "confirm";
    }
    console.log("dialog results:",this.DialogResult);

    if(this.DialogResult == 'confirm')
    {
      console.log("inside decision");
      if (this.Flag === 'A') {
          this.Add();

      }
      if (this.Flag === 'U') {
          this.Update();
      }
      if (this.Flag === 'D') {
          this.Delete();
      }
      if (this.Flag === 'R') {
          this.Reset();
      }
    } 
  })
  // this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  

}

//Popup before action:


constructor(private toaster: Toaster, public dialog: MatDialog,public formBuilder: FormBuilder, private modalService: BsModalService,private SearchSer:SearchService,public router: Router) { 

//Inside constructor

this.createForm();

var CurrentURL;
CurrentURL = this.router.url;

if (!localStorage.getItem('Name')) {   //No authorized, redirected to login.
  // this.router.navigate(['/login']);
  console.log("via URL");
}
console.log(CurrentURL);
if (this.SearchSer.EditSearchData && CurrentURL === "/update") {
    console.log("edit detail");
    this.AddPage = false;
    this.supervisor = 'lokesh';
    this.EditSearchData = this.SearchSer.EditSearchData;
    console.log(this.EditSearchData);
    this.IR = this.EditSearchData.IR;
    this.EditForm.setValue({
    SNO: (this.EditSearchData.SNo)? this.EditSearchData.SNo:"",
    ReportedDateTime: (this.EditSearchData.ReporteDateTime) ? this.EditSearchData.ReporteDateTime: "",
    IA:(this.EditSearchData.IA) ? this.EditSearchData.IA: "",
    IR:(this.EditSearchData.IR) ? this.EditSearchData.IR: "",
    Severity:(this.EditSearchData.Severity) ? this.EditSearchData.Severity: "",
    FunctionalArea:(this.EditSearchData.FunctionalArea) ? this.EditSearchData.FunctionalArea: "",
    ReportedBy:(this.EditSearchData.ReportedBy) ? this.EditSearchData.ReportedBy: "",
    ProblemReported:(this.EditSearchData.ProblemReported) ? this.EditSearchData.ProblemReported: "",
    RootCause:(this.EditSearchData.RootCause) ? this.EditSearchData.RootCause: "",
    ActionResolutionWorkaround: (this.EditSearchData.ActionResolutionWorkaround) ? this.EditSearchData.ActionResolutionWorkaround : "",
    LongTermSolutionNeeded: (this.EditSearchData.LongTermSolutionNeeded) ? this.EditSearchData.LongTermSolutionNeeded : "",
    Redirectedtootherteams:(this.EditSearchData.RedirectedtoOtherTeams) ? this.EditSearchData.RedirectedtoOtherTeams :"",
    Timetakentoresolvetheproblem: (this.EditSearchData.Timetakentoresolvetheproblem) ? this.EditSearchData.Timetakentoresolvetheproblem : "",
    Team: (this.EditSearchData.Team) ? this.EditSearchData.Team : "",
})

}

}

}

