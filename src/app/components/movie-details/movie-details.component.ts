import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie : Result;
  constructor(private router: Router) {
    
   }

  ngOnInit(): void {
    var retrievedObject = localStorage.getItem('movie'); 
    this.movie= JSON.parse(retrievedObject);
  }

  restart(){
    this.router.navigate(["/"]);
  }

}
