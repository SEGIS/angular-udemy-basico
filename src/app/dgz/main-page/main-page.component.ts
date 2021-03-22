import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dgz.interface';
import { DbzService } from '../services/dbz.service';

    //console.log(argumento);
    //debugger; depuración en Navegador
    //La mejor forma es darle a F5 para lanzar el debubujer de visualStudio

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'

})
export class MainPageComponent {



 nuevo : Personaje = { nombre:'Maestro Roshi', poder:1200 }


  
  constructor( ) { 
  }

}


/*
 * Solución 1:

  personajes: Personaje[] = [];

// definimos una propiedad y asignamos el valor. Esto es una injección de dependencia.
  constructor( private DbzService : DbzService) { 
    this.personajes = this.DbzService.personajes;   
  }
 */

 /**
  * Solución 2: Con getter
  *   
  get personajes (): Personaje[] {
    return this.DbzService.personajes;
   }


    //OneWayData Binding: se modifica el valor pero no se está enviando nada. 
  agregarNuevoPersonaje( argumento:Personaje  ){    
    this.personajes.push ( argumento );
  }

  constructor( private DbzService : DbzService) { 
  }
  * 
  * 
  */



  /**
   * 
   *  cambiarNombre ( event: any) {
      console.log( event.target.value);
  }
    nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

 
  agregar ( ){

    if ( this.nuevo.nombre.trim().length === 0){  return;  }
    else {
      console.log( this.nuevo );
      this.personajes.push(this.nuevo) 
      this.nuevo = {
        nombre: '',
        poder: 0
      }  
    }
    console.log(this.personajes);
  
  }


   */



