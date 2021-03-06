import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  //Urls de API (password(key) + url de la API)

  apiKey='210d6a5dd3f16419ce349c9f1b200d6d';
  apiUrl='https://api.themoviedb.org/3/';

  //En el caso de que conectemos con un back.. el ejemplo a continuación....

  backUrl='http://localhost:3000/films/';

  films: object[];
  filmChoosen: object[];
  //title: string;

  constructor(private httpClient:HttpClient) { }

  getMovies():Observable<any>{
    return this.httpClient.get(this.apiUrl + 'movie/popular?api_key=' + this.apiKey + '&language=en-US&page=1')
  }

  locateFilm(filmChoose:any):object{
    
    this.filmChoosen = filmChoose;
    console.log(this.filmChoosen);
    
    
    return;
 }

//  getMoviesTitle(title:string):Observable<any>{
//    return this.httpClient.get(this.backUrl + 'title/' + title);
//  }

 
  

setFilms(films:object[]):void{
      
    this.films=films

 }
 
getFilms():object{
    
    return this.films

 }
}
