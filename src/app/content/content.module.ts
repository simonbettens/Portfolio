import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { MeComponent } from './me/me.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';



@NgModule({
  declarations: [ProjectComponent,ProjectsOverviewComponent,MeComponent, SkillsListComponent, SkillComponent, EducationComponent],
  imports: [
    CommonModule
  ],  
  exports : [MeComponent,ProjectsOverviewComponent]

})
export class ContentModule { }
