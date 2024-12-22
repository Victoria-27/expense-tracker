import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { ExpenseTrackerComponent } from './expense-tracker/expense-tracker.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { expenseTrackerReducer } from './store/expense-tracker.reducer';
import { ExpenseTrackerEffects } from './store/expense-tracker.effects';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseTrackerComponent,
    TransactionFormComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ expenseTracker: expenseTrackerReducer }),
    EffectsModule.forRoot([ExpenseTrackerEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
