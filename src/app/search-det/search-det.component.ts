import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from '../services/search.service';
import { dataModel } from 'src/model/dataModel';
import { OncallDto } from '../services/Oncall_Dto';

@Component({
  selector: 'app-search-det',
  templateUrl: './search-det.component.html',
  styleUrls: ['./search-det.component.css']
})
export class SearchDetComponent implements OnInit {
  oncalldata: dataModel;
  Username:string;
  TextSearch:string;
  ShowEditpanel: boolean;
  SearchPanel: boolean;
  showCount: number = 0;
  onCallData: any[];
  ShowSearchResult:Boolean = true;
  public editdata:any;
  filter1 = { ETKT: true, Genres: true, ACI: true, Sev_1: true, Sev_2: true, Sev_3: true, Sev_4: true, Sev_5: true};
  // onData: dataModel = this.oncalldata;
  // filterdata: dataModel = this.oncalldata;
  onData: any[];
  filterdata: any[];
  filterdata2: any[];

  
  
  constructor(private SearchSer:SearchService,
    public route: ActivatedRoute,
    public router: Router) {
      if (this.SearchSer.searchStr) {
        this.TextSearch = this.SearchSer.searchStr;
        this.onEnter();
      }

     }

  ngOnInit(): void {
    this.Username = this.SearchSer.Username;
    this.onEnter();
  }

  onEnter(){
    this.SearchSer.SearchDetails(this.TextSearch).subscribe(
        (data:any) => {
          this.oncalldata = data.map((onCallDto: OncallDto) =>
          dataModel.fromDTO(onCallDto));
          this.onCallData = data;
          console.log("with ID",data);
          this.showCount=data.length;
          this.onData = this.onCallData;
          this.filterdata = this.onCallData;
          console.log("before filter", this.onData , this.filterdata);
          console.log("o/p-1",this.onCallData);
          console.log("o/p-2",this.oncalldata);
          console.log("o/p-2",this.oncalldata.ID);
          console.log("o/p-2",this.oncalldata.S_No);


        }
      );
}

DisplayAll(){
  this.SearchSer.searchAll().subscribe(
      (data:any) => {
        this.oncalldata = data.map((onCallDto: OncallDto) =>
        dataModel.fromDTO(onCallDto));
        this.onCallData = data;
        console.log("with ID",data);
        this.showCount=data.length;
        this.onData = this.onCallData;
        this.filterdata = this.onCallData;
      }
    );
}

BacktoSearch(){
  this.router.navigate(['/search']);
}

editSearch(data){
  this.SearchSer.EditSearchData = data;
  this.SearchSer.searchStr = this.TextSearch;
  console.log(data);
  // this.router.navigate(['/edit']);
  this.router.navigate(['/update']);

}

addData()
{
  console.log("add path");
  this.router.navigate(['/Add']);
}

filterchange()
{ 
  console.log("Team",this.filterdata);
  this.filterdata = this.onData.filter(x=>
    (x.Team === "TKT" && this.filter1.ETKT)||
    (x.Team === "Genres" && this.filter1.Genres)||
    (x.Team === "ACI" && this.filter1.ACI)
 );
 
}

filterchange1(){
  this.filterdata = this.onData.filter(y=>
    (y.Severity === 1 && this.filter1.Sev_1)||
    (y.Severity === 2 && this.filter1.Sev_2)||
    (y.Severity === 3 && this.filter1.Sev_3)||
    (y.Severity === 4 && this.filter1.Sev_4)||
    (y.Severity === 5 && this.filter1.Sev_5))
    console.log("SEV",this.filterdata);
}

}
