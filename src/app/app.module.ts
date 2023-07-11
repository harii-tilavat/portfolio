import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { ScrollSpyDirective } from './_directives/scrollspy.directive';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    LoaderComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // StoreModule.forRoot({auth})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
