import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FilterOptions } from '../../model/filter-options';
import { ValueType } from '../../model/types';
import { FormsModule } from '@angular/forms';
import { TypeSelectComponent } from '../type-select/type-select.component';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    FormsModule,
    TypeSelectComponent
  ],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {
  @Output() addNew = new EventEmitter();
  @Output() filterChange = new EventEmitter();
  @Input() filterOptions!: FilterOptions;
  @Input() typeOptions?: ValueType[];
  selectedType?: ValueType;

  addEvent(): void {
    this.addNew.emit();
  }

  changeDate(): void {
    console.log('change Date');
  }

  changeType(event: string): void {
    this.filterOptions.type = event;
    this.filterChange.emit();
  }

  changeOrder(): void {
    this.filterOptions.order = this.filterOptions.order === 'ASC' ? 'DESC' : 'ASC';
    this.filterChange.emit();
  }
}
