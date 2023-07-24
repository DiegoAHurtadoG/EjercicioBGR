import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public usuarioForm = this.formBuilder.group({
    id: [0],
    nombre: ['', Validators.required],
    correo: ['', Validators.required],
    telefono: ['', Validators.required]
  })

  public usuarioModificado: any;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.getById(this.route.snapshot.params['id']);
  }

  public getById(id: string) {
    if (id != '0') {
      this.usuarioService.getById(id).subscribe({
        next: (data) => {
          this.usuarioModificado = data;
          this.usuarioForm.controls['id'].setValue(this.usuarioModificado.id)
          this.usuarioForm.controls['nombre'].setValue(this.usuarioModificado.nombre)
          this.usuarioForm.controls['correo'].setValue(this.usuarioModificado.correo)
          this.usuarioForm.controls['telefono'].setValue(this.usuarioModificado.telefono)
        }
      })
    }
  }

  public submit() {
    if (this.usuarioForm.valid && this.usuarioModificado == null) {
      this.usuarioService.insert(this.usuarioForm.getRawValue()).subscribe({
        next: (data) => {
          this.usuarioForm.reset();
        }
      })
    }

    if (this.usuarioForm.valid && this.usuarioModificado != null) {
      this.usuarioService.update(this.usuarioForm.getRawValue()).subscribe({
        next: (data) => {
          this.usuarioForm.reset();
        }
      })
    }

    this.router.navigate(['/usuario']);
  }
}
