import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addTransaction } from '../store/expense-tracker.actions';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent {
  private fb = inject(FormBuilder);
  private store = inject(Store);

  transactionForm = this.fb.group({
    text: ['', Validators.required],
    amount: [0, Validators.required],
    type: ['expense', Validators.required]
  });

  onSubmit() {
    if (this.transactionForm.valid) {
      const { text, amount, type } = this.transactionForm.value;
      const finalAmount = type === 'expense' ? -Math.abs(amount!) : Math.abs(amount!);
      this.store.dispatch(addTransaction({ text: text!, amount: finalAmount }));
      this.transactionForm.reset({ text: '', amount: 0, type: 'expense' });
    }
  }
}
