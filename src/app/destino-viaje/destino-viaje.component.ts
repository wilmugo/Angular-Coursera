import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.models';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent {
  @Input() destino!: DestinoViaje
  @HostBinding('attr.class') cssClass = 'col-md-4'
  @Output() clicked: EventEmitter<DestinoViaje>

  constructor() {
    this.clicked = new EventEmitter()
  }

  ir() {
    this.clicked.emit(this.destino)
    return false
  }

}
