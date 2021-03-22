import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dgz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'

})

export class PersonajesComponent  {

  // @Input()  personajes : Personaje [] = []
  // al hacerlo con getter ya no hace falta importarlo:

  get personajes(){
    return this.DbzService.personajes;
  }

  constructor(  private DbzService: DbzService) {
    
  }

  

}
