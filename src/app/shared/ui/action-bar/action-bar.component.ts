import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FilterOptions } from '../../model/filter-options';
import { ValueType } from '../../model/types';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeSelectComponent } from '../type-select/type-select.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-action-bar',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    FormsModule,
    TypeSelectComponent,
    MatFormFieldModule, 
    MatDatepickerModule, 
    ReactiveFormsModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent implements OnInit {
  @Output() addNew = new EventEmitter();
  @Output() filterChange = new EventEmitter();
  @Input() filterOptions!: FilterOptions;
  @Input() typeOptions?: ValueType[];
  selectedType?: ValueType;
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.range.patchValue({start: this.filterOptions.dateStart, end: this.filterOptions.dateEnd})
  }

  addEvent(): void {
    this.addNew.emit();
  }

  changeDate(): void {
    this.filterOptions.dateStart = this.range.get('start')?.value || this.filterOptions.dateStart;
    this.filterOptions.dateEnd = this.range.get('end')?.value || this.filterOptions.dateEnd;
    this.filterChange.emit();
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
