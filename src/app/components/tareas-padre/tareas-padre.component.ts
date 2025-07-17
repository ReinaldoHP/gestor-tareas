import { Component } from '@angular/core';
import { TareaHijoComponent } from '../tarea-hijo/tarea-hijo.component';
import { tareas } from '../listadetarea';
import { CommonModule } from '@angular/common';
import { TareaInterface } from '../../interfaces/tarea';

@Component({
  selector: 'app-tareas-padre',
  imports: [TareaHijoComponent, CommonModule],
  templateUrl: './tareas-padre.component.html',
  styleUrl: './tareas-padre.component.css',
})
export class TareasPadreComponent {
  tareas: TareaInterface[] = tareas;

  completarTarea(id: number) {
    const tarea = this.tareas.find((tarea: { id: number }) => tarea.id === id);
    if (tarea) {
      tarea.completado = !tarea.completado;
    }
  }
}
