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
import { AddCommentsComponent } from '../add-comments/add-comments.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
const routes: Routes = [
  { path: '', component: MainPanelComponent }
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
    AboutFactsComponent,
    AddCommentsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
  ]
})
export class MainPanelModule { }
