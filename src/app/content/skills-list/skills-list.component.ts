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
  public startIndex : number;
  public maxSkills : number;
  constructor() { }

  ngOnInit(): void {
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
    this.maxSkills = this.skills.length;
    this.startIndex = 0;
    this.draw();
  }
  left(){
    if(this.startIndex == 0){
      this.startIndex = this.maxSkills-1
    }else{
      this.startIndex = this.startIndex - 1
    }
    this.draw();
  }
  right(){
    if(this.startIndex == this.maxSkills-1){
      this.startIndex = 0
    }else{
      this.startIndex = this.startIndex + 1
    }
    this.draw();
  }
  draw(){
    this.visibleSkills = [];
    var temp = [];
    temp.push( this.skills[this.startIndex]);
    var endIndex = (this.startIndex+2)%this.maxSkills; 
    var oneToEndIndex = (this.startIndex+1)%this.maxSkills;
    temp.push(this.skills[oneToEndIndex])
    temp.push( this.skills[endIndex]);
    this.visibleSkills = temp
  }

}
