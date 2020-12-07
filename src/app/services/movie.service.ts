import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

      _apiKey : string = 'd8ef62fffc6e271ff0c4f1950ae6a1c9';
      _language : string = 'es-ES';
      url =  'https://api.themoviedb.org';
      headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {
    
   }

  getSearchedMovies(query: string): Observable<Movie>   {
    if(query != ""){
      return this.http.get<Movie>(`${this.url}/3/search/movie?api_key=${this._apiKey}&language=${this._language}&query=${query}`);
    }else{
      return new Observable<Movie>();
    }
  }

  
}
