import { Component, OnInit } from '@angular/core';
import { usuario, usuariosApis } from '../../config/config.service.usuarios'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public usuarios: Array<usuario>;
  private usuariosApis: usuariosApis;
  constructor(private httpClient: HttpClient) {
    this.usuariosApis = new usuariosApis(httpClient);
    this.usuarios = new Array<usuario>();
  }

  ngOnInit(): void {
    this.getAllMovis();
  }

  getAllMovis(): void {
    this.usuariosApis.getall().subscribe(
      (data) => { this.usuarios = data; }
    )
  }

  deleteMovi(usuario:usuario):void{
    this.usuariosApis.deleteId(usuario.id).subscribe(
      (data) => { alert("Usuario eliminada"); this.getAllMovis(); }
    );
  }

  editMovi(usuario:usuario):void{
    location.href = `/edit-user/Id=${usuario.id}`;
  }
}
