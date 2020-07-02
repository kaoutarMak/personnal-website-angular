import { FormsModule } from '@angular/forms';
import { GetResumeService } from './get-resume.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutmeComponent,
    EducationComponent,
    SkillsComponent,
    MyProjectsComponent,
    ContactMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [HttpClientModule, GetResumeService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
