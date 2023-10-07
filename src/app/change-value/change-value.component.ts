import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { ValueState } from '../state/value-state/value.state';
import {
  DecrementValue,
  IncrementValue,
  ResetValue,
  SetValue,
} from '../state/value-state/value.actions';
import { appStates } from '../state';

@Component({
  selector: 'app-change-value',
  templateUrl: './change-value.component.html',
  styleUrls: ['./change-value.component.scss'],
})
export class ChangeValueComponent implements OnInit, OnDestroy {
  constructor(private store: Store) {}
  @Select(ValueState.value) value$!: Observable<number>;
  value = 0;
  private subscription!: Subscription;
  ngOnInit(): void {
    this.subscription = this.value$.subscribe({
      next: (value) => {
        this.value = value;
      },
    });
  }

  increment(): void {
    this.store.dispatch(new IncrementValue()).subscribe({
      next: (val) => {
        console.log(`ChangeValueComponent ~ this.store.dispatch ~ val:`, val);
      },
    });
  }

  decrement(): void {
    this.store.dispatch(new DecrementValue());
  }
  resetValue(): void {
    this.store.dispatch(new ResetValue());
  }
  setValue(value: number | null): void {
    if (value) {
      this.store.dispatch(new SetValue(value));
    } else {
      this.store.dispatch(new ResetValue());
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
