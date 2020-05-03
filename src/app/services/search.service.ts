import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { OncallDto } from './Oncall_Dto';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchUrl:String = "http://localhost:8000/login/search";
  searchStr:string;
  Username:string;
  public EditSearchData: any;
  searchdet_withId:any;
  
  constructor(private http:HttpClient) { }

  SearchDetails(SearchText): Observable<OncallDto> {
    return this.http.get("http://localhost:8000/search/params",{ params: { params: SearchText } }).pipe(
        map(item => {
          return item as OncallDto;
        })
    );
};

//To Display all the records
searchAll(): Observable<OncallDto> {
  return this.http.get("http://localhost:8000/search/All").pipe(
      map(item => {
        return item as OncallDto;
      })
  );
};

//Add Details:
public AddData(newData): Observable<any> {
  {
      var ReportedDateTime;
      ReportedDateTime = new Date();
      console.log("Add-Data", newData);
      // var ParameterDetails = [
      //     {
      //         "ReportedDateTime": ReportedDateTime,
      //         "IA": localStorage.getItem('Name'),
      //         "IR": Details.IR,
      //         "Severity": Details.Severity,
      //         "FunctionalArea": Details.FunctionalArea,
      //         "ReportedBy": Details.ReportedBy,
      //         "ProblemReported": Details.ProblemReported,
      //         "RootCause": Details.RootCause,
      //         "ActionResolutionWorkaround": Details.ActionResolutionWorkaround,
      //         "LongTermSolutionNeeded": Details.LongTermSolutionNeeded,
      //         "Redirectedtootherteams": Details.Redirectedtootherteams,
      //         "Timetakentoresolvetheproblem": Details.Timetakentoresolvetheproblem,
      //         "Team": Details.Team,
      //     }
      // ]
      // const httpOptions = {
      //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      //     body: ParameterDetails
      // };

      // return this.http.post(this.baseUrl+'incident/', httpOptions.body)
      //     .map(item => item as any);
      return this.http.post("http://localhost:8000/search/insert",{newData});

  }
}

//Delete Data from the collection

public deleteData(objID):Observable<any>{
  console.log("before delete call", objID); 
  return this.http.delete("http://localhost:8000/search/delete",{ params: { params: objID } });
}

// Edit/Update call
public updateData(ID, editData): Observable<any> {
  {

      var ReportedDateTime;
      ReportedDateTime = new Date();
      console.log("service-Data", editData);
      // var ParametereditData = [
      //     {
      //         "_id": editData._id,
      //         "ReportedDateTime": ReportedDateTime,
      //         "IA": editData.IA,
      //         "IR": editData.IR,
      //         "Severity": editData.Severity,
      //         "FunctionalArea": editData.FunctionalArea,
      //         "ReportedBy": editData.ReportedBy,
      //         "ProblemReported": editData.ProblemReported,
      //         "RootCause": editData.RootCause,
      //         "ActionResolutionWorkaround": editData.ActionResolutionWorkaround,
      //         "LongTermSolutionNeeded": editData.LongTermSolutionNeeded,
      //         "Redirectedtootherteams": editData.Redirectedtootherteams,
      //         "Timetakentoresolvetheproblem": editData.Timetakentoresolvetheproblem,
      //         "Team": editData.Team,
      //         "__v": editData.__v
      //     }
      // ]
      // const httpOptions = {
      //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      //     body: editData
      // };
      return this.http.put("http://localhost:8000/search/update",{ID,editData});
      // return this.http.put("http://localhost:8000/search/edit", httpOptions.body)
      //     .map(item => item as any);


  }
}

}
