import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/seccion-componentes/fruta/fruta.component';
import { FlujoInformacionComponent } from './components/seccion-componentes/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/principal/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { ComponentesPrincipalComponent } from './components/seccion-componentes/componentes-principal/componentes-principal.component';
import { InstalacionAngularComponent } from './components/principal/instalacion-angular/instalacion-angular.component';
import { AngularNotasComponent } from './components/principal/angular-notas/angular-notas.component';
import { PipePrincipalComponent } from './components/seccion-pipe/pipe-principal/pipe-principal.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { SelectorJuegosComponent } from './components/seccion-componentes/selector-juegos/selector-juegos.component';
import { ServicioPrincipalComponent } from './components/seccion-servicios/servicio-principal/servicio-principal.component';
import { TareasCrudComponent } from './components/seccion-crud/tareas-crud/tareas-crud.component';
import { FormularioFrutasComponent } from './components/seccion-formularios/formulario-frutas/formulario-frutas.component';
import { FormulariosPrincipalComponent } from './components/seccion-formularios/formularios-principal/formularios-principal.component';
import { CustomPipeComponent } from './components/seccion-pipe/custom-pipe/custom-pipe.component';
import { AngularPipeComponent } from './components/seccion-pipe/angular-pipe/angular-pipe.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'fruta', component: FrutaComponent },
  { path: 'flujo', component: FlujoInformacionComponent },
  { path: 'alumno', component: AlumnosComponent },
  { path: 'videojuego-detalle', component: VideojuegoDetalleComponent },
  { path: 'componentes-principal', component: ComponentesPrincipalComponent },
  { path: 'selector-juegos', component: SelectorJuegosComponent },
  { path: 'instalacion-angular', component: InstalacionAngularComponent },
  { path: 'notas-angular', component: AngularNotasComponent },
  { path: 'pipe-principal', component: PipePrincipalComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'servicio-principal', component: ServicioPrincipalComponent },
  { path: 'tarea', component: TareaComponent },
  { path: 'tarea-crud', component: TareasCrudComponent },
  { path: 'formulario-frutas', component: FormularioFrutasComponent },
  { path: 'angular-pipes', component: AngularPipeComponent },
  { path: 'formulario-principal', component: FormulariosPrincipalComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
