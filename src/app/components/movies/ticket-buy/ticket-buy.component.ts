import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-buy',
  templateUrl: './ticket-buy.component.html',
  styleUrls: ['./ticket-buy.component.css']
})


export class TicketBuyComponent implements OnInit {

  cantidadSillas = 0;
  sillasXFila = 5;
  Sillas = new Array<fila>();
  Letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  ValorUnidad: Number = 12000;
  SillasSeleccionadas = new Array<silla>();

  constructor() {
    this.cantidadSillas = 5;
    this.generarSillas(20);
  }

  generarSillas(cantidadSillas: number) {
    var filas: number = cantidadSillas / this.sillasXFila;
    let contadorSilla: number = 0;
    for (let contadorf = 0; contadorf <= filas; contadorf++) {
      var filaTmp = new fila(this.Letras.charAt(contadorf), contadorf);
      for (let contadorI = 0; contadorI < this.sillasXFila && contadorSilla < cantidadSillas; contadorI++) {
        var sillaTmp = new silla(contadorI);
        filaTmp.sillas.push(sillaTmp);
        sillaTmp.filaPadre = filaTmp;
        if (contadorI == contadorf) {
          sillaTmp.estado = 2
        }
        contadorSilla++;
      }
      this.Sillas.push(filaTmp);
    }
  }

  callMarcarSilla(event: any, sillaSelec: silla) {
    if (sillaSelec.estado != 2) {
      sillaSelec.setEstado();
      if (sillaSelec.estado == 1) {
        this.SillasSeleccionadas.push(sillaSelec);
      } else {
        let indice = this.SillasSeleccionadas.indexOf(sillaSelec);
        this.SillasSeleccionadas.splice(indice, 1);
      }
    }
  }

  ngOnInit(): void {
  }

}

class silla {
  estado: Number = 0;
  indice: Number = 0;
  filaPadre: fila = new fila("", -1);
  constructor(indice: Number) {
    this.indice = indice;
    this.estado = 0;
  }
  setEstado() {
    this.estado = this.estado == 0 ? 1 : 0;
  }
}

class fila {
  letra = "";
  indice: Number = 0;
  sillas = new Array<silla>();

  constructor(letra: string, indice: Number) {
    this.letra = letra;
    this.indice = indice;
  }

}
