import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { MeComponent } from './me/me.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillComponent } from './skill/skill.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [ProjectComponent,ProjectsOverviewComponent,MeComponent, SkillsListComponent, SkillComponent, 
    EducationComponent, LanguagesComponent, ContactComponent, ],
  imports: [
    CommonModule
  ],  
  exports : [MeComponent,ProjectsOverviewComponent,ContactComponent]

})
export class ContentModule { }
