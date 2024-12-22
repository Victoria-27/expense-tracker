import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTransactions } from '../store/expense-tracker.selectors';
import { deleteTransaction } from '../store/expense-tracker.actions';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent {
  private store = inject(Store);

  transactions$ = this.store.select(selectTransactions);

  deleteTransaction(id: number) {
    this.store.dispatch(deleteTransaction({ id }));
  }
}
