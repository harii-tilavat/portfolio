import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPanelComponent } from './main-panel.component';
import { AboutComponent } from '../about/about.component';
import { AskProjectComponent } from '../ask-project/ask-project.component';
import { ContactComponent } from '../contact/contact.component';
import { HeroComponent } from '../hero/hero.component';
import { MyServiceComponent } from '../my-service/my-service.component';
import { ResumeComponent } from '../resume/resume.component';
import { SkillComponent } from '../skill/skill.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutFactsComponent } from '../about/about-facts/about-facts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes:Routes=[
  {path:'', component:MainPanelComponent}
]

@NgModule({
  declarations: [
    MainPanelComponent,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    SkillComponent,
    MyServiceComponent,
    ContactComponent,
    AskProjectComponent,
    AboutFactsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MainPanelModule { }
