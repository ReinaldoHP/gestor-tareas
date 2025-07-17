import { Routes } from '@angular/router';
import { TareasPadreComponent } from './components/tareas-padre/tareas-padre.component';
import { TareaHijoComponent } from './components/tarea-hijo/tarea-hijo.component';

export const routes: Routes = [
  { path: '', component: TareasPadreComponent },
  { path: ':id', component: TareaHijoComponent },
];
