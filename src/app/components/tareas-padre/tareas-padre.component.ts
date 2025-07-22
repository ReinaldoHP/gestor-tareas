import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaHijoComponent } from '../tarea-hijo/tarea-hijo.component';
import { tareas } from '../listadetarea';
import { CommonModule } from '@angular/common';
import { TareaInterface } from '../../interfaces/tarea';
import { ButtonComponent } from '../../shared/atoms/button/button.component';

@Component({
  selector: 'app-tareas-padre',
  imports: [TareaHijoComponent, CommonModule, FormsModule, ButtonComponent],
  templateUrl: './tareas-padre.component.html',
  styleUrl: './tareas-padre.component.css',
})
export class TareasPadreComponent {
  tareas: TareaInterface[] = tareas;

  tareasMostradas: TareaInterface[] = [...this.tareas];
  busqueda: string = '';

  completarTarea(id: number) {
    const tarea = this.tareas.find((tarea: { id: number }) => tarea.id === id);
    if (tarea) {
      tarea.completado = !tarea.completado;
    }
  }
  getTareaCompletada() {
    this.tareasMostradas = this.tareas.filter((tarea) => tarea.completado);
  }

  getTareaIncompleta() {
    this.tareasMostradas = this.tareas.filter((tarea) => !tarea.completado);
  }

  mostrarTodasLasTareas() {
    this.tareasMostradas = [...this.tareas];
  }

  filtrarTareas() {
    const texto = this.busqueda.toLowerCase().trim();

    this.tareasMostradas = this.tareas.filter((t) =>
      t.descripcion.toLowerCase().includes(texto)
    );
  }
}
