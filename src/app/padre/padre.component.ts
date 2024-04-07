import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  mensajePadre: string = 'Reinharth APP message';
  MensajeRecibido: string = '';

  recibirMensaje($event: string) {
    this.MensajeRecibido = $event;
  }

  //CONTADOR
  // valorContador: number = 0;
  // incrementar() {
  //   this.valorContador++;
  // }

  // decrementar() {
  //   this.valorContador--;
  // }
}
