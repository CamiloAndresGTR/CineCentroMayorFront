import { Component, OnInit } from '@angular/core';
import { pelicula, peliculasApis } from '../../../config/config.service.peliculas'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public peliculas: Array<pelicula>;
  private pelisApis: peliculasApis;
  constructor(private httpClient: HttpClient) {
    this.pelisApis = new peliculasApis(httpClient);
    this.peliculas = new Array<pelicula>();
  }

  ngOnInit(): void {
    this.getAllMovis();
  }

  getAllMovis(): void {
    this.pelisApis.getall().subscribe(
      (data) => { this.peliculas = data; }
    )
  }

  deleteMovi(pelicula:pelicula):void{
    this.pelisApis.deleteId(pelicula.id).subscribe(
      (data) => { alert("Pelicula eliminada"); this.getAllMovis(); }
    );
  }

  editMovi(pelicula:pelicula):void{
    location.href = `/edit-movie?Id=${pelicula.id}`;
  }

}
