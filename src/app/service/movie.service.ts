import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiKey='210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl='https://api.themoviedb.org/3/';
  films: object[];
  filmChoosen: object[];

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.apiUrl + 'movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1')
  }

  locateFilm(filmChoose:any):object{
    
    this.filmChoosen = filmChoose;
    console.log(this.filmChoosen);
    
    
    return;
 }
  

setFilms(films:object[]):void{
      
    this.films=films

 }
 
getFilms():object{
    
    return this.films

 }
}
