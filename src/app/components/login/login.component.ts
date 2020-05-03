import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServService } from 'src/app/services/auth-serv.service';
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  public user_nam:string;
  @Output() usernameEmitter = new EventEmitter<String>();
  public loginid = []; // to temp ptint the login ids from local json file.
  error: any;
  

  constructor(private auth_ser:AuthServService,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
    this.oninitialize();
  }

  oninitialize(){
  this.loginForm = new FormGroup({
    Username: new FormControl(null,[Validators.required]),
    Password: new FormControl(null,[Validators.required])
  });
  }

  onSubmit() {
    console.log("FORM-GROUP", this.loginForm);
    console.log("onsubmit");
    if(!this.loginForm.get('Username').valid)
    {
      alert("Username cant be Empty");
    }
    if(!this.loginForm.get('Password').valid)
    {
      alert("Enter password");
    }
    if(this.loginForm.valid)
    {
        this.auth_ser.login(this.loginForm.value.Username, this.loginForm.value.Password).subscribe(data=> {
          console.log(this.loginForm.value);
          console.log(data.Username);
          this.auth_ser.UsernameAcc = this.loginForm.value.Username;        
          this.router.navigate(['/search']);
            },
            error => {
              this.error = error;
              alert(error);
            });
    }
   };
  
//  ******************************yet to validate:
  reset() {
      console.log("Forget Password");
     }

  signUp() {
      console.log("New User");
     }


}
