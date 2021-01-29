import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import * as anime from 'animejs';


@Component({
  selector: 'app-welcomedialog',
  templateUrl: './welcomedialog.component.html',
  styleUrls: ['./welcomedialog.component.scss']
})
export class WelcomedialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WelcomedialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close()
  }
}