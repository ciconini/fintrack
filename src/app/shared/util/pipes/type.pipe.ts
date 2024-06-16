import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'type',
  standalone: true
})
export class TypePipe implements PipeTransform {
  transform(value: string) {
    let text = '';
    switch (value) {
      case 'MARKET':
        text = 'Market';
        break;
      case 'DOGS':
        text = 'Dogs';
        break;
      case 'SHOPPING':
        text = 'Shopping';
        break;
      case 'RESTAURANT':
        text = 'Restaurant';
        break;
      case 'HEALTH':
        text = 'Health';
        break;
      case 'TRANSPORT':
        text = 'Transport';
        break;
      default:
        text = 'Expense'
        break;
    }
    return text;
  }
}