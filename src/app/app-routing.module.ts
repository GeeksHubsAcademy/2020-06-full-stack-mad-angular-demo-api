import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  
  //{path:"", redirectTo: "display", pathMatch: "full"},
  {path:"", component:WelcomeComponent},
  {path:"display", component:FilmsListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
