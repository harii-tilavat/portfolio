import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { AboutFactsComponent } from './about/about-facts/about-facts.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillComponent } from './skill/skill.component';
import { MyServiceComponent } from './my-service/my-service.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AskProjectComponent } from './ask-project/ask-project.component';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { ScrollSpyDirective } from './_directives/scrollspy.directive';
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
    ContactComponent,
    AskProjectComponent,
    FooterComponent,
    LoaderComponent,
    ScrollSpyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
