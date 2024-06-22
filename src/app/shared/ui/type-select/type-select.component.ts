import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ValueType } from '../../model/types';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-type-select',
  standalone: true,
  imports: [
    CommonModule,
    MatButton,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './type-select.component.html',
  styleUrl: './type-select.component.scss'
})
export class TypeSelectComponent{
  @Input() typeOptions?: ValueType[];
  @Output() changeSelect = new EventEmitter();
  @Input() selectedType: ValueType = {label: 'ALL TYPES', icon: ''};
  showOptions: boolean = false;

  public selectType(option: ValueType): void {
    this.selectedType = option;
    console.log("🚀 ~ TypeSelectComponent ~ selectType ~ selectedType:", this.selectedType)
    this.changeSelect.emit(this.selectedType.label !== 'ALL TYPES' ? this.selectedType.label : null);
    this.showOptions = false;
  }
}
