import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/mcq/welcome/welcome.component';
import { QuestionComponent } from './components/mcq/question/question.component';
import { HeaderComponent } from './components/mcq/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { LandingComponent } from './components/course/landing/landing.component';
import { CourseComponent } from './components/course/course/course.component';
import { SafeUrlPipe } from './components/course/course/safe-url.pip';
import { UserLoginComponent } from './components/auth/user-login/user-login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    LandingComponent,
    CourseComponent,
    SafeUrlPipe,
    UserLoginComponent // Declare SafeUrlPipe here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
