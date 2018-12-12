//modulos de angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";//para hacer uso del banana in a box
import {HttpClientModule} from '@angular/common/http'; //peticiones http asincronas
import {LOCALE_ID} from '@angular/core';

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
import { AngularPipeComponent } from './components/seccion-pipe/angular-pipe/angular-pipe.component';
import { FrutasCrudComponent } from './components/seccion-crud/frutas-crud/frutas-crud.component';
import { FrutasEditableCardComponent } from './components/seccion-crud/frutas-editable-card/frutas-editable-card.component';
import { CustomPipesComponent } from './components/seccion-pipe/custom-pipes/custom-pipes.component';
import { TypescriptPrincipalComponent } from './components/seccion-typescript/typescript-principal/typescript-principal.component';
import { CabeceraTypescriptComponent } from './components/cabeceras/cabecera-typescript/cabecera-typescript/cabecera-typescript.component';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { FormatoMonedaPipe } from './pipes/formato-moneda.pipe';
import { SpotyAppService } from './providers/spoty-app.service';
import { SpotyAppComponent } from './components/seccion-servicios/spoty-app/spoty-app.component';
import { SpotyInicioComponent } from './components/seccion-servicios/spoty-app-components/spoty-inicio/spoty-inicio.component';
import { SpotyArtistaComponent } from './components/seccion-servicios/spoty-app-components/spoty-artista/spoty-artista.component';
import { SpotyBuscarComponent } from './components/seccion-servicios/spoty-app-components/spoty-buscar/spoty-buscar.component';
import { SpotyNavbarComponent } from './components/seccion-servicios/spoty-app-components/spoty-comun/spoty-navbar/spoty-navbar.component';
import { FormularioTemplateComponent } from './components/seccion-formularios/formulario-template/formulario-template.component';
import { FormularioReactivoComponent } from './components/seccion-formularios/formulario-reactivo/formulario-reactivo.component';
import { SeccionBackofficeComponent } from './components/seccion-backoffice/seccion-backoffice.component';
import { LoginComponent } from './components/login/login.component';




//servicios
import { LoginService } from './providers/login.service';


//guards
import { BackofficeGuard } from './guards/backoffice.guard';
import { ProgramacionFuncionalComponent } from './components/seccion-typescript/programacion-funcional/programacion-funcional.component';
import { CabeceraBackofficeComponent } from './components/cabeceras/cabecera-backoffice/cabecera-backoffice.component';






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
    AngularPipeComponent,
    FrutasCrudComponent,
    FrutasEditableCardComponent,
    CustomPipesComponent,
    TypescriptPrincipalComponent,
    CabeceraTypescriptComponent,
    CapitalizarPipe,
    FormatoMonedaPipe,
    SpotyAppComponent,
    SpotyInicioComponent,
    SpotyArtistaComponent,
    SpotyBuscarComponent,
    SpotyNavbarComponent,
    FormularioTemplateComponent,
    FormularioReactivoComponent,
    SeccionBackofficeComponent,
    LoginComponent,
    ProgramacionFuncionalComponent,
    CabeceraBackofficeComponent,

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
    TareaService,
    SpotyAppService,
    LoginService,
    BackofficeGuard
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
