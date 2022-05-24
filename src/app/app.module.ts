import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{BsDropdownModule} from 'ngx-bootstrap/dropdown' ;
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertifyService } from './services/alertify.service';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { SharedService } from './services/shared.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { GiglistComponent } from './giglist/giglist.component';
import { ReplaceComma } from './services/replace.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { AddgigComponent } from './addgig/addgig.component';
import { AdminshowcategorieComponent } from './Admin/adminshowcategorie/adminshowcategorie.component';
import { AdminaddeditcategorieComponent } from './Admin/adminaddeditcategorie/adminaddeditcategorie.component';
import { AdminshowgigComponent } from './Admin/adminshowgig/adminshowgig.component';
import { AdminaddeditgigComponent } from './Admin/adminaddeditgig/adminaddeditgig.component';


@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    GiglistComponent,
    ReplaceComma, 
    HomepageComponent,
     AddgigComponent,
     AdminshowcategorieComponent,
      AdminaddeditcategorieComponent, 
      AdminshowgigComponent, 
      AdminaddeditgigComponent,
    
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot([
      {path:'home',component : HomepageComponent},
      {path : 'gigslist',component:GiglistComponent},
      {path:'addgig',component : AddgigComponent},
      {path:'',redirectTo :'home',pathMatch:'full'},

      {path:'showgig',component : AdminshowgigComponent},
      {path:'showcateg',component : AdminshowcategorieComponent},
    ]),
    
  ],
  providers: [SharedService,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
