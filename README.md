# Myapp

Este proyecto esta generado con  [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Instalar cliente angular
npm install -g @angular/cli

## Development server

Arrancar el servidor desde la consola y estando en la raiz del proyecto `ng serve -o` . Navegar a `http://localhost:4200/`.

npm install para instalar las dependencias node de forma global.

##Estructura

angular.json para dependencias.

tslint -> corrector sintactico

e2e-> testing

    src ->
          -> lazy loading se encarga de gestionar la informacion a mostrar
          ->  Carpeta app
            -> Un componente es cualquier cosa de una pagina web, compuesto de 3 ficheros el
            -> html ( vistas)
            -> el css (Vistas)
            -> ts donde se programa (Modelo)
            -> el spect no tocar , para temas de testing

Manejo de atributos en el modelo -> {{atributoModelo}}

banana in a box [()]

Eventos (click)="funcion()"

##app.module.ts

  aqui se declaran todos los componentes a usar

  Todos los modulos
      modulo FormsModule para usar el binding en los formularios

  Los modulos se componen de componentes.

##app.component.ts

  El controlador principal

##app.routing.module.ts

   Encargado de controlar de rutas.

      

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
