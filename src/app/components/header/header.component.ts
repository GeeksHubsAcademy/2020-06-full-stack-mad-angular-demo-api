import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private MovieService:MovieService) { }

  ngOnInit() {
  }

  //función encargada de buscar la película por título
  searchMovie(event){
    //función de búsqueda
    // if(event.target.value.length >= 3){
    //   this.MovieService.getMoviesTitle(event.target.value)
    //   .subscribe(res=>this.MovieService.setFilms(res))
    // }
  }
}
