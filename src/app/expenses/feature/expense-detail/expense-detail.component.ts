import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ValueType, saveType } from '../../../shared/model/types';
import { TypesService } from '../../../shared/data-access/types.service';
import { Observable, Subscription } from 'rxjs';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ExpensesService } from '../../data-access/expenses.service';
import { Expense } from '../../util/model/expense';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-expense-detail',
  standalone: true,
  providers: [
    provideNativeDateAdapter(),
    {provide: MAT_DATE_LOCALE, useValue: 'pt-PT'}
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule, 
    CurrencyMaskModule, 
    MatInputModule,
    MatDatepickerModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    AsyncPipe
  ],
  templateUrl: './expense-detail.component.html',
  styleUrl: './expense-detail.component.scss'
})
export class ExpenseDetailComponent implements OnInit, OnDestroy {
  form: FormGroup;
  typeOptions: ValueType[] = [];
  _typeSub: Subscription = new Subscription();
  _expenseSub: Subscription = new Subscription();


  constructor(
    private fb: FormBuilder,
    private readonly typeService: TypesService,
    private readonly expenseService: ExpensesService,
    public dialogRef: MatDialogRef<ExpenseDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
      this.form = this.fb.group({
        type: ['', Validators.required],
        value: ['', Validators.required],
        date: ['', Validators.required],
        name: ['']
      });
  }

  ngOnInit(): void {
    this._typeSub = this.typeService.getTypes().subscribe((types) => {
      this.typeOptions = types;
      if (this.data.id) {
        this._expenseSub = this.expenseService.getExpense(this.data.id).subscribe((expense: Expense) => {
          this.form.patchValue({...expense});
        })
      }
    });
  }

  saveExpense(): void {
    if (this.form.touched && this.form.valid){
      if (this.data.id) {
        this._expenseSub = this.expenseService.updateExpense(this.data.id, this.form.value).subscribe((resp: Expense) => {
          if (resp) {
            this.dialogRef.close({event: saveType.UPDATE, expense: resp})
          }
        })
      } else {
        this._expenseSub = this.expenseService.saveExpense(this.form.value).subscribe((resp: Expense) => {
          if (resp) {
            this.dialogRef.close({event: saveType.ADDNEW, expense: resp});
          }
        })
      }
    }
  }

  deleteExpense(): void {
    if(this.data.id) {
      this._expenseSub = this.expenseService.deleteExpense(this.data.id).subscribe((resp) => {
        console.log(resp)
        this.dialogRef.close({event: saveType.REMOVE});
      })
    }
  }

  cancel(): void {
    this.dialogRef.close({event: saveType.CANCEL});
  }

  ngOnDestroy(): void {
    this._typeSub.unsubscribe();
    this._expenseSub.unsubscribe();
  }

}
