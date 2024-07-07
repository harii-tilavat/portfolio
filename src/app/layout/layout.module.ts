import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout.routing';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillComponent } from './components/skill/skill.component';
import { MyServiceComponent } from './components/my-service/my-service.component';
import { AddCommentsComponent } from './components/add-comments/add-comments.component';
import { AskProjectComponent } from './components/ask-project/ask-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LayoutComponent,
    HeroComponent,
    AboutComponent,
    ResumeComponent,
    SkillComponent,
    MyServiceComponent,
    ContactComponent,
    AskProjectComponent,
    AddCommentsComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LayoutModule { }
