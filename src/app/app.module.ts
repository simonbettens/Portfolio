import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import {ContentModule } from './content/content.module'

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    
  ],
  imports: [
    BrowserModule,ContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
