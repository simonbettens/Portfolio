import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {ContentModule } from './content/content.module'
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent
    ],
  imports: [
    BrowserModule,ContentModule,BrowserAnimationsModule,MatDialogModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
