import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBalance, selectIncome, selectExpense } from '../store/expense-tracker.selectors';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent {
  private store = inject(Store);

  balance$ = this.store.select(selectBalance);
  income$ = this.store.select(selectIncome);
  expense$ = this.store.select(selectExpense);
}
