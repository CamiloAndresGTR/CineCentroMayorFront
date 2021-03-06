import { Component, OnInit } from '@angular/core';
import { pelicula, peliculaDao, peliculasApis } from '../../../config/config.service.peliculas'
import { genero, generoApis } from '../../../config/config.service.genero'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  public peliculaNueva:peliculaDao;
  private generoApisDao:generoApis;
  private peliculasapis:peliculasApis;
  public idiomas:Array<string>;
  public generos:Array<genero>;

  constructor(private httpClient: HttpClient) { 
    this.peliculaNueva = new peliculaDao();
    this.generoApisDao = new generoApis(httpClient);
    this.peliculasapis = new peliculasApis(httpClient);

    this.idiomas = [];
    this.idiomas.push("Español");
    this.idiomas.push("Inglés");
    this.idiomas.push("Inglés - Subtitulos");
    this.generos = [];

    this.generoApisDao.getall().subscribe((data) => {
      this.generos = data;
    })

  }
  ngOnInit(): void {
    
  }

  guardarPelicula(): void {
    this.peliculasapis.put(this.peliculaNueva).subscribe((data) => {
      alert("Se ha guardado la pelicula");
      this.peliculaNueva = new peliculaDao();
      location.href = `/movies`;
    });
  }

}
