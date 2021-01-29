import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss']
})
export class ProjectsOverviewComponent implements OnInit {
  public projects : Project[]
  constructor() { }

  ngOnInit(): void {
    var reminderApp = new Project("Reminder app","A personal angular webapp with a .NET core rest api. Made to plan tasks",
    ["ri:angularjs-line","cib:dot-net","carbon:sql"],["../../../assets/images/reminderapp.png"]);
    var itLab = new Project("ITlab","A web and java application for HoGent",["cib:java","cib:dot-net","carbon:sql"],
    ["../../../assets/images/itlabDotNet.png","../../../assets/images/itlabJava.png"]);
    var damienExperience = new Project("Damien Experience","A web and android application for the charity Damien",
    ["ri:angularjs-line","cib:dot-net","bx:bxl-android"],["../../../assets/images/damienexperienceAngular.png"]);
    this.projects = [reminderApp,itLab,damienExperience];
  }

}
