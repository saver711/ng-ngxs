import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, StateToken } from '@ngxs/store';
import { NameStateModel } from './name.model';
import { ChangeName } from './name.actions';

const NAME_SATE_TOKEN = new StateToken<NameStateModel>('name');

@State<NameStateModel>({
  name: NAME_SATE_TOKEN,
  defaults: {
    name: 'Ahmed',
  },
})
@Injectable()
export class NameState {
  constructor() {}
  //.............
  @Action(ChangeName)
  changeName(ctx: StateContext<NameStateModel>, action: ChangeName) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      name: action.newName,
    });
  }

  // What part of data to return of that state
  @Selector()
  static value(state: NameStateModel) {
    return state.name;
  }
}
