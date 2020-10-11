import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() public project: Project;
  public selectedIndex: number;
  transform: number;
  constructor() { }

  ngOnInit(): void {
  }


  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
   }
   
   downSelected(i) {
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if(this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }


}
