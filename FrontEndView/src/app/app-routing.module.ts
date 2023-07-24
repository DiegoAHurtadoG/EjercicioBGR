import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './usuarios/formulario/formulario.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  { path: 'usuario', component: UsuarioComponent },
  { path: 'usuario/formulario/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
