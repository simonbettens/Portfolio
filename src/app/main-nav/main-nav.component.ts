import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { WelcomedialogComponent } from '../content/welcomedialog/welcomedialog.component';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  sideNavVisible : boolean = true;
  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }
  ngAfterViewInit():void{
    this.openDialog()
  }
  openDialog() {
    const dialogRef = this.dialog.open(WelcomedialogComponent);
  }
  closeNav(){
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mainContent").style.marginLeft = "10%";
  }
  openNav(){
    console.log("click")
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("mainContent").style.marginLeft = "250px";
  }

}
