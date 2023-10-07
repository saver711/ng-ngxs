import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ValueState } from '../state/value-state/value.state';

@Component({
  selector: 'app-display-value',
  templateUrl: './display-value.component.html',
  styleUrls: ['./display-value.component.scss'],
})
export class DisplayValueComponent {
  value = 0;
  @Select(ValueState.value) value$!: Observable<number>;
}
