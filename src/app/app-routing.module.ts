import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "search/"},
  { path: "movie/:id", component: MovieDetailsComponent },
  { path: "search/:text", component: SearchComponent },
  { path: "**", pathMatch: "full", redirectTo: "search/" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
