import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TareaInterface } from '../../interfaces/tarea';
import { PrioridadPipe } from '../../pipes/prioridad.pipe';

@Component({
  selector: 'app-tarea-hijo',
  imports: [CommonModule, PrioridadPipe],
  templateUrl: './tarea-hijo.component.html',
  styleUrl: './tarea-hijo.component.css',
})
export class TareaHijoComponent {
  @Input() tarea!: TareaInterface;

  @Output() lista = new EventEmitter<number>();

  onLista() {
    this.lista.emit(this.tarea.id);
  }
}
