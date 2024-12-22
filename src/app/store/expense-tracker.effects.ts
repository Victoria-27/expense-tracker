import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { addTransaction, deleteTransaction } from './expense-tracker.actions';

@Injectable()
export class ExpenseTrackerEffects {
  constructor(private actions$: Actions) {}

  saveToLocalStorage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTransaction, deleteTransaction),
      tap(() => {
        // You can add logic here to save the state to local storage
        // This is just a placeholder for now
        console.log('State updated, consider saving to local storage');
      })
    ),
    { dispatch: false }
  );
}