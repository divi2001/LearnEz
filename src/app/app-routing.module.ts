import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/mcq/welcome/welcome.component';
import { QuestionComponent } from './components/mcq/question/question.component';

const routes: Routes = [
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
