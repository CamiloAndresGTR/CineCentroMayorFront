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
  public peliculasA: Array<pelicula>;
  public peliculasFilter: Array<pelicula>;
  private pelisApis: peliculasApis;
  filters: string = ""
  constructor(private httpClient: HttpClient) {
    this.pelisApis = new peliculasApis(httpClient);
    this.peliculas = new Array<pelicula>();
    this.peliculasA = new Array<pelicula>();
    this.peliculasFilter = new Array<pelicula>();
  }

  ngOnInit(): void {
    this.getAllMovis();
  }

  async getAllMovis(): Promise<void> {
    await this.pelisApis.getall().subscribe(
      (data) => {
        this.peliculas = data;
        this.peliculasFilter = data;
        this.peliculas.sort(this.compare)
      }
    )
  }

  changeFilters() {
    this.peliculas = this.peliculasFilter
    this.peliculasA = this.peliculas.filter(
      (pelicula) => {
        const fullname = `${pelicula.titulo}`.toLowerCase().trim()//.trim quita espacios a los lados
        
        return fullname.includes(this.filters.toLowerCase().trim())
      }
    )
    console.log(this.peliculasA)
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

