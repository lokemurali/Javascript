import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { dataModel } from 'src/model/dataModel';
import { AuthServService } from 'src/app/services/auth-serv.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  TextSearch:string;
  ShowSearchResult:Boolean = true;
  Username:string;
  @Input() OnCallData: dataModel

  constructor(private SearchSer:SearchService,
    private loginSer: AuthServService,
    public route: ActivatedRoute,
    public router: Router) { }
  // @Input() username:string;
  ngOnInit(): void {
    this.Username = this.loginSer.UsernameAcc;
    this.SearchSer.Username = this.loginSer.UsernameAcc;
    console.log(this.Username); // Demo of the o/p

  }

  onEnter()
  { 
     this.SearchSer.SearchDetails(this.TextSearch).subscribe(
             (data:any) => {
              this.ShowSearchResult = true;
              this.SearchSer.searchStr = this.TextSearch;
              this.router.navigate(['/list']);
          }
        );
  }
  

  }

