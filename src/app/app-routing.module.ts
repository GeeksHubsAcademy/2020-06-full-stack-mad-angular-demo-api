import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  
  //{path:"", redirectTo: "display", pathMatch: "full"},
  {path:"", component:WelcomeComponent},
  {path:"display", component:FilmsListComponent},
  {path: "detail", component:MovieDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
