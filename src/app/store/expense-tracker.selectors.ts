import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ExpenseTrackerState } from './expense-tracker.reducer';

export const selectExpenseTrackerState = createFeatureSelector<ExpenseTrackerState>('expenseTracker');

export const selectTransactions = createSelector(
  selectExpenseTrackerState,
  (state) => state.transactions
);

export const selectBalance = createSelector(
  selectTransactions,
  (transactions) => transactions.reduce((total, t) => total + t.amount, 0)
);

export const selectIncome = createSelector(
  selectTransactions,
  (transactions) => transactions.filter(t => t.amount > 0).reduce((total, t) => total + t.amount, 0)
);

export const selectExpense = createSelector(
  selectTransactions,
  (transactions) => transactions.filter(t => t.amount < 0).reduce((total, t) => total + Math.abs(t.amount), 0)
);