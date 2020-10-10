import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectsOverviewComponent } from './projects-overview/projects-overview.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProjectComponent,
    ProjectsOverviewComponent
  ]
})
export class AppModule { }
