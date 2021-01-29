import { Component, OnInit } from '@angular/core';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss']
})
export class SkillsListComponent implements OnInit {
  public skills : Skill[]
  public visibleSkills : Skill[]
  constructor() { }

  ngOnInit(): void {
    this.dataInit();
    this.draw();
  }
  
  draw(){
   this.visibleSkills=this.skills
  }
  dataInit(){
     //<span class="iconify" data-icon="cib:java" data-inline="false"></span>
     var java  = new Skill("Java",["JavaFX","Junit","Maven"],"cib:java");
     //<span class="iconify" data-icon="ri:angularjs-line" data-inline="false"></span>
     var angular = new Skill("Angular",["Cypress","Material","REST"],"ri:angularjs-line");
     //<span class="iconify" data-icon="cib:dot-net" data-inline="false"></span>
     var dotNET = new Skill(".NET Core",["REST","MVC","EntityFrameWork"],"cib:dot-net");
     //<span class="iconify" data-icon="bx:bxl-android" data-inline="false"></span>
     var android = new Skill("Android",["Fragements","Persistance","RecyclerView"],"bx:bxl-android");
     // <span class="iconify" data-icon="carbon:sql" data-inline="false"></span>
     var MSsql = new Skill("MS SQL",["Window Functions","Index","Stored Proccedures"],"carbon:sql");
     this.skills = [java,angular,dotNET , android,MSsql];
  }

}
