import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dgz.interface';



@Injectable ()
export class DbzService {

    private _personajes : Personaje [] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }    
      ];

    get personajes() : Personaje[]{
        //return this._personajes;  //Js los objetos son mandados por referencia y eso puede ser un inconveniente porque significa que ese get se puede manipular 
        return [... this._personajes];  // ... operador Spread, es decir, separa cada uno de los elementos independientes que tiene _personajes y crea uno nuevo. Rompe la referencia
    }

    constructor() { 
    }

    agregarPersonaje ( personaje: Personaje) {
        this._personajes.push(personaje);
    }

}