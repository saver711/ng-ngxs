import { StateClass } from '@ngxs/store/internals';
import { ValueState } from './value-state/value.state';
import { NameState } from './name-state/name.state';


export const appStates: StateClass[] = [ValueState, NameState];
