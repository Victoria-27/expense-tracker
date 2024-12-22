import { createAction, props } from '@ngrx/store';

export const addTransaction = createAction(
  '[Expense Tracker] Add Transaction',
  props<{ text: string; amount: number }>()
);

export const deleteTransaction = createAction(
  '[Expense Tracker] Delete Transaction',
  props<{ id: number }>()
);