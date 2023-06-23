import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import {AboutFactsComponent} from './about/about-facts/about-facts.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillComponent } from './skill/skill.component';
import { MyServiceComponent } from './my-service/my-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeroComponent,
    AboutComponent,
    AboutFactsComponent,
    ResumeComponent,
    SkillComponent,
    MyServiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
