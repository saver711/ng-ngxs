import { Action, State, StateToken, StateContext, Selector } from '@ngxs/store';
import { ValueStateModel } from './value.model';
import { Injectable } from '@angular/core';
import {
  DecrementValue,
  IncrementValue,
  ResetValue,
  SetValue,
} from './value.actions';

const SIMPLE_VALUE_SATE_TOKEN = new StateToken<ValueStateModel>('value');

@State<ValueStateModel>({
  name: SIMPLE_VALUE_SATE_TOKEN,
  defaults: {
    value: 0,
  },
})
@Injectable()
export class ValueState {
  constructor() {}
  //.............
  @Action(IncrementValue)
  incrementValue(ctx: StateContext<ValueStateModel>) {
    const state = ctx.getState();
    let stateValue = state.value;
    stateValue++;
    ctx.setState({
      ...state,
      value: stateValue,
    });
  }

  @Action(DecrementValue)
  decrementValue(ctx: StateContext<ValueStateModel>) {
    const state = ctx.getState();
    let stateValue = state.value;
    stateValue--;
    ctx.setState({
      ...state,
      value: stateValue,
    });
  }

  @Action(ResetValue)
  resetValue(ctx: StateContext<ValueStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: 0,
    });
  }

  @Action(SetValue)
  setValue(ctx: StateContext<ValueStateModel>, action: SetValue) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      value: action.newValue,
    });
  }

  // What part of data to return of that state
  @Selector()
  static value(state: ValueStateModel) {
    return state.value;
  }
}
