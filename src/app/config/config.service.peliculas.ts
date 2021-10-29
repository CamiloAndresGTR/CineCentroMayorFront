import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { configUrl } from './config.services';


export interface pelicula {
  id:number;
  titulo:string;
  idioma:string;
  duracion:Date;
  sinopsis:string;
  genero_id:number;
  urlImagen:string;
}

export class peliculaDao implements pelicula{
  public id:number;
  public titulo:string;
  public idioma:string;
  public duracion:Date;
  public sinopsis:string;
  public genero_id:number;
  public urlImagen:string;

  constructor() { 
    this.id = 0;
    this.titulo = "";
    this.idioma = "";
    this.duracion = new Date();
    this.sinopsis = "";
    this.genero_id = 0;
    this.urlImagen = "";
  }
}

export class peliculasApis {

  private urlapi = 'peliculas';
  private url = `${configUrl.getUrl()}/${this.urlapi}`;

  constructor(private httpClient: HttpClient) { }

  public getall() {
    return this.httpClient.get<pelicula[]>(this.url);
  }

  public getId(Id: number) {
    return this.httpClient.get(this.url + `/${Id}`);
  }

  public deleteId(Id: number) {
    return this.httpClient.delete(this.url + `/${Id}`);
  }

  public put(pelicula: pelicula) {
    return this.httpClient.post(configUrl.getUrl() + `/create-pelicula`, pelicula);
  }

  public edit(pelicula: pelicula) {
    return this.httpClient.put(configUrl.getUrl() + `/peliculas/` + pelicula.id, pelicula);
  }

}