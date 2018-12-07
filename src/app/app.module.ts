//modulos de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";//para hacer uso del banana in a box
import {HttpClientModule} from '@angular/common/http'; //peticiones http asincronas

//nuestros componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/seccion-componentes/fruta/fruta.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { FlujoInformacionComponent } from './components/seccion-componentes/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/principal/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';


//pipes
import { VideojuegoPipe } from './pipes/videojuego-pipe';
import { PersonaPipe } from './pipes/persona-pipe';
import { CardComponent } from './components/card/card.component';
import { VideojuegoCardComponent } from './components/videojuego-card/videojuego-card.component';
import { ConfigComponent } from './components/config/config.component';
import { MostrarImagenComponent } from './components/mostrar-imagen/mostrar-imagen.component';
import { CabeceraComponentesComponent } from './components/cabeceras/cabecera-componentes/cabecera-componentes.component';
import { CabeceraPrincipalComponent } from './components/cabeceras/cabecera-principal/cabecera-principal.component';
import { ComponentesPrincipalComponent } from './components/seccion-componentes/componentes-principal/componentes-principal.component';
import { InstalacionAngularComponent } from './components/principal/instalacion-angular/instalacion-angular.component';
import { AngularNotasComponent } from './components/principal/angular-notas/angular-notas.component';
import { CabeceraPipeComponent } from './components/cabeceras/cabecera-pipe/cabecera-pipe.component';
import { PipePrincipalComponent } from './components/seccion-pipe/pipe-principal/pipe-principal.component';



//servicios
import { VideojueosService } from './providers/videojueos.service';
import { TareaComponent } from './components/tarea/tarea.component';
import { TareaService } from './providers/tarea.service';
import { SelectorJuegosComponent } from './components/seccion-componentes/selector-juegos/selector-juegos.component';
import { ServicioPrincipalComponent } from './components/seccion-servicios/servicio-principal/servicio-principal.component';
import { CabeceraServiciosComponent } from './components/cabeceras/cabecera-servicios/cabecera-servicios.component';
import { TareasCrudComponent } from './components/seccion-crud/tareas-crud/tareas-crud.component';
import { CabeceraCrudComponent } from './components/cabeceras/cabecera-crud/cabecera-crud.component';
import { TareaTerminadoPipe } from './pipes/tarea-terminado.pipe';

import { FormulariosPrincipalComponent } from './components/seccion-formularios/formularios-principal/formularios-principal.component';
import { FormularioFrutasComponent } from './components/seccion-formularios/formulario-frutas/formulario-frutas.component';
import { CabeceraFormulariosComponent } from './components/cabeceras/cabecera-formularios/cabecera-formularios.component';
import { CustomPipeComponent } from './components/seccion-pipe/custom-pipe/custom-pipe.component';
import { AngularPipeComponent } from './components/seccion-pipe/angular-pipe/angular-pipe.component';
import { FrutasCrudComponent } from './components/seccion-crud/frutas-crud/frutas-crud.component';
import { FrutasEditableCardComponent } from './components/seccion-crud/frutas-editable-card/frutas-editable-card.component';





@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    AlumnosComponent,
    FlujoInformacionComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    VideojuegoPipe,
    PersonaPipe,
    CardComponent,
    SelectorJuegosComponent,
    VideojuegoCardComponent,
    ConfigComponent,
    MostrarImagenComponent,
    CabeceraComponentesComponent,
    CabeceraPrincipalComponent,
    ComponentesPrincipalComponent,
    InstalacionAngularComponent,
    HomeComponent,
    AngularNotasComponent,
    CabeceraPipeComponent,
    PipePrincipalComponent,
    TareaComponent,
    ServicioPrincipalComponent,
    CabeceraServiciosComponent,
    TareasCrudComponent,
    CabeceraCrudComponent,
    TareaTerminadoPipe,
    FormularioFrutasComponent,
    FormulariosPrincipalComponent,
    CabeceraFormulariosComponent,
    CustomPipeComponent,
    AngularPipeComponent,
    FrutasCrudComponent,
    FrutasEditableCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    VideojueosService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
