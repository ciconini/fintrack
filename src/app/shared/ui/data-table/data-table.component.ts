import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, KeyValue } from '@angular/common';
import { getTypeIcon } from '../../util/type-function';
import { TypePipe } from '../../util/pipes/type.pipe';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TypePipe],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() data: any;
  @Input() showHeader: boolean = true;
  @Output() itemClicked = new EventEmitter();
  @Input() fields: any;

  getVal(item: string, key: any) {
    return item[key];
  }

  getIcon(item: string): string {
    return getTypeIcon(item);
  }
}
