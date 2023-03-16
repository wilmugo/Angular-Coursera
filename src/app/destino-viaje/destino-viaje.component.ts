import { Component, HostBinding, Input } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent {
  @Input() destino!: DestinoViaje
  @HostBinding('attr.class') cssClass = 'col-md-4'
  //constructor() {
  // this.destino = new DestinoViaje
  //}

}
