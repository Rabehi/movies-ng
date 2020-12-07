import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Result } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  @ViewChild('inputtext') inputtext: ElementRef;

  movies : Result[] = [];
  hasResults : boolean;
  loading : boolean = true;
  text : string;

  constructor (private activatedRoute: ActivatedRoute,private _movieService: MovieService, private router: Router){
    this.activatedRoute.params.subscribe(params =>{
      this.text = params["text"];
    });
  }
  ngOnInit(): void {
    if(this.text != null || this.text != '') this.getQueryMovies(this.text);
  }

  getQueryMovies(query: string) {
    this.loading = true;
    if(query.trim() != ""){
      this._movieService.getSearchedMovies(query)
      .subscribe((data:any) =>{
        this.movies = data.results;
        if(this.movies.length != 0){
          this.hasResults = true;
        } else {
          this.hasResults = false;
        }
        this.movies.map((m) =>{
          if(m.poster_path != null){
            m.poster_path = `https://image.tmdb.org/t/p/w500/${m.poster_path}`;
          } else {
            m.poster_path = 'https://th.bing.com/th/id/OIP.0faQQosBDN2F-62g8nTk_QHaDg?pid=Api&rs=1';
          }
        });
        this.loading = false;
      });
    }else{
      this.movies = null;
      this.loading = false;
    }
    this.router.navigate(["/search", query.trim()]);

  } 

  restart(){
    this.router.navigate(["/"]);
    this.inputtext.nativeElement.value = '';
    this.movies = null;
  }

}
