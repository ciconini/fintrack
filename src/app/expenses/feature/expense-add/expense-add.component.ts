import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ValueType } from '../../../shared/model/types';
import { TypesService } from '../../../shared/data-access/types.service';
import { Subscription } from 'rxjs';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';
import { ExpensesService } from '../../data-access/expenses.service';
import { Expense } from '../../util/model/expense';

@Component({
  selector: 'app-expense-add',
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
    MatButton
  ],
  templateUrl: './expense-add.component.html',
  styleUrl: './expense-add.component.scss'
})
export class ExpenseAddComponent implements OnInit, OnDestroy {
  form: FormGroup;
  typeOptions: ValueType[] = [];
  _typeSub: Subscription = new Subscription();
  _expenseSub: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private readonly typeService: TypesService,
    private readonly expenseService: ExpensesService,
    public dialogRef: MatDialogRef<ExpenseAddComponent>,
    @Inject(MAT_DATE_LOCALE) private _locale: string,
    ){
      this._locale = 'pt';
      this.form = this.fb.group({
        type: ['', Validators.required],
        value: ['', Validators.required],
        date: ['', Validators.required],
        name: ['']
      })
  }

  ngOnInit(): void {
    this._typeSub = this.typeService.getTypes().subscribe((resp: ValueType[]) => {
      this.typeOptions = resp;
    })
  }

  saveExpense(): void {
    if(this.form.touched && this.form.valid){
      this._expenseSub = this.expenseService.saveExpense(this.form.value).subscribe((resp: Expense) => {
        if(resp) {
          this.dialogRef.close();
        }
      })
    }
    console.log(this.form)
  }

  cancel(): void {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this._typeSub.unsubscribe();
  }

}
