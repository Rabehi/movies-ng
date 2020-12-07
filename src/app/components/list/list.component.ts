import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input() movies : Result[];

  constructor( private router: Router) { 
    
    }

    goToMovie(movie : Result) {
      this.router.navigate([`/movie/${movie.id}`]);
      localStorage.setItem('movie', JSON.stringify(movie));
    }
  
}
