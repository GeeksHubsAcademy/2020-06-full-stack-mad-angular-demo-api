import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieShow:object;

  constructor(private MovieService:MovieService) { }

  ngOnInit() {

    this.movieShow = this.MovieService.filmChoosen;
    console.log("Llegamos al componente que muestra la película concreta ",this.movieShow);
  }

}
