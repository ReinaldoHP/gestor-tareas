import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prioridad',
})
export class PrioridadPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'alta':
        return '🔴 Alta';
      case 'media':
        return '🟡 Media';
      case 'baja':
        return '🟢 Baja';

      default:
        return value;
    }
  }
}
