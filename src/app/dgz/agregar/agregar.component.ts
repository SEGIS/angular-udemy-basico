import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dgz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'

})
export class AgregarComponent {


  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  // Se puede poner un alias tipo Output ('pepito') y el nombre de la propiedad. 
  //Pero si no se especifica nada, el nombre de la propiedad
  //Es el nombre del evento que se va a exponer

  constructor( private dbzService : DbzService) {

  }

  agregar ( ){

    if ( this.nuevo.nombre.trim().length === 0){  return; }  //Evitamos actualizar si está vacío
    else {
      //console.log( this.nuevo ); 
      //this.onNuevoPersonaje.emit( this.nuevo )
      //Así se emite desde el componente hijo al padre

      this.dbzService.agregarPersonaje (this.nuevo);


      this.nuevo = {
        nombre: '',
        poder: 0
      }  
    }      
  }

}
