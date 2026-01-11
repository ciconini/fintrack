import { Component } from '@angular/core';
import { FilterOptions } from '../../../shared/model/filter-options';
import { Subscription } from 'rxjs';
import { TaxResponse } from '../../util/model/tax';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from '../../../shared/ui/data-table/data-table.component';
import { ActionBarComponent } from '../../../shared/ui/action-bar/action-bar.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { TypesService } from '../../../shared/data-access/types.service';
import { TaxesService } from '../../data-access/taxes.service';
import { ValueType } from '../../../shared/model/types';
import { TaxesTableFields } from '../../../shared/model/table';

@Component({
    selector: 'app-taxes-dashboard',
    imports: [
        CommonModule,
        DataTableComponent,
        ActionBarComponent,
        MatPaginator
    ],
    templateUrl: './taxes-dashboard.component.html',
    styleUrl: './taxes-dashboard.component.scss'
})
export class TaxesDashboardComponent {
  filterOptions: FilterOptions = new FilterOptions();
  _dialogSub: Subscription = new Subscription();
  _taxesSub: Subscription = new Subscription();
  _typeSub: Subscription = new Subscription();
  taxFields: TaxesTableFields = new TaxesTableFields;
  typeOptions: ValueType[] = [];
  taxesResponse?: TaxResponse;
  taxesValue: number = 0;

  constructor(
    public dialog: MatDialog,
    private taxService: TaxesService,
    private readonly typeService: TypesService,
  ) {}

  private getTaxes(): void {
    this._taxesSub = this.taxService.filterTaxes(this.filterOptions).subscribe((resp: TaxResponse) => {
      this.taxesResponse = resp;
      this.getTaxesValue();
    });
  }

  public openExpenseDetailModal(id?: Event): void {
    // const dialogRef = this.dialog.open(ExpenseDetailComponent, {
    //   width: '320px',
    //   panelClass: 'add-modal',
    //   data: {id: id}
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log("🚀 ~ ExpenseDashboardComponent ~ dialogRef.afterClosed ~ result:", result)
    //   if(result?.event !== 'cancel') {
    //     this.getTaxes();
    //   }
    // });
  }

  public getTypeOptions(): void {
    this._typeSub = this.typeService.getTypes().subscribe((types) => {
      this.typeOptions = types;
    })
  }

  private getTaxesValue(): void {
    // this.taxService.getExpenseValue(this.filterOptions).subscribe((resp: number) => {
    //   this.taxesValue = resp
    // })
  }

  public filterChanges(): void {
    localStorage.setItem('filters', JSON.stringify({
      type: this.filterOptions.type,
      dateEnd: this.filterOptions.dateEnd,
      dateStart: this.filterOptions.dateStart,
      order: this.filterOptions.order,
      limit: this.filterOptions.limit
    }));
    this.getTaxes();
  }

  public handlePageEvent(event: PageEvent) {
    this.filterOptions.page = event.pageIndex;
    this.filterChanges()
  }
}
