import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { configUrl } from './config.services';

export interface usuario {
  id:number;
  tipoId:string;
  nombres:string;
  apellidos:string;
  email:string;
  genero_id:number;
  nombreUsuario:string;
  password:string;
  estado:string;
  idTipoUsuario:string;
}

export class usuariosApis {

  private urlapi = 'usuarios';
  private url = `${configUrl.getUrl()}/${this.urlapi}`;

  constructor(private httpClient: HttpClient) { }

  public getall() {
    return this.httpClient.get<usuario[]>(this.url);
  }

  public getId(Id: number) {
    return this.httpClient.get(this.url + `/${Id}`);
  }

  public deleteId(Id: number) {
    return this.httpClient.delete(this.url + `/${Id}`);
  }

  public put(pelicula: usuario) {
    return this.httpClient.post(configUrl.getUrl() + `/create-pelicula`, pelicula);
  }

}