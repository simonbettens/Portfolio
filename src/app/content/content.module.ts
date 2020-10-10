import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';
import { MeComponent } from './me/me.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillComponent } from './skill/skill.component';



@NgModule({
  declarations: [ProjectComponent,ProjectsOverviewComponent,MeComponent, ContactComponent, SkillsListComponent, SkillComponent],
  imports: [
    CommonModule
  ],  
  exports : [MeComponent,ProjectsOverviewComponent]

})
export class ContentModule { }
