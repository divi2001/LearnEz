import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/mcq/welcome/welcome.component';
import { QuestionComponent } from './components/mcq/question/question.component';
import { CourseComponent } from './components/course/course/course.component';
import { LandingComponent } from './components/course/landing/landing.component';


const routes: Routes = [
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path:"course", component:CourseComponent},
  {path:"landing", component:LandingComponent},
  { path: "", redirectTo: "/landing", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
