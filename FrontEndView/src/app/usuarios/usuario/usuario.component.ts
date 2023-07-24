import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios: any[] = [];
  public columnas: any[] = ['id', 'nombre', 'correo', 'telefono'];

  constructor(private router: Router,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getlAll();
  }

  public getlAll() {
    this.usuarioService.getlAll().subscribe({
      next: (data) => {
        this.usuarios = data;
      }
    });
  }

  public eliminar(id: string) {
    this.usuarioService.delete(id);
    this.getlAll();
  }
}
