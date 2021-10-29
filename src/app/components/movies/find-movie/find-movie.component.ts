import { Component, OnInit } from '@angular/core';
import { pelicula, peliculasApis } from '../../../config/config.service.peliculas'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-find-movie',
  templateUrl: './find-movie.component.html',
  styleUrls: ['./find-movie.component.css']
})
export class FindMovieComponent implements OnInit {

  public peliculas: Array<pelicula>;
  pelisFilter: pelicula[] = []
  private pelisApis: peliculasApis;

  filters: string = ""


  constructor(private httpClient: HttpClient) {
    this.pelisApis = new peliculasApis(httpClient);
    this.peliculas = new Array<pelicula>();

  }

  ngOnInit(): void {
    this.getAllMovis();
  }

  async getAllMovis(): Promise<void> {
    await this.pelisApis.getall().subscribe(
      (data) => {
        this.peliculas = data;
        this.pelisFilter = this.peliculas
      }
      
    )
  }

  changeFilters() {
    this.peliculas = this.pelisFilter
    this.peliculas = this.peliculas.filter(
      (pelicula) => {
        const fullname = `${pelicula.titulo}`.toLowerCase().trim()//.trim quita espacios a los lados
        return fullname.includes(this.filters.toLowerCase().trim())
      }
    )
  }

  compare(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
}

