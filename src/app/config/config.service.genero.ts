import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { configUrl } from './config.services';


export interface genero {
  id:number;
  nombre:string;
}

export class generoApis {

  private urlapi = 'generos';
  private url = `${configUrl.getUrl()}/${this.urlapi}`;

  constructor(private httpClient: HttpClient) { }

  public getall() {
    return this.httpClient.get<genero[]>(this.url);
  }


}