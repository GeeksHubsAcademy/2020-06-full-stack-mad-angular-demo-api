import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  // titulo: string;

  /**/
  pelisMostrar: object;

  constructor(private MovieService:MovieService) { }

  ngOnInit() {

    // this.titulo = "Componente encargado de mostrar las películas";


    /*Ejecutamos la función del servicio (desde MovieService accedemos a getMovies() para 
    obtener los datos de películas)*/
    this.MovieService.getMovies()
    .subscribe(
      res=> this.pelisMostrar = res['results'],
      error=>console.error(error)
    )
  }

}
