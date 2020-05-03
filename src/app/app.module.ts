import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, RouteComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RoutingModelModule } from './routing-model/routing-model.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearchEditComponent } from './components/search-edit/search-edit.component';
import { SearchDetComponent } from './search-det/search-det.component';
import { SearchComponent } from './components/search/search.component';
import { EditSearchComponent } from './components/edit-search/edit-search.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import 'hammerjs'
import { MatNativeDateModule } from '@angular/material/core';
import { ToastNotificationsModule } from "ngx-toast-notifications";
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    RouteComponents,
    SearchEditComponent,
    SearchDetComponent,
    SearchComponent,
    EditSearchComponent,
    DialogComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RoutingModelModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatExpansionModule,
    MatCheckboxModule,
    ModalModule.forRoot(),
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ToastNotificationsModule,
    MatDialogModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
