import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class AuthServService {

  private url: string = "http://localhost:8000/login/auth";
  private head: string = "https://cors-anywhere.herokupp.com/";
  UsernameAcc:string;

  constructor(private http:HttpClient) { }

  login(Username: String, Password: String):Observable<any>{
    console.log("I am in login function");
    // return this.http.get<any>(this.head+this.url,user);
    return this.http.post<any>(`http://localhost:8000/login/auth`,{Username,Password})
    .pipe(
      map(user => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          user.authdata = window.btoa(Username + ":" + Password);
          localStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      })
    ) // End of Pipe
  } //End of login Function
} //End of class