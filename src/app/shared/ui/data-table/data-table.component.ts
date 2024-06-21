import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { getTypeIcon } from '../../util/type-function';
import { TypePipe } from '../../util/pipes/type.pipe';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule, TypePipe, MatTableModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {
  @Input() data: any | undefined;
  @Input() showHeader: boolean = true;
  @Output() itemClicked = new EventEmitter();
  @Input() fields: any;
  displayedColumns: string[] = ['date', 'value', 'name', 'type', 'actions'];

  getVal(item: string, key: any) {
    return item[key];
  }

  getIcon(item: string): string {
    return getTypeIcon(item);
  }

  openItem(id: string): void {
    this.itemClicked.emit(id);
  }
}
