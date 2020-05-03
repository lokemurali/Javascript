import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { SearchDetComponent } from './search-det/search-det.component';
import { SearchEditComponent } from './components/search-edit/search-edit.component';
import { TestComponent } from './components/test/test.component';
import { EditSearchComponent } from './components/edit-search/edit-search.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'search',component:SearchComponent},
  {path:'list', component:SearchDetComponent},
  {path:'update',component:EditSearchComponent},
  {path:'edit', component:SearchEditComponent},
  {path:'Add', component:EditSearchComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RouteComponents = [LoginComponent,SearchComponent,SearchDetComponent,SearchEditComponent,EditSearchComponent];
