import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-expense-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatSelectModule],
  templateUrl: './expense-add.component.html',
  styleUrl: './expense-add.component.scss'
})
export class ExpenseAddComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      type: ['', Validators.required],
      value: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
      date: ['', Validators.required]
    })
  }

  saveExpense() {
    console.log(this.form)
  }

}
