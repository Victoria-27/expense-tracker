import { createReducer, on } from '@ngrx/store';
import { addTransaction, deleteTransaction } from './expense-tracker.actions';

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}

export interface ExpenseTrackerState {
  transactions: Transaction[];
}

export const initialState: ExpenseTrackerState = {
  transactions: []
};

export const expenseTrackerReducer = createReducer(
  initialState,
  on(addTransaction, (state, { text, amount }) => ({
    ...state,
    transactions: [...state.transactions, { id: Date.now(), text, amount }]
  })),
  on(deleteTransaction, (state, { id }) => ({
    ...state,
    transactions: state.transactions.filter(transaction => transaction.id !== id)
  }))
);